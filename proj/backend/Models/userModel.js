import mongoose from 'mongoose';

const User = mongoose.model('Users', {
	fname: String,
	lname: String,
	bday: String,
	phone: String,
    hNum: String, 
	subd: String, 
	brg: String, 
	muni: String, 
	prov: String,
	email: String,
	username: String,
	password: String,
	type: String
});
export default User;