import { storage } from "@/config/firebase";
import {
    ref,
    uploadBytesResumable,
    deleteObject,
    getDownloadURL,
    list,
    listAll,
    getBytes,
    StorageReference,
    UploadTask,
    uploadBytes
} from "firebase/storage";

interface UploadOptions {
    onProgress?: (progress: number) => void;
    onError?: (error: Error) => void;
    onComplete?: (ref: StorageReference) => void;
}

/**
 * Upload an image with detailed progress tracking
 * @param file - File to upload
 * @param path - Storage path for the file
 * @param options - Optional upload callbacks
 * @returns UploadTask for the upload process
 */
export function uploadImage(
    file: File,
    path: string,
    options: UploadOptions = {}
): UploadTask {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            options.onProgress?.(progress);
        },
        (error) => {
            options.onError?.(error);
        },
        () => {
            options.onComplete?.(uploadTask.snapshot.ref);
        }
    );

    return uploadTask;
}

/**
 * Upload a profile picture and return its download URL
 * @param file - File to upload
 * @param path - Storage path for the file
 * @returns Promise with download URL
 */
export async function uploadProfilePic(file: File, path: string): Promise<string> {
    const storageRef = ref(storage, path);
    const task = await uploadBytes(storageRef, file);
    return getDownloadURL(task.ref);
}

/**
 * Delete an image by path
 * @param path - Storage path of the image
 * @returns Promise resolving when deletion is complete
 */
export function deleteImage(path: string): Promise<void> {
    const storageRef = ref(storage, path);
    return deleteObject(storageRef);
}

/**
 * Delete an image by reference
 * @param storageRef - StorageReference to delete
 * @returns Promise resolving when deletion is complete
 */
export function deleteImageByRef(storageRef: StorageReference): Promise<void> {
    return deleteObject(storageRef);
}

/**
 * Get download URL for an image
 * @param path - Storage path of the image
 * @returns Promise with download URL
 */
export function getImageURL(path: string): Promise<string> {
    const storageRef = ref(storage, path);
    return getDownloadURL(storageRef);
}

/**
 * Get download URL by storage reference
 * @param storageRef - StorageReference
 * @returns Promise with download URL
 */
export function getImageURLbyRef(storageRef: StorageReference): Promise<string> {
    return getDownloadURL(storageRef);
}

/**
 * List items in a storage path
 * @param path - Storage path to list
 * @returns Promise with list results
 */
export function listImages(path: string) {
    const storageRef = ref(storage, path);
    return list(storageRef);
}

/**
 * List all items in a storage path
 * @param path - Storage path to list
 * @returns Promise with all list results
 */
export function listAllImages(path: string) {
    const storageRef = ref(storage, path);
    return listAll(storageRef);
}

/**
 * Get bytes for an image
 * @param path - Storage path of the image
 * @returns Promise with image bytes
 */
export function getImageBytes(path: string) {
    const storageRef = ref(storage, path);
    return getBytes(storageRef);
}

/**
 * Get storage reference from URL
 * @param url - Download URL
 * @returns StorageReference
 */
export function getRefByUrl(url: string): StorageReference {
    return ref(storage, url);
}