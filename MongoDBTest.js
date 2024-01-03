var MongoClient = require('mongodb').MongoClient;

async function main() {
    const uri = "mongodb://localhost:27017/udara";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await client.db().createCollection('customers');
        console.log("DataCollection created");        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);