const { MongoClient, ObjectId } = require('mongodb');

async function updateDocuments() {
  const client = new MongoClient(
    'mongodb+srv://taka:taka@cluster0.a4saq7s.mongodb.net/?retryWrites=true&w=majority'
  );
  await client.connect();

  const database = client.db('natours');
  const collection = database.collection('tours');

  const documents = await collection.find({}).toArray();

  for (const document of documents) {
    const updatedDocument = { ...document, _id: new ObjectId(document._id) };
    await collection.updateOne(
      { _id: document._id },
      { $set: updatedDocument }
    );
  }

  console.log('Documents updated successfully');

  await client.close();
}

updateDocuments();
console.log('updated');
