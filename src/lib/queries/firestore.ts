import { auth, db } from '@/config/firebase';
import {
    collection, doc, getDoc, getDocs,
    query, where, orderBy, updateDoc,
    addDoc, setDoc, onSnapshot,
    Timestamp, Query, DocumentData
} from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { Product, Seller } from "@/types";
import { UserInfo } from "firebase/auth";

/**
 * Defines the structure for query filtering and sorting of products
 * Allows filtering by category, subcategory, district, region, and sorting
 */
interface QueryFilter {
    /** Filter by product category ID */
    category?: string;
    /** Filter by product subcategory ID */
    subcategory?: string;
    /** Filter by district */
    district?: string;
    /** Filter by region */
    region?: string;
    /** Sort configuration for query results */
    sort?: {
        /** Field to sort by */
        field: string;
        /** Sort direction */
        direction: 'asc' | 'desc';
    };
}

/**
 * Constructs a filtered Firestore query based on provided filters
 * @param baseQuery - The initial Firestore query to be modified
 * @param filter - Optional query filters and sorting parameters
 * @returns A modified Firestore query with applied filters
 */
const constructFilteredQuery = (baseQuery: Query<DocumentData>, filter: QueryFilter = {}): Query<DocumentData> => {
    let filteredQuery = baseQuery;

    // Mapping of filter keys to query modification functions
    const filterMap: Record<keyof QueryFilter, (q: Query<DocumentData>) => Query<DocumentData>> = {
        category: q => query(q, where('categoryId', '==', filter.category)),
        subcategory: q => query(q, where('subcategoryId', '==', filter.subcategory)),
        district: q => query(q, where('district', '==', filter.district)),
        region: q => query(q, where('region', '==', filter.region)),
        sort: q => filter.sort ? query(q, orderBy(filter.sort.field, filter.sort.direction)) : q
    };

    // Apply filters dynamically
    Object.keys(filterMap).forEach(key => {
        if (filter[key as keyof QueryFilter]) {
            filteredQuery = filterMap[key as keyof QueryFilter](filteredQuery);
        }
    });

    return filteredQuery;
};

/**
 * Product service providing methods for product-related Firestore operations
 */
export const productService = {
    /**
     * Retrieves products with optional filtering and sorting
     * @param filter - Optional query filters
     * @returns Promise resolving to an array of products
     */
    async getProducts(filter: QueryFilter = {}): Promise<Product[]> {
        const baseQuery = query(collection(db, 'products'));
        const filteredQuery = constructFilteredQuery(baseQuery, filter);

        const snapshot = await getDocs(filteredQuery);
        return snapshot.docs.map(doc => doc.data() as Product);
    },

    /**
     * Sets up a real-time listener for products with optional filtering
     * @param filter - Optional query filters
     * @param callback - Function to handle product updates
     * @returns Unsubscribe function for the snapshot listener
     */
    async getProductsSnapshot(filter: QueryFilter, callback: (products: Product[]) => void) {
        const baseQuery = query(collection(db, 'products'));
        const filteredQuery = constructFilteredQuery(baseQuery, filter);

        return onSnapshot(filteredQuery, snapshot => {
            const products = snapshot.docs.map(doc => doc.data() as Product);
            callback(products);
        });
    },

    /**
     * Retrieves a specific product by its ID
     * @param id - Product document ID
     * @returns Promise resolving to the product or null
     */
    async getProductById(id: string): Promise<Product | null> {
        const docRef = doc(db, 'products', id);
        const snapshot = await getDoc(docRef);
        return snapshot.exists() ? snapshot.data() as Product : null;
    },

    /**
     * Adds a new product to the Firestore collection
     * @param product - Product data to be added
     * @returns Promise resolving to the new document ID
     */
    async addProduct(product: Product): Promise<string> {
        const docRef = await addDoc(collection(db, 'products'), {
            ...product,
            createdAt: Timestamp.now()
        });
        return docRef.id;
    },

    /**
     * Updates an existing product
     * @param productId - ID of the product to update
     * @param data - Partial product data to update
     */
    async updateProduct(productId: string, data: Partial<Product>): Promise<void> {
        const productRef = doc(db, 'products', productId);
        await updateDoc(productRef, data);
    },

    /**
     * Retrieves products for a specific seller
     * @param sellerId - ID of the seller
     * @param filter - Optional query filters
     * @returns Promise resolving to an array of products
     */
    async getProductsBySeller(sellerId: string, filter: QueryFilter = {}): Promise<Product[]> {
        const baseQuery = query(collection(db, 'products'), where('sellerId', '==', sellerId));
        const filteredQuery = constructFilteredQuery(baseQuery, filter);

        const snapshot = await getDocs(filteredQuery);
        return snapshot.docs.map(doc => doc.data() as Product);
    }
};

/**
 * Seller service providing methods for seller-related Firestore operations
 */
export const sellerService = {
    /**
     * Creates a new seller profile for a user
     * @param userId - ID of the user becoming a seller
     * @param details - Optional additional seller details
     */
    async addSeller(userId: string, details: Partial<Seller> = {}): Promise<void> {
        const userRef = doc(db, 'users', userId);
        const userSnapshot = await getDoc(userRef);
        const user = userSnapshot.data() as UserInfo;

        const seller: Seller = {
            id: userId,
            email: user.email,
            photoURL: user.photoURL,
            name: details.name || user.displayName,
            description: details.description || '',
            ads: [],
            plan: 'free',
            ...details
        };

        await setDoc(doc(db, 'sellers', userId), seller);
    },

    /**
     * Updates a seller's subscription plan
     * @param sellerId - ID of the seller
     * @param plan - New subscription plan
     */
    async updateSellerPlan(sellerId: string, plan: 'free' | 'standard' | 'pro'): Promise<void> {
        const sellerRef = doc(db, 'sellers', sellerId);
        await updateDoc(sellerRef, { plan });
    },

    /**
     * Retrieves seller information
     * @param sellerId - ID of the seller
     * @returns Promise resolving to seller data or null
     */
    async getSeller(sellerId: string): Promise<Seller | null> {
        const docRef = doc(db, 'sellers', sellerId);
        const snapshot = await getDoc(docRef);
        return snapshot.exists() ? snapshot.data() as Seller : null;
    },

    /**
     * Updates a seller's profile picture
     * @param user - Current user information
     * @param url - New profile picture URL
     */
    async updateSellerProfilePic(user: UserInfo, url: string): Promise<void> {
        const sellerRef = doc(db, 'sellers', user.uid);
        await updateDoc(sellerRef, { photoURL: url });

        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { photoURL: url });
        }
    }
};