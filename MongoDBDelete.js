var MongoClient = require('mongodb').MongoClient;

async function main() {
    var client = new MongoClient('mongodb://localhost:27017/udara');
    try {
        await client.connect();
        var result = await (await client.db('udara').collection('employee').deleteOne({EmpName: 'Ajith' }));
        console.log("You deleted = " + result.deletedCount);
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
};
main().catch(console.error);