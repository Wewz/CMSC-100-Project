import React from "react";

import Banner from "../UI Design/Homepage Signed In/banner";
import Products from "../UI Design/Homepage Signed In/productList";


function RootSigned({user}) {

  return (
    <div>
      <Banner />
      <Products user={user}/>
    </div>
  );
}

export default RootSigned;
