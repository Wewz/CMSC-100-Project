import React, { useState } from "react";

import MainNavBar from "./Pages/navBars";
import Footer from "./UI Design/Homepage Not Signed In/footer";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/homePage";
import OrderList from "./UI Design/Merchantpage/orderList";
import UserList from "./UI Design/Merchantpage/userList";
import SalesReport from "./UI Design/Merchantpage/salesReport";
import TransactionPage from "./Pages/transaction";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [userLogged, setUserLogged] = useState(false);
  const [merchantLogged, setMerchantLogged] = useState(false);

  const [user, setUser] = useState({
    fname: "", lname: "", bday: "",phone: "",
    hNum: "", subd: "", brg: "", muni: "", prov: "",
    email: "",
    username: "",
    password: "",
    type: ""
  });

  const [merchant, setMerchant] = useState({
    password: "",
    type: "",
    username: ""
  });

  return (

    <Router>
      <div className="scroll-smooth">

        <div className="relative z-40">
          <MainNavBar userLogged={userLogged} setUserLogged={setUserLogged} setUser={setUser} setMerchant={setMerchant} merchantLogged={merchantLogged} setMerchantLogged={setMerchantLogged} user={user} />
        </div>

        <Routes>
          <Route path="/user-list" element={<UserList merchantLogged={merchantLogged} />}></Route>
          <Route path="/order-list" element={<OrderList merchantLogged={merchantLogged} />}></Route>
          <Route path="/sales-report" element={<SalesReport merchantLogged={merchantLogged}/>}></Route>

          <Route path="/" element={<Home userLogged={userLogged} setUserLogged={setUserLogged} merchantLogged={merchantLogged} setMerchantLogged={setMerchantLogged} user={user} />}></Route>
          <Route path="/sign-up" element={<SignUp userLogged={userLogged} merchantLogged={merchantLogged} />}></Route>

          <Route path="/transaction" element={<TransactionPage userLogged={userLogged} user={user} />}></Route>
        </Routes>

        <Footer merchantLogged={merchantLogged} />

      </div>
    </Router>
  );
}

export default App;
