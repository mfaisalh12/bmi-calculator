const express = require('express');
const { getIndex, getForm } = require('../controllers/bmiController');

const router = express.Router();

router.get('/', getIndex);
router.post('/', getForm);

module.exports = router;
