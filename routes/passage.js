const express = require('express');
const router = express.Router();
const { createPassage, getAllPassages } = require('../controllers/passage');

router.post('/', createPassage);
router.get('/', getAllPassages);

module.exports = router;
