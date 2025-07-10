const express = require('express')
const router = express.Router()
const { getListing } = require('../controller/listingController')

router.route('/listing').get(getListing)


module.exports = router