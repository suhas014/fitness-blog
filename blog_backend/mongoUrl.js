const dotenv = require("dotenv");
dotenv.config()

const url=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g48n31p.mongodb.net/?retryWrites=true&w=majority`;
        //    mongodb+srv://incboy24:<password>@cluster0.g48n31p.mongodb.net/?retryWrites=true&w=majority

module.exports=url;