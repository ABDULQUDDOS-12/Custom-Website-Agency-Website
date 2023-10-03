const router = require('express').Router();
const {/*signup,*/getbill,contactUs} = require('../controller/appController')

// http request
// router.post('/user/signup',signup)
router.post('/product/getBill',getbill)
router.post('/form/contactUs',contactUs)
module.exports = router;
 