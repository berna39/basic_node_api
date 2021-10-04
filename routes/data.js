const router = require('express').Router();
const checkAuth = require('../midlewares/checkAuth');
const data = require('../data.json');

router.post('/test', checkAuth,async (req,resp, next) => {
    console.log(req.query);
    console.log(req.body);
    resp.send(data);
});

module.exports = router;
