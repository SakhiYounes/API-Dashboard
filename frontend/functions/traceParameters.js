const { MongoClient } = require('mongodb');

async function traceParameters(input, output) {
    // Replace the following with your MongoDB connection URI
    const uri = 'mongodb+srv://sakhiyounes:159753@api.ai6qzb2.mongodb.net/test';
    
    // Replace the following with your database and collection names
    const dbName = 'mydb';
    const collectionName = 'traceParameters';
  
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
        await client.connect();
    
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
    
        const traceDoc = {
          input: input,
          output: output,
          timestamp: new Date()
        };
    
        const result = await collection.insertOne(traceDoc);
    
        // Access the inserted document using the insertedId property
        const insertedDoc = await collection.findOne({ _id: result.insertedId });
    
        console.log('Traced parameters: ', insertedDoc);
      } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
      } finally {
        await client.close();
      }
  }
  

traceParameters('Example Input', 'Example Output');
