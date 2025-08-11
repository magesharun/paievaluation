const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const requestTimeStamp=require('./midllewares/requestTimeStamp');
dotenv.config();

app.use(express.json());
app.use(requestTimeStamp);


app.use('/api/publishers',require('./routes/publisherRoutes'))
app.use('/api/games',require('./routes/gameRoutes'))


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDb connected');
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on port ${process.env.PORT}`);
        
    }).catch(err=>console.log(err)
    );
    
})