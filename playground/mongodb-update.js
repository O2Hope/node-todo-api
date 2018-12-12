const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    //findOneAndDelete
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c0da4dad020bbb256a42565')
    }, {
            $set: {
                complete: false
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })

    //client.close();
});