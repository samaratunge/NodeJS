var MongoClient = require('mongodb').MongoClient;

async function main(){
    var url = 'mongodb://localhost:27017/udara';
    const client = new MongoClient(url);

    try{
        await client.connect();
        var empObj = {EmpID : '1361', EmpName : 'Udara', EmpAddress : 'Gampaha'};
        var result = await client.db('udara').collection('employee').insertOne(empObj);
        console.log('Data inserted = ' + result.insertedId);
    }catch(error){
        console.error(error);
    }finally{
        client.close();
    }
}
main().catch(console.error);