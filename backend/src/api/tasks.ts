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
import isAuthorized from '../middlewares/auth.middleware';
const taskRouter = express.Router();

taskRouter.get('/', isAuthorized, getTaskHandler);
taskRouter.post('/', isAuthorized, postTaskValidator, requestBodyErrorValidator, postTaskHandler);
taskRouter.get('/:id', isAuthorized, getTaskByIdHandler);
taskRouter.put('/:id', isAuthorized, putTaskValidator, requestBodyErrorValidator, putTaskByIdHandler);
taskRouter.delete('/:id', isAuthorized, deleteTaskByIdHandler);

//export this router to use in our index.js
export default taskRouter;
