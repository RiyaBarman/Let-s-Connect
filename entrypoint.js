const express=require('express');
const app=express();
const port=8000;
//USE EXPRESS ROUTER
app.use('/',require('./routers/index'));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
        return;
    }
    console.log(`server is running on port:${port}`);
});
