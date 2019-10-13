import express from 'express';
import taskRouter from './api/tasks';
import statusRouter from './api/status';

// Create a new express application instance
const app: express.Application = express();

app.use('/', statusRouter);
app.use('/tasks', taskRouter);

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
