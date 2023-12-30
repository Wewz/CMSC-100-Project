import connectDB from './subject-controller.js';
import Product from './productModel.js';

connectDB();

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

export default { getProduct, getProductByID, addProduct, deleteProduct };