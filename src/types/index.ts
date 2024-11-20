import {Timestamp} from "firebase/firestore";
import React from "react";

export interface SearchParams {
    [key: string]: string | string[] | undefined
}

export interface StoredFile {
    id: string
    name: string
    url: string
}

export interface Option {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
    withCount?: boolean
}

export interface PriceHistory {
    id: string
    price: number
    createdAt: Timestamp
}

export interface DataTableFilterField<TData> {
    label: string
    value: keyof TData
    placeholder?: string
    options?: Option[]
}

export type ProductStatus = "active" | "draft" | "archived";

export interface Product {
    id: string;
    title: string;
    description?: string;
    thumbnail?: string;
    images: string[];
    categoryId: string;
    subcategoryId?: string;
    price: number;
    originalPrice?: number;
    priceHistory?: PriceHistory[];
    inventory?: number;
    score: number;
    status: ProductStatus;
    sellerId: string;
    createdAt: Timestamp;
    updatedAt: Date;
}

export interface Seller {
    id: string;
    name?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
    photoURL?: string | null;
    ads?: string[];
    plan?: 'free' | 'standard' | 'pro';
    description?: string;
    adsCount?: number;
}
