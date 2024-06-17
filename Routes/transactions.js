const express = require('express');
const router = express.Router();

const transactionsController = require('../Controllers/transaction');

router.get('/details', transactionsController.getTransactionDetails);

module.exports = router;