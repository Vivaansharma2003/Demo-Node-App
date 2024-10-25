const express =  require("express");
const app =  express();
const PORT = 3000;

app.get("/",(req,res)=> {
     res.send(
        "Welcome to the nodejs application"
     );
});

app.listen(PORT, ()=>{
    console.log('the server is up and running on http://localhost:3000');
});