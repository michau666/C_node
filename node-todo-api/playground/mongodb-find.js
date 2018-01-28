const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a6c72b2e8d4772700a3923c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos')
  // });
  
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
    // console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos')
  });

  // client.close();
});