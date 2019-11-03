import { Task } from '../interfaces/Task.interface';
import { taskCollection, firestoreClient } from '../lib/firestore.lib';
import { auth } from 'firebase-admin';

export async function getAllTasks(userIdToken: auth.DecodedIdToken): Promise<Task[]> {
    const dataItems: Task[] = [];
    try {
        const querySnapshot = await taskCollection.where('uid', '==', userIdToken.uid).get();
        querySnapshot.forEach(documentSnapshot => {
            if (documentSnapshot.exists) {
                dataItems.push({ id: documentSnapshot.id, ...documentSnapshot.data() } as Task);
            } else {
                console.log(`Found missing document: ${documentSnapshot.id}`);
            }
        });
        return dataItems;
    } catch (err) {
        console.error('Failed to fetch tasks', err);
        return [];
    }
}

export async function getTaskByStatus(statusValue: string, userIdToken: auth.DecodedIdToken): Promise<Task[]> {
    const dataItems: Task[] = [];
    const querySnapshot = await taskCollection
        .where('uid', '==', userIdToken.uid)
        .where('status', '==', statusValue)
        .get();
    querySnapshot.forEach(documentSnapshot => {
        if (documentSnapshot.exists) {
            dataItems.push({ id: documentSnapshot.id, ...documentSnapshot.data() } as Task);
        } else {
            console.log(`Found missing document: ${documentSnapshot.id}`);
        }
    });
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
