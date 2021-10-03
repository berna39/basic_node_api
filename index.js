const express = require('express');
var app = express();
const port = process.env.PORT || 5000

app.get('/test', (req,resp, next) => {
    console.log(req.query);
    console.log(req.body);
    resp.send({ "feedback": "okey by here" })
})

app.listen(port, (err) => {
    console.log("up and running");
});
