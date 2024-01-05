GROUP NUMBER: 4
MEMBERS:

DESCRIPTION: This program is an e-commerce website that is designed to be used by the Department of Agriculture (DA) to facilitate transactions between farmers and customers directly. The DA will have the capability to compile a catalog of items for sale in the public market. The databased use to store informations about the products, merchant, transactions, and customers is the MongoDB. The frontend and backend stacks are react JS and node JS based web server using Express JS, respectively. 

--------
Features: This website has three main views, the homepage, the customer view, and the admin view. 

Homepage - This page is the landing page of this website. The users can see the products available in this page. They can opt to log in or sign up using the buttons in the navigation bar. 

![React App (1)](https://github.com/rdnieto/proj100/assets/135321933/97b1b1c2-f2c3-48fb-8fad-ed334ea25f1c)

Customer view - This page contains the list of products available, product details, transaction details,shopping cart, and functions such as add to cart, search, sort, and checkout. 

![React App (3)](https://github.com/rdnieto/proj100/assets/135321933/2fc3dd1a-a301-41a6-8d25-28e93ccf7254)
![React App (13)](https://github.com/rdnieto/proj100/assets/135321933/caa01c16-7c74-4fa9-8819-5ef70379e22f)


Admin View - This page will be used by the Department of Agriculture to add products, manage existing products and users as well as their transactions, and view sales reports.  

![React App (20)](https://github.com/rdnieto/proj100/assets/135321933/a578f88f-f406-4b5b-ae93-2c97bcee648b)





---------
#FUNCTIONS IN HOMEPAGE

Sign Up - Upon clicking sign up button, a pop up window will appear with various text fields to fill up. After completing the necessary details, click submit. If the sign up is successful, the data will be saved in the database, if not, it will prompt a notification that informs the user that the signing up failed.

![React App (2)](https://github.com/rdnieto/proj100/assets/135321933/ef342052-fcb9-417a-ba95-92855a77b4b2)


Log In - Upon clicking the log in button, a pop up window will apear with two fields to fill up, the username and password. After filling up the two fields, click log in. It will then find match of the username and password from the database. If the username and password are found, the user will be transferred to the customer view page, if not found, it will inform the user that the log in failed. 

![React App](https://github.com/rdnieto/proj100/assets/135321933/9eab9c69-100d-41d9-9d77-3276f4240d64)

------
FUNCTIONS IN CUSTOMER VIEW

Product Details - Displays all the details of the product in a pop up window.
![React App (4)](https://github.com/rdnieto/proj100/assets/135321933/f1e13535-e907-4850-bd59-7221a42fdbad)

Add to Cart/View Basket - Adds the Product to the basket. Items in the Basket can also be viewed and managed by clicking the view basket button
![React App (8)](https://github.com/rdnieto/proj100/assets/135321933/9e816373-794a-4a93-ba18-5242debb932d)

Search Product - Displays the product/s that matches the searched word.
![React App (6)](https://github.com/rdnieto/proj100/assets/135321933/0bc9f686-c751-4e4b-ba16-ddd1428898c9)

Checkout - Checkouts all the items in the basket. All of them will be added in the pending transactions and will wait for the approval of the admin. 

![React App (10)](https://github.com/rdnieto/proj100/assets/135321933/7a507381-c505-4957-b3c5-d86f0266bd50)


Sort Products - Sorts all the displayed products by the type, quantity, or name in either ascending or descending order.
![411176268_7545841828768672_7232497698200532067_n](https://github.com/rdnieto/proj100/assets/135321933/5d8a7a38-80cd-49c0-991b-73bfaaa37206)

Managing all transactions of the user - All transactions of the currently signed in user can be managed in this page. Pending transactions can also be cancelled. 
![React App (12)](https://github.com/rdnieto/proj100/assets/135321933/77ff262b-2ea9-438e-be14-bfae105df763)

Log out - Log outs the currently signed in user and returns to the homepage. 
![React App (18)](https://github.com/rdnieto/proj100/assets/135321933/1f2b517f-077a-4748-ad13-4e5c7f02789d)

------

#FUNCTIONS IN ADMIN

Manage users - All registered users in the website can be managed here. 
![React App (22)](https://github.com/rdnieto/proj100/assets/135321933/044bdc4c-e8f6-49ad-9916-889a24366015)

Manage products - All existing products in the website can be managed here. The admin can also add new products, edit existing products, and delete products. 
![React App (37)](https://github.com/rdnieto/proj100/assets/135321933/a73dd9eb-e88b-42ba-b044-0bfe64b157e6)
![React App (4) (1)](https://github.com/rdnieto/proj100/assets/135321933/d19115bc-024a-47bf-9dbf-d82addf41a19)

Manage Transactions - All transactions by every user can be managed here. The admin can either approve or cancel any pending transactions. The transaction details can also be seen here.
![React App (23)](https://github.com/rdnieto/proj100/assets/135321933/82720a0e-b854-4bab-b95b-c112147226e6)
![React App (24)](https://github.com/rdnieto/proj100/assets/135321933/1531ae2d-69dd-4cd5-8b43-d9c42093d8ad)

View sales report - The overall sales report as well as the sales report of each product can be seen here. All the approved transactions can be also be seen here. 
![React App (5)](https://github.com/rdnieto/proj100/assets/135321933/417e1056-3257-4b9d-9e31-236a93cd3e3e)


