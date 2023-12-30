import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	pid: String,
	ptitle: String,
	ptype: Number,
	price: Number,
	quantity: Number,
	url: String
});

const productListSchema = new mongoose.Schema({
	count: Number,
	key: String,
	addedProduct: productSchema
});

const basketSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	product: [productListSchema],
});

const Basket = mongoose.model('Baskets', basketSchema);

export default Basket;