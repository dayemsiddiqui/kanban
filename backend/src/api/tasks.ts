import express from 'express';
import {
    getTaskHandler,
    postTaskHandler,
    getTaskByIdHandler,
    putTaskByIdHandler,
    deleteTaskByIdHandler,
} from '../handlers/tasks.handler';
import { postTaskValidator, putTaskValidator } from '../validators/tasks.validators';
import { requestBodyErrorValidator } from '../middlewares/task.middleware';
const taskRouter = express.Router();

taskRouter.get('/', getTaskHandler);
taskRouter.post('/', postTaskValidator, requestBodyErrorValidator, postTaskHandler);
taskRouter.get('/:id', getTaskByIdHandler);
taskRouter.put('/:id', putTaskValidator, requestBodyErrorValidator, putTaskByIdHandler);
taskRouter.delete('/:id', deleteTaskByIdHandler);

//export this router to use in our index.js
export default taskRouter;
