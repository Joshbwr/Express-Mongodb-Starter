const {MongoClient} = require('mongodb');
let db;

const connect = async () => {
    const configOptions = {useNewUrlParser: true, useUnifiedTopology: true}
    try{
        const dbConnection = await MongoClient.connect(process.env.MONGO_URI, configOptions);
        db = dbConnection.db(process.env.MONGO_DATABASE)
    }catch(ex){
        console.log(ex);
        process.exit(1);
    }
};

const get = () => {
    return db;
};

module.exports = {
    connect,
    get
};