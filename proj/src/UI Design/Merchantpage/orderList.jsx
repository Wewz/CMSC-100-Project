import React, { useState, useEffect } from "react";

const OrderList = ({ merchantLogged }) => {
  // Move the useState and useEffect hooks to the top level
  const [users, setUsers] = useState([
    {
        fname: "", lname: "", bday: "",phone: "",
        hNum: "", subd: "", brg: "", muni: "", prov: "",
        email: "",
        username: "",
        password: "",
        type: ""
    }
  ]);

  useEffect(() => {
    // Use an early return if merchantLogged is false
    if (!merchantLogged) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/get-all-users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, [merchantLogged]); // Add merchantLogged to the dependency array

  console.log(users)

  return (
    <div>
      <div className="flex items-center border-b border-[#2D4944] border-opacity-40 mb-14">
        <h1 className="text-[#a2a2a2] p-4 font-bold text-3xl">Order List</h1>
      </div>

      {/* Additional code to render users or any other content based on the fetched data */}
      <ul>
        {users.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
