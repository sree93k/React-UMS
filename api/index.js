import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.log(error);
})
const app=express()


app.listen(4000,()=>{
    console.log('Server UMS on port 4000');
})

app.use('/api/user',userRoutes)