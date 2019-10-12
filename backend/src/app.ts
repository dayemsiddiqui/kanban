import express from 'express';
import { Firestore } from '@google-cloud/firestore';

// Create a new express application instance
const app: express.Application = express();

// Create firestore client
const firestore = new Firestore();

app.get('/', (req, res) => {
    const dataItems: FirebaseFirestore.DocumentData = [];
    const tasks = firestore.collection('tasks');

    tasks
        .listDocuments()
        .then(documentRefs => {
            return firestore.getAll(...documentRefs);
        })
        .then(documentSnapshots => {
            for (const documentSnapshot of documentSnapshots) {
                if (documentSnapshot.exists) {
                    console.log(`Found document with data: ${documentSnapshot.id}`);
                    dataItems.push(documentSnapshot.data());
                } else {
                    console.log(`Found missing document: ${documentSnapshot.id}`);
                }
            }
        })
        .then(() => res.status(200).json({ status: 'Success', payload: dataItems }));
});

app.get('/ping', (req, res) => {
    res.status(200).json({ status: 'pong' });
});

app.get('/hello', (req, res) => {
    res.status(200).json({ status: 'Hi' });
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
