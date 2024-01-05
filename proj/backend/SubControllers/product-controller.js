import mongoDB from '../MainController/subject-controller.js';
import Product from '../Models/productModel.js';

mongoDB();

//products
const getProduct = async (req, res) => {
	try {
		
		const products = await Product.find({});

		console.log(products);
		res.send(products);
		
	} catch (error) {
		console.error('Error fetching products:', error);
		res.status(500).send('Internal Server Error');
	}
};


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
	const { pid, ptitle, ptype, price, quantity, url } = req.body

	const newProduct = new Product({ pid, ptitle, ptype, price, quantity, url })

	const result = await newProduct.save()

	if (result._id) {
		res.send({ success: true })
	} else {
		res.send({ success: false })
	}
}

// delete 
const deleteProduct = async (req, res) => {
	try {
	  const { pid } = req.body;
  
	  // Use findOneAndDelete to find and remove the basket
	  const deletedBasket = await Product.findOneAndDelete({ pid });
  
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

const updateProductnQuantity = async (req, res) => {
	try {
		const { pid, quantity } = req.body;
  
		const updatedProduct = await Product.findOneAndUpdate(
			{ pid },
			{ $set: { quantity: quantity } },
			{ new: true }
		);
  
		if (updatedProduct) {
			res.send({ success: true, message: 'Product updated successfully', updatedProduct });
		} else {
			res.send({ success: false, message: 'Product not found' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error: 'Internal Server Error' });
	}
};

const updateProductnPrice = async (req, res) => {
	try {
		const { pid, price } = req.body;
  
		const updatedProduct = await Product.findOneAndUpdate(
			{ pid },
			{ $set: { price: price } },
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


export { getProduct, getProductByID, addProduct, deleteProduct, greetByPOST, updateProductnQuantity, updateProductnPrice };