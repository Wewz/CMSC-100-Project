import React, { useState, useEffect } from "react";
import { BsCurrencyExchange } from "react-icons/bs";


const SalesReport = ({merchantLogged}) => {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!merchantLogged) return;

    const fetchSales = async () => {
      try {
        const response = await fetch('http://localhost:3001/get-sales');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchSales();
  }, [merchantLogged]);

  console.log(users);

  return (
    <div className="flex w-[80%] flex-col p-28">
        <div className="flex items-center border-b border-[#2D4944] border-opacity-40 mb-14">
            <h1 className="text-[#a2a2a2] p-4 font-bold text-3xl">Sales Report</h1>
        </div>

        <div className="w-full flex justify-center content-center items-center">
            <div className="flex-wrap flex gap-x-4 gap-y-14 justify-center content-center items-center">
                {users.map((user) => (
                    <div key={user.date}>
                        <div className="bg-white border border-[#2D4944] rounded-2xl flex flex-col h-[280px] w-[280px] items-center justify-center">

                            <div className="flex flex-col text-[#2D4944] pt-4 items-center justify-center">
                                <BsCurrencyExchange size={90}/>
                            </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-1 p-4 truncate text-[#2D4944]">
                                        <p className="text-sm truncate ">Transaction ID: {user.tid}</p>
                                        <p className="text-sm truncate ">Product ID: {user.pid}</p>
                                        <p className="text-sm truncate">Quantity: {user.quantity} {user.lname}</p>
                                        <p className="text-sm truncate">Status: {user.status}</p>
                                        <p className="text-sm truncate">Email: {user.email}</p>
                                    </div>
                                </div>
                        </div>

                        <button className="bg-white border border-[#2D4944] h-12 w-full mt-4 text-[#2D4944] rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]" >
                            Approved Transaction
                        </button>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
}

export default SalesReport;
