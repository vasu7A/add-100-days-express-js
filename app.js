let addDays = require('date-fns/addDays');
const express = require("express");

const app = express();

app.get("/",(request,response)=>{
    let date = new Date();
    date = addDays(date,100);
    response.send(date);
});

app.listen(3000);