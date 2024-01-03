var MongoClient = require('mongodb').MongoClient;

async function main() {
    var client = new MongoClient("mongodb://localhost:27017/udara");
    try {
        await client.connect();
        var result = await client.db('udara').collection('employee').find({EmpID: '1361'}).toArray();
        console.log(result);
    } catch (error) {
        console(error);
    } finally {
        client.close();
    }
}
main().catch(console.error);