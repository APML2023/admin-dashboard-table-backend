const express =require( "express")
const cors = require('cors')
const { db } = require("./utils");
const { config } = require("./utils/config");
const { ObjectId, BSON } = require("mongodb");
const { default: mongoose, mongo } = require("mongoose");

const app = express();
const PORT = 3001
app.use(cors())
app.use(express.json())

app.get('/employers', async (req, res)=>{
    try {
        const data = await db({
            collection_name: config.db.attendance_prod.collections.employers, 
            db_name: config.db.attendance_prod.name, 
            uri: config.uri,
            type:'count',
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.get('/employees/:company_id', async (req, res)=>{
    try {
        // const companyId = new mongo.ObjectId(req.params.company_id)
        const companyId = req.params.company_id
        const data = await db({
            collection_name: config.db.attendance_prod.collections.employees, 
            db_name: config.db.attendance_prod.name, 
            uri: config.uri, 
            type:'find',
            param: {
               "companyId": companyId + ""
            }
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, ()=>{
    console.log(`server Listning ${PORT}`);
})