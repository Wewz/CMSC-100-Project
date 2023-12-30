import mongoDB from '../MainController/subject-controller.js';
import Basket from '../Models/basketModel.js';

mongoDB();

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
  
  export { saveBasket, deleteBasket, getBasket };