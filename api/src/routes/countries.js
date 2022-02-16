const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('estas en la ruta get de countries')
})

module.exports = router