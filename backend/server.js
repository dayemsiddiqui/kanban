const express = require('express');
const app = express();
const { Firestore } = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();

app.get('/', (req, res) => {
  let dataItems = [];
  let tasks = firestore.collection('tasks');

  tasks
    .listDocuments()
    .then(documentRefs => {
      return firestore.getAll(...documentRefs);
    })
    .then(documentSnapshots => {
      for (let documentSnapshot of documentSnapshots) {
        if (documentSnapshot.exists) {
          console.log(`Found document with data: ${documentSnapshot.id}`);
          dataItems.push(documentSnapshot.data())
        } else {
          console.log(`Found missing document: ${documentSnapshot.id}`);
        }
      }
    })
    .then(() => res.status(200).json({ status: 'Success', payload: dataItems }));

    
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
