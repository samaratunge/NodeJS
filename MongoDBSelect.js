var MongoClient = require('mongodb').MongoClient;

async function main(){
    var client = new MongoClient("mongodb://localhost:27017/udara");
    try{
        await client.connect();
        var result = await client.db('udara').collection('employee').findOne();
        console.log(result);
        console.log(result.EmpName);
    }catch(error){
        console(error);
    }finally{
        client.close();        
    }
}
main().catch(console.error);
