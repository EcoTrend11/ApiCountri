const { Router } = require('express');
const router = Router();

const routerCountries = require('./countries');
const routerActivities = require('./activities');


router.use('/coun', routerCountries);
router.use('/acti', routerActivities);


module.exports = router;
