const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a6c862b38f32f9823d94d5d')
  }, {
    $set: {completed: false},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  }, (err) => {
    console.log('Unable to fetch todos')
  });

  // client.close();
});