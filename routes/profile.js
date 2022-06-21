const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const router = express.Router();

router.get('/steam/:steamid', async (req, res) => {
    try{
        const headers = {
            'TRN-Api-Key': process.env.TRACKER_API_KEY
        }

        const id = req.params.steamid;
        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/steam/${id}`, {headers});
        const data = await response.json()

        if(data.errors){
            return res.status(404).json({
                message: "Profile not found!"
            })
        }

        res.json(data)
    } catch (err){
        console.error(err);
        res.status(500).json({
            message: 'Server Error'
        });
    }
});

module.exports = router;