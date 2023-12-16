import dotenv from 'dotenv'
import connectDB from './db/index.js'
import { app } from './app.js'
dotenv.config({
    path:'./env'
})

const port = process.env.PORT ;
connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`);
    });
})
.catch((err)=>{
    console.log(`mongoDb connection failed ${err}`);
})