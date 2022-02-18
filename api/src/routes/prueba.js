const { Router } = require("express");
const  {Country}  = require("../db.js");

const router = Router();

router.get('/', async (req, res) => {
    try{
        const prueba = await Country.findByPk()
        console.log(prueba)
        res.send(prueba)
    }
    catch(error){
        res.status(500).send(error)
    }
})



module.exports = router