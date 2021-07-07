const { MongoClient } = require("mongodb");
const urlModule=require("./DBUrlKeyVault");

//for locally
//const url=require("./DBUrlModule");
//const uri = url.dburl;

var uri="";

async function getUrlFromVault(){
    await urlModule.getDBUrl(function(result){
        console.log(result);
        uri=result;
    });    
}


async function getChartsData(callback) {
    if(uri==="")
        await getUrlFromVault();

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        const database = await client.db('mongoDatabase0');
        const user = await database.collection('charts');

        //console.log(user);
        const result =[];
        await user.find().forEach(function (myDoc) {
            //console.log( "user: " + myDoc.name ); 
            const chart={"type":myDoc.type, "elements":myDoc.elements};
            result.push(chart);
        });
        console.log(result);
        //await client.close();
        callback(result);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}


async function dumpDataDB(data, callback) {
    if(uri==="")
        await getUrlFromVault();
        
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    try {
        await client.connect();
        const database = await client.db('mongoDatabase0');
        const user = await database.collection('charts');
        await user.insertMany(data,function(err,res){
            if(err) callback(err);
            else callback("Inserted!");
        });
        
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}


//run().catch(console.dir);

// run(result => {
//     console.log(result);
// });

module.exports.getChartsData = getChartsData;

module.exports.dumpDataDB = dumpDataDB;