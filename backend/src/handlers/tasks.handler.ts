import { GetTaskQueryParams, Task } from '../interfaces/Task.interface';
import { getTaskByStatus, getAllTasks, createTask, updateTask, getTask, deleteTask } from '../services/tasks.service';
import { Request, Response } from 'express';
import RequestWithUser from '../interfaces/RequstWithUser.interface';

export async function getTaskHandler(req: RequestWithUser, res: Response): Promise<Task[]> {
    const params: GetTaskQueryParams = req.query;
    if (!req.user) {
        return [];
    }

    const userIdToken = req.user;
    let tasks: Task[];
    if (params.status) {
        tasks = await getTaskByStatus(params.status, userIdToken);
    } else {
        tasks = await getAllTasks(userIdToken);
    }
    res.status(200).json({ status: 'Success', payload: tasks });
    return tasks;
}

export async function postTaskHandler(req: Request, res: Response): Promise<Task> {
    const task = await createTask(req.body as Task);
    res.status(200).json({ status: 'Success', payload: task });
    return task;
}

export async function getTaskByIdHandler(req: Request, res: Response): Promise<Task | boolean> {
    const task = await getTask(req.params.id);
    if (task) {
        res.status(200).json({ status: 'Success', payload: task });
    } else {
        res.status(400).json({ status: 'failed', payload: 'Task not found.' });
    }
    return task;
}

export async function putTaskByIdHandler(req: Request, res: Response): Promise<Task | boolean> {
    const task = await updateTask(req.params.id, req.body as Task);
    if (task) {
        res.status(200).json({ status: 'Success', payload: task });
    } else {
        res.status(400).json({ status: 'failed', payload: 'Failed to update task.' });
    }
    return task;
}

export async function deleteTaskByIdHandler(req: Request, res: Response): Promise<void> {
    const response = await deleteTask(req.params.id);
    res.status(200).json({ status: 'Success', payload: response });
}
