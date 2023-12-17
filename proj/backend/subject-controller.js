import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/FarmToTable')

const Product = mongoose.model('Products', {
	pid: String,
	ptitle: String,
	ptype: Number,
	price: Number,
	quantity: Number,
	url: String
});

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

const Transaction = mongoose.model('Transactions', {
	tid: String,
	pid: String, 
	quantity: Number,
	status: Number,
	email: String,
	date: Date,
	time: String
});


//products
const getProduct = async (req, res) => {
	const products = await Product.find({});
	console.log(products)
	res.send(products)
}

const greetByPOST = async (req, res) => {
	console.log(req.body.name)
	
	const greeting = "Hello, " + req.body.name;
	res.send(greeting)
}


// get product by id
const getProductByID = async (req, res) => {
	const product = await Subject.findOne({ code: req.query.pid })
	res.send(product)
}

// save new product
const addProduct = async (req, res) => {
	const { tid,pid,oquantity,status,email,date } = req.body

	const newTransaction = new Transaction({ tid,pid,oquantity,status,email,date })

	const result = await newTransaction.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

// delete 
const deleteProduct = async (req, res) => {
	const { code } = req.body

	const result = await Product.deleteOne({ code })

	if (result.deletedCount == 1) {
		res.send({ success: true })
	} else { 
		res.send({ success: false })
	}
	
}
//users
const getUser = async (req, res) => {
	try {
		let users = await User.findOne({ username: req.body.username });

		if (!users) {
		users = await User.findOne({ email: req.body.username });
		}

		if (users) {
		const pass = req.body.password;

		if (pass === users.password) {
			res.send({ success: true, user: users });
		} else {
			res.send({ success: false, problem: 'Wrong password' });
		}
		} else {
		res.send({ success: false, problem: 'No Such User Exist' });
		}
	} catch (error) {
		console.error('Error:', error.message);
		res.status(500).send({ success: false, problem: 'Internal Server Error' });
	}
};

const addUser = async (req, res) => {
	const { fname, lname, bday, phone,
	hNum, subd, brg, muni, prov,
	email, username, password, type } = req.body;
	
		const existingUser = await User.findOne({ username: username });

		if (existingUser) {
			res.send({ success: false, message: 'Username already exists.' });
		} else {
		const newUser = new User({
			fname, lname, bday, phone,
			hNum, subd, brg, muni, prov,
			email, username, password, type
		});

		const result = await newUser.save();

		if (result._id) {
			res.send({ success: true });
		} else {
			res.send({ success: false, message: 'Error creating user.' });
		}
	}
}

//transactions

const addTransaction = async (req, res) => {
	const { tid, pid, quantity, status, email, date, time } = req.body

	const newTransaction = new Transaction({ tid, pid,quantity, status, email, date, time })

	const result = await newTransaction.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

export { getProduct, greetByPOST, getProductByID, addProduct, deleteProduct,getUser, addUser, addTransaction };