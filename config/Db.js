const mongoose = require("mongoose")

const connectDb=async()=>{
    const conn=await mongoose.connect(process.env.Db_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    console.log(`db is connected...`)
}
module.exports=connectDb;