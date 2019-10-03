const express = require('express');
const app = express();
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

app.get('/', (req, res) => {
  let dataItems = [];
  db.collection('tasks').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      dataItems.push(doc.data())
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  res.status(200).json({status: 'Success', payload: dataItems});
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});