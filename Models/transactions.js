const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
    id: String,
    date: Number,
    sender: {
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        IDNumber: String
    },
    recipient: {
        firstName: String,
        lastName: String,
        email: String,
        accountNumber: String,
        bank: String
    },
    Amount: Number,
    CurrencyCd: String,
    Comments: String,
    status: String
});


module.exports = mongoose.model('Transactions', transactionSchema);