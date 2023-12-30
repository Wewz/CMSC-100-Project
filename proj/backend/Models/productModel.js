import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	pid: String,
	ptitle: String,
	ptype: Number,
	price: Number,
	quantity: Number,
	url: String
});

const Product = mongoose.model('Products', productSchema);

export default Product;