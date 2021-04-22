const express= require('express')
const logger= require('morgan')
const cors= require('cors')
const dotenv=require('dotenv')
const connectDb=require('./config/Db')
const mongoose= require('mongoose')
const app =express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
const tasks= require('./router/Tasks')
//Includeing path of config
dotenv.config({path:'./config/config.env'})
if(process.env.NODE_ENV==='development'){
    app.use(logger('dev'))
}
connectDb();


// app.get('/', (req,res)=>{
//     res.status(200).json({
//         success:true
//     })
// })
app.use('/tasks',tasks)
const PORT=process.env.PORT||5000
 
app.listen(PORT, () => {
    console.log(`server is running on ${process.env.NODE_ENV} mode at ${PORT}`);
});
process.on('unhandleRejection',(err,promise)=>{
    console.log(`erro ${err.message}`)
    server.close(()=>process.close(1))
})