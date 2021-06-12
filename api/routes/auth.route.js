const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller.js');

router.route('/').get(controller.testMethod)

module.exports = router;