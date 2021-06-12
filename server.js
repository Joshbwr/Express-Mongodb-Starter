const app = require('./app.js');
const atlas = require('./api/db.config.js');

app.listen(process.env.PORT, async () => {
    console.log(`Running on port ${process.env.PORT}`)
    try{
        await atlas.connect();
        console.log(`Mongodb connected to database: ${process.env.MONGO_DATABASE}`)
    }catch(ex){
        console.log(ex);
        process.exit(1);
    }
});