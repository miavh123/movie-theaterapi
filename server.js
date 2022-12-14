const express= require('express');
const app = express();
const port = 300;
const {db} = require('./db');


const showRouter = require('./routes/show');
const userRouter = require ('./routes/user')



app.get ('/',(req,res)=>{
    res.json()
})

app.use('/show',showRouter);
app.use('/user',userRouter);

app.listen(port,() => {
console.log('Your server is live'+ port)
})