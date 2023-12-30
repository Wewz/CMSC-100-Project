import mongoose from 'mongoose';

const mongoDB = async () => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/FarmToTable', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error('Error connecting to MOngoDB:', error);
	}
};

export default mongoDB;