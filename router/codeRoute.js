const express = require('express')
const codeController = require('./../controller/codeController')
const router = express.Router();
router.route('/:id')
       .get(codeController.getRender)
router.route('/code/:id')
       .get(codeController.getCode)

module.exports = router;