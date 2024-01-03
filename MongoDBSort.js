var MongoClient = require('mongodb').MongoClient;

async function main() {
    var client = new MongoClient('mongodb://localhost:27017/udara');
    try {
        await client.connect();
        var result = await client.db('udara').collection('employee')
            .find({}, { projection: { _id: 0, EmpID: 1, EmpName: 1 } }).sort({ EmpName: -1 }).toArray();
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
};
main().catch(console.error);