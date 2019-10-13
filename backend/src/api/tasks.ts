import express from 'express';
import { getAllTasks } from '../services/tasks';
const taskRouter = express.Router();

taskRouter.get('/', async (req, res) => {
    const tasks = await getAllTasks();
    return res.status(200).json({ status: 'Success', payload: tasks });
});

//export this router to use in our index.js
export default taskRouter;
