import { Firestore } from '@google-cloud/firestore';

// Create firestore client
export const firestoreClient = new Firestore();

export const taskCollection = firestoreClient.collection('tasks');
