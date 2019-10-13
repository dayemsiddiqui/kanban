import { Task } from '../interfaces/Task';
import { taskCollection, firestoreClient } from '../lib/firestore';

export async function getAllTasks(): Promise<Task[]> {
    const dataItems: Task[] = [];
    const documentRefs = await taskCollection.listDocuments();
    const documentSnapshots = await firestoreClient.getAll(...documentRefs);
    for (const documentSnapshot of documentSnapshots) {
        if (documentSnapshot.exists) {
            console.log(`Found document with data: ${documentSnapshot.id}`);
            dataItems.push(documentSnapshot.data() as Task);
        } else {
            console.log(`Found missing document: ${documentSnapshot.id}`);
        }
    }
    return dataItems;
}
