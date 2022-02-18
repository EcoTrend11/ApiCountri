const { Router } = require('express');
const router = Router();

const routerCountries = require('./countries');
const routerActivities = require('./activities');
const prueba = require ('./prueba.js')

router.use('/coun', routerCountries);
router.use('/acti', routerActivities);
router.use('/prueba', prueba);

module.exports = router;
