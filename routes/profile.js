const express = require('express');
const router = express.Router();

router.get('/steam/:steamid', (req, res) => {
    console.log(req.params.steamid);
    res.send('Hello');
});

module.exports = router;