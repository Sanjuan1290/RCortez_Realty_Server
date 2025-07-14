const express = require('express')
const router = express.Router()
const { getListing, getProperties, populateListing, populateProperties } = require('../controller/Controller')

router.route('/listing').get(getListing)
router.route('/properties').get(getProperties)

router.route('/populateListing').post(populateListing)
router.route('/populateProperties').post(populateProperties)


module.exports = router