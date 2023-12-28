import React, { useState, useEffect } from "react";

const TransactionAll = ({user}) => {

    const [transactions, setTransactions] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        console.log(user.email)

        const fetchTransactions = async () => {
            try {
            const response = await fetch(`http://localhost:3001/get-transaction-all/${user.email}`);
            const body = await response.json();
            setTransactions(body.transactions);
            } catch (error) {
            console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);


    return(
        <div>
            {transactions.length > 0 ? (
 
                <div className="flex flex-col">
                    {
                        transactions.map((transaction) => (
                            <div key={transaction.tid} className="w-[80%] flex border border[#2D4944] rounded-xl">
                                
                                <div>
                                    <p>{transaction.tid}</p>
                                </div>
                            
                            
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div>
                    <p>No transactions available.</p>
                </div>
            )}
        </div>
    );
}

export default TransactionAll;