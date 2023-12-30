import connectDB from './subject-controller.js';
import User from './userModel.js';
import Transaction from './transactionModel.js';

connectDB();

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

export default { getUser, getAllUsers, getTransaction, getSales, addUser };