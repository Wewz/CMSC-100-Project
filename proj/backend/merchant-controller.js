import connectDB from './subject-controller.js';
import Merchant from './merchantModel.js';

connectDB();

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

export default getMerchant;