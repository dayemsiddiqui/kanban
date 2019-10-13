import { Task } from '../interfaces/Task';
import { taskCollection, firestoreClient } from '../lib/firestore';

export async function getAllTasks(): Promise<Task[]> {
    const dataItems: Task[] = [];
    const documentRefs = await taskCollection.listDocuments();
    const documentSnapshots = await firestoreClient.getAll(...documentRefs);
    for (const documentSnapshot of documentSnapshots) {
        if (documentSnapshot.exists) {
            console.log(`Found document with data: ${documentSnapshot.id}`);
            dataItems.push({ id: documentSnapshot.id, ...documentSnapshot.data() } as Task);
        } else {
            console.log(`Found missing document: ${documentSnapshot.id}`);
        }
    }
    return dataItems;
}

export async function getTaskByStatus(statusValue: string): Promise<Task[]> {
    const dataItems: Task[] = [];
    const querySnapshot = await taskCollection.where('status', '==', statusValue).get();
    querySnapshot.forEach(documentSnapshot =>
        dataItems.push({ id: documentSnapshot.id, ...documentSnapshot.data() } as Task),
    );
    return dataItems;
}

export async function createTask(task: Task): Promise<FirebaseFirestore.DocumentReference> {
    const newTask = await taskCollection.add(task);
    return newTask;
}
