const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Go out'}).then((res) => {
  //   console.log(res);
  //   // console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos')
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Go out'}).then((res) => {
  //   console.log(res);
  //   // console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos')
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
    // console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos')
  });
  // client.close();
});