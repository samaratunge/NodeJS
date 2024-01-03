var MongoClient = require('mongodb').MongoClient;

async function main() {
    var client = new MongoClient("mongodb://localhost:27017/udara");
    try {
        await client.connect();
        var values = [{ EmpID: '1234', EmpName: 'Nimal', EmpAddress: 'Colombo' },
        { EmpID: '2345', EmpName: 'Kamal', EmpAddress: 'Gampaha' },
        { EmpID: '3456', EmpName: 'Amal', EmpAddress: 'Kandy' },
        { EmpID: '4567', EmpName: 'Ramal', EmpAddress: 'Balummahara' },
        { EmpID: '5678', EmpName: 'Sunil', EmpAddress: 'Mudungoda' },
        { EmpID: '6789', EmpName: 'Ranil', EmpAddress: 'Nigambo' },
        { EmpID: '9876', EmpName: 'Ajith', EmpAddress: 'Chilaw' }];
        var result = await client.db('udara').collection('employee').insertMany(values);
        console.log("Database mltiple inserted count = " + result.insertedCount)
    } catch (error) {
        console(error);
    } finally {
        client.close();
    }
};
main().catch(console.error);