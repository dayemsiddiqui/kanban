import { Task } from '../interfaces/Task.interface';
import { taskCollection, firestoreClient } from '../lib/firestore.lib';

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

export async function createTask(task: Task): Promise<Task> {
    const taskReference = await taskCollection.add(task);
    const taskSnapshot = await taskReference.get();
    return { id: taskSnapshot.id, ...taskSnapshot.data() } as Task;
}

export async function updateTask(id: string, task: Task): Promise<Task | boolean> {
    try {
        await taskCollection.doc(id).update(task);
        return { id, ...task } as Task;
    } catch {
        return false;
    }
}

export async function deleteTask(id: string): Promise<{}> {
    await taskCollection.doc(id).delete();
    return { description: 'Document deleted succesfully' };
}

export async function getTask(id: string): Promise<Task | boolean> {
    const taskSnapshot = await taskCollection.doc(id).get();
    if (taskSnapshot.exists) {
        return { id: taskSnapshot.id, ...taskSnapshot.data() } as Task;
    } else {
        return false;
    }
}
