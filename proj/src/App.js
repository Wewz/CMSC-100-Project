import React, { useState } from "react";

import MainNavBar from "./Pages/navBars";
import Footer from "./UI Design/Homepage Not Signed In/footer";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/homePage";

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
    username: "",
    password: "",
    type: ""
  });

  return (

    <Router>
      <div className="">

        <div className="relative z-20">
          <MainNavBar userLogged={userLogged} setUserLogged={setUserLogged} setUser={setUser} setMerchant={setMerchant} merchantLogged={merchantLogged} setMerchantLogged={setMerchantLogged} />
        </div>

        <Routes>
          <Route path="/" element={<Home userLogged={userLogged} setUserLogged={setUserLogged} />}></Route>
          <Route path="/sign-up" element={<SignUp userLogged={userLogged} merchantLogged={merchantLogged} />}></Route>
        </Routes>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
