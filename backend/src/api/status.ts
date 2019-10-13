import express from 'express';
const statusRouter = express.Router();

statusRouter.get('/', (req, res) => {
    return res.status(200).json({ status: 'Success' });
});

statusRouter.get('/ping', (req, res) => {
    res.status(200).json({ status: 'pong' });
});

statusRouter.get('/hello', (req, res) => {
    res.status(200).json({ status: 'Hi' });
});

//export this router to use in our index.js
export default statusRouter;
