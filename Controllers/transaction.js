const TransactionsDetails = require('../Models/transactions');


exports.getTransactionDetails =  async (req, res, next) => {

    // to filter the data by status
    const statuses = ['COMPLETED', 'IN PROGRESS', 'REJECTED'];

    const exampleStartDate = '12/4/2021' // later it can be parsed from the req body
    const exampleEndDAte = '5/04/2023'

    // converting the dd/mm/yyyy date formate to UTC timestamp formate
    const start_Date = await convertToUTCTimestamp( exampleStartDate );
    const end_Date = await convertToUTCTimestamp( exampleEndDAte );

    // transaction details are filtered first to the date range and sorted in ascending order
    try {
      const tnxDetails = await TransactionsDetails.find({ date: { $gte: start_Date, $lte: end_Date }, status: {$in:statuses } }).sort({ date: 1 }).exec();
      res.status(200).json(tnxDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }

}

function convertToUTCTimestamp(date) {
    const [day, month, year] = date.split('/').map(Number);
    const newdate = new Date(year, month - 1, day);
    return newdate.getTime();
}
