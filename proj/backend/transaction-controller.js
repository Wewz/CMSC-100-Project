import connectDB from './subject-controller.js';
import Transaction from './transactionModel.js';

connectDB();

//transactions
const addTransaction = async (req, res) => {
	const { tid, product, quantity, status, email, date, time } = req.body

	const newTransaction = new Transaction({ tid, product,quantity, status, email, date, time })

	const result = await newTransaction.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

const getTransactionAll = async (req, res) => {
	try {
	  const transactions = await Transaction.find({ email: req.params.email });
  
	  if (transactions.length > 0) {
		return res.json({ success: true, transactions: transactions });
	  } else {
		return res.json({ success: false, problem: 'No Existing Transaction' });
	  }
	} catch (error) {
	  console.error('Error:', error.message);
	  return res.status(500).json({ success: false, problem: 'Internal Server Error' });
	}
};

const getTransactionStatus = async (req, res) => {
	try {
		const transactions = await Transaction.find({ email: req.params.email, status: req.params.status });
  
	  if (transactions.length > 0) {
		return res.json({ success: true, transactions: transactions });
	  } else {
		return res.json({ success: false, problem: 'No Existing Transaction' });
	  }
	} catch (error) {
	  console.error('Error:', error.message);
	  return res.status(500).json({ success: false, problem: 'Internal Server Error' });
	}
};

const deleteTransaction = async (req, res) => {
	try {
	  const { tid } = req.body;
  
	  const deletedTransaction = await Transaction.findOneAndDelete({ tid });
  
	  if (deletedTransaction) {
		res.send({ success: true, message: 'Transaction deleted successfully' });
	  } else {
		res.send({ success: false, message: 'Transaction not found or already deleted' });
	  }
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error: 'Internal Server Error' });
	}
};

const updateTransactionStatus = async (req, res) => {
    try {
        const { tid, newStatus } = req.body;

        const updatedTransaction = await Transaction.findOneAndUpdate(
            { tid },
            { $set: { status: newStatus } },
            { new: true }
        );

        if (updatedTransaction) {
            res.send({ success: true, message: 'Transaction status updated successfully', updatedTransaction });
        } else {
            res.send({ success: false, message: 'Transaction not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: 'Internal Server Error' });
    }
};

const getCancelledTransactions = async (req, res) => {
    try {
        const { email, status1, status2 } = req.params;

        const transactions = await Transaction.find({ email, status: { $in: [status1, status2] } });

        if (transactions.length > 0) {
            return res.json({ success: true, transactions });
        } else {
            return res.json({ success: false, problem: 'No Existing Transactions with the specified statuses' });
        }
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ success: false, problem: 'Internal Server Error' });
    }
};

export default { addTransaction, getTransactionAll, getTransactionStatus, deleteTransaction, updateTransactionStatus, getCancelledTransactions };