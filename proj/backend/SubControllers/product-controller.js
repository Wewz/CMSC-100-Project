import mongoDB from '../MainController/subject-controller.js';
import Product from '../Models/productModel.js';
import Transaction from '../Models/transactionModel.js';

mongoDB();

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
		const { pid } = req.params;

		const product = await Product.findOne({ pid: pid });

		console.log(product)

	if (product) {
		return res.json({ success: true, product });
	} else {
		return res.json({ success: false, problem: 'No Existing Product' });
	}
	} catch (error) {
		console.error('Error:', error.message);
		return res.status(500).json({ success: false, problem: 'Internal Server Error' });
	}
  };
  

// save new product
const addProduct = async (req, res) => {
	const { tid, product, quantity, status, email, message, date, time } = req.body

	const newTransaction = new Transaction({ tid, product, quantity, status, email, message, date, time })

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

const updateProductnQuantity = async (req, res) => {
	try {
		const { pid, newQuantity } = req.body;
  
		const updatedProduct = await Product.findOneAndUpdate(
			{ pid },
			{ $set: { quantity: newQuantity } },
			{ new: true }
		);
  
		if (updatedProduct) {
			res.send({ success: true, message: 'Transaction updated successfully', updatedProduct });
		} else {
			res.send({ success: false, message: 'Transaction not found' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error: 'Internal Server Error' });
	}
};


export { getProduct, getProductByID, addProduct, deleteProduct, greetByPOST, updateProductnQuantity };