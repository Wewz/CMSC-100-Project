import mongoose from 'mongoose';

const Merchant = mongoose.model('Merchants', {
	password: String,
	type: String,
	username: String
});

export default Merchant;