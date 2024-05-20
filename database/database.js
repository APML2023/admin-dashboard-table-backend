const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://data_IT:data_IT@apml.6w5pyjg.mongodb.net/'

const client = new MongoClient(uri);
client.connect();

async function employee(){
    try{
        const dataset = await client.db('ribbons_balloons').collection("employers").find().toArray();
        return JSON.stringify(dataset);
    }
    catch{
        console.log("db closed");
        await client.close();
    }
}

module.exports = {employee};