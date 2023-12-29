import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/FarmToTable')

const productSchema = new mongoose.Schema({
	pid: String,
	ptitle: String,
	ptype: Number,
	price: Number,
	quantity: Number,
	url: String
});

const Product = mongoose.model('Products', productSchema);

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
	product: productSchema, 
	quantity: Number,
	status: Number,
	email: String,
	date: Date,
	time: String
});

const Merchant = mongoose.model('Merchants', {
	password: String,
	type: String,
	username: String
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

// basket
const saveBasket = async (req, res) => {
	try {
	  const { username, email, product } = req.body;
  
	  console.log("Basket Yeyeyeye");
	  console.log(product);
  
	  // Use findOneAndUpdate
	  const existingBasket = await Basket.findOneAndUpdate(
		{ username, email },
		{ $set: { product } },
		{ new: true, upsert: true, setDefaultsOnInsert: true }
	  );
  
	  if (existingBasket) {
		res.send({ success: true, basket: existingBasket });
	  } else {
		res.send({ success: false });
	  }
	} catch (error) {
	  console.error(error);
	  res.status(500).send({ success: false, error: 'Internal Server Error' });
	}
};

const deleteBasket = async (req, res) => {
	try {
	  const { username, email } = req.body;
  
	  // Use findOneAndDelete to find and remove the basket
	  const deletedBasket = await Basket.findOneAndDelete({ username, email });
  
	  if (deletedBasket) {
		res.send({ success: true, message: 'Basket deleted successfully' });
	  } else {
		res.send({ success: false, message: 'Basket not found or already deleted' });
	  }
	} catch (error) {
	  console.error(error);
	  res.status(500).send({ success: false, error: 'Internal Server Error' });
	}
};

const getBasket = async (req, res) => {
	try {
	  const { username, email } = req.params;
  
	  const foundBasket = await Basket.findOne({ username, email });
  
	  if (foundBasket) {
		res.json({ success: true, basket: foundBasket });
	  } else {
		res.json({ success: false, message: 'Basket not found' });
	  }
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ success: false, error: 'Internal Server Error' });
	}
  };
  

// merchant
const getMerchant = async (req, res) => {
    try {
        let users = await Merchant.findOne({ username: req.body.username });

		console.log(req.body.username)

        if (!users) {
            return res.send({ success: false, problem: 'No merchant exist' });
        }

        const pass = req.body.password;

        if (pass === users.password) {
            return res.send({ success: true, user: users });
        } else {
            return res.send({ success: false, problem: 'Wrong password' });
        }
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).send({ success: false, problem: 'Internal Server Error' });
    }
};

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
	try {
	  const product = await Product.findOne({ pid: req.query.pid });
  
	  if (transactions.length > 0) {
		return res.json({ success: true, product: product });
	  } else {
		return res.json({ success: false, problem: 'No Existing Transaction' });
	  }
	} catch (error) {
	  console.error('Error:', error.message);
	  return res.status(500).json({ success: false, problem: 'Internal Server Error' });
	}
  };

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
                return res.send({ success: true, user: users });
            } else {
                return res.send({ success: false, problem: 'Wrong password' });
            }
        } else {
            return res.send({ success: false, problem: 'No Such User Exist' });
        }
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).send({ success: false, problem: 'Internal Server Error' });
    }
};

const getAllUsers = async (req, res) => {
	try {
	  const users = await User.find({});
	  console.log(users);
	  res.send(users);
	} catch (error) {
	  console.error("Error fetching users:", error.message);
	  res.status(500).send("Internal Server Error");
	}
  }

  const getTransaction = async (req, res) => {
	try {
	  const orders = await Transaction.find({status: 0});
	  console.log(orders);
	  res.send(orders);
	} catch (error) {
	  console.error("Error fetching users:", error.message);
	  res.status(500).send("Internal Server Error");
	}
  }

  const getSales = async (req, res) => {
	try {
	  const orders = await Transaction.find({status: 1});
	  console.log(orders);
	  res.send(orders);
	} catch (error) {
	  console.error("Error fetching users:", error.message);
	  res.status(500).send("Internal Server Error");
	}
  }
  

const addUser = async (req, res) => {
	const { fname, lname, bday, phone,
	hNum, subd, brg, muni, prov,
	email, username, password, type } = req.body;
	
	const existingUser = await User.findOne({ username: username });

	const existingEmail = await User.findOne({ email: email });

	if (existingUser) {
		res.send({ success: false, message: 'Username already exists.' });
	} 
	else if(existingEmail) {
		res.send({ success: false, message: 'Email already exists.' });
	}
	else {
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


export { getProduct, greetByPOST, getProductByID, addProduct, deleteProduct,getUser, addUser, addTransaction, getMerchant, getAllUsers, getTransaction, getSales, saveBasket, getBasket, deleteBasket, getTransactionAll, deleteTransaction, getTransactionStatus, updateTransactionStatus, getCancelledTransactions };