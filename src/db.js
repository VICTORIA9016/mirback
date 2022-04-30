const mongoose = require("mongoose")

function conect() {
    const url = "mongodb://localhost:27017/backend";
    mongoose.connect(url, {useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once( "open", ()=>{console.log("database")})
    
}

module.exports = {conect}