import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	pid: String,
	ptitle: String,
	ptype: Number,
	price: Number,
	quantity: Number,
	url: String
});

const Transaction = mongoose.model('Transactions', {
	tid: String,
	product: productSchema, 
	quantity: Number,
	status: Number,
	email: String,
	message: String,
	date: Date,
	time: String
});

export default Transaction;