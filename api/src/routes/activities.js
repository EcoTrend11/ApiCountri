const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('estas en la ruta get de activities')
})

module.exports = router