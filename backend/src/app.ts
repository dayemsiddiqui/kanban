import express from 'express';
import taskRouter from './api/tasks';
import statusRouter from './api/status';
import bodyParser from 'body-parser';

// Create a new express application instance
const app: express.Application = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', statusRouter);
app.use('/tasks', taskRouter);

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
