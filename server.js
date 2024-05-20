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
        const companyName = req.params.companyName
        const data = await db({
            collection_name: config.db.ribbons_balloons.collections.employers, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri,
            type:'find',
            param: {
            },
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})
app.get('/mvrs', async (req, res)=>{
    try {
        const data = await db({
            collection_name: config.db.ribbons_balloons.collections.mvrs, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri,
            type:'find',
            param: {
            },
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.get('/kocs', async (req, res)=>{
    try {
        const data = await db({
            collection_name: config.db.ribbons_balloons.collections.kocs, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri,
            type:'find',
            param: {
            },
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.get('/hsos', async (req, res)=>{
    try {
        const data = await db({
            collection_name: config.db.ribbons_balloons.collections.hsos, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri,
            type:'find',
            param: {
            },
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.get('/hocs', async (req, res)=>{
    try {
        const data = await db({
            collection_name: config.db.ribbons_balloons.collections.hocs, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri,
            type:'find',
            param: {
            },
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
            collection_name: config.db.ribbons_balloons.collections.employees, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri, 
            type:'aggrigation',
            param: [
                {
                  $match: {
                    companyId: companyId + "" 
                  }
                },
                {
                  $lookup: {
                    "from": "attendances",
                    "let": { "id_str": { "$toString": "$_id" } },
                    "pipeline": [
                      {
                        "$match": {
                          "$expr": {
                            "$eq": [ "$employeeId", "$$id_str" ]
                          }
                        }
                      }
                    ],
                    "as": "attendance"
                  }
                },
                {
                  $addFields: {
                    lastAttendance: { $arrayElemAt: ["$attendance.checkInTime", -1] }
                  }
                }
              ]
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.get('/attendances/', async (req, res)=>{
    try {
        const data = await db({
            collection_name: config.db.ribbons_balloons.collections.attendances, 
            db_name: config.db.ribbons_balloons.name, 
            uri: config.uri, 
            type:'aggrigation',
            param:[
                {
                  $group: {
                    _id: "$employeeId",
                    lastrecord: {
                      $last: {
                        $dateToString: {
                          format: "%Y-%m-%d",
                          date: "$checkInTime"
                        }
                      }
                    }
                  }
                }
              ]
        })
        res.send({ data });
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, ()=>{
    console.log(`server Listning ${PORT}`);
})