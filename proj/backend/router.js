import { getUser, getAllUsers, getTransaction, getSales, addUser } from './SubControllers/user-controller.js';
import { addTransaction, getTransactionAll, getTransactionStatus, deleteTransaction, updateTransactionStatus, getCancelledTransactions, updateTransactionMessage } from './SubControllers/transaction-controller.js';
import { saveBasket, deleteBasket, getBasket } from './SubControllers/basket-controller.js';
import { getMerchant } from './SubControllers/merchant-controller.js';
import { getProduct, getProductByID, addProduct, deleteProduct, greetByPOST } from './SubControllers/product-controller.js';

export default function router(app) {

	// Allow Cross Origin Resource Sharing
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
  })
  
	app.get("/get-product", getProduct);
  app.post("/greet-by-post", greetByPOST);
  app.get("/get-product-by-code/:pid", getProductByID);
  app.post("/add-product", addProduct);
  app.post("/delete-product", deleteProduct);
  app.post("/add-user", addUser);
  app.post("/get-user", getUser);
  app.post("/get-merchant", getMerchant);
  app.post("/add-transaction", addTransaction);
  app.get("/get-all-users", getAllUsers);
  app.get("/get-transaction", getTransaction);
  app.get("/get-sales", getSales);
  app.post("/save-basket", saveBasket);
  app.get('/getBasket/:username/:email', getBasket);
  app.post('/delete-basket', deleteBasket);
  app.get('/get-transaction-all/:email', getTransactionAll);
  app.post('/delete-transaction-tid', deleteTransaction);
  app.get('/get-transaction-status/:email/:status', getTransactionStatus);
  app.post('/update-transaction-status', updateTransactionStatus);
  app.get('/get-cancelled-transaction/:email/:status1/:status2', getCancelledTransactions);
  app.post('/update-transaction-message', updateTransactionMessage);
}