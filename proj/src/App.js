import React, { useState } from "react";

import NavBar from "./UI Design/Homepage Not Signed In/navbar";
import Footer from "./UI Design/Homepage Not Signed In/footer";
import RootNotSigned from "./Pages/RootNotSigned";
import SignUp from "./Pages/SignUp";
import RootSigned from "./Pages/RootSigned";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (

    <Router>
      <div className="">

        <div className="relative z-20">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<RootNotSigned />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/signed-in" element={<RootSigned />}></Route>
        </Routes>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
