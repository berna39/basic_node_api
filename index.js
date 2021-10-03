const express = require('express');
var app = express();

app.get('/test', (req,resp, next) => {
    console.log(req.query);
    console.log(req.body);
    resp.send({ "feedback": "okey" })
})

app.listen(5000, (err) => {
    console.log("up and running");
});
