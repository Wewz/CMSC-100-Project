import React, { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const LogIn = ({openLogin, closeLogin, setUserLogged, setUser, setMerchant, setMerchantLogged}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogIn, setIsLogIn] = useState(false);
  
    const handleLogIn = () => {
      setIsLogIn(!isLogIn);
    };
  
    const fetchUser = async () => {
        console.log(username + " " + password);
    
        try {
            const userResponse = await fetch('http://localhost:3001/get-user', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            });
    
            if (!userResponse.ok) {
                throw new Error(`HTTP error! Status: ${userResponse.status}`);
            }
    
            const userBody = await userResponse.json();
    
            if (userBody.success) {
                console.log('User found!');
                setUser(userBody.user);
                setUserLogged(true);
            } else {
                console.log('No user found for the specified query or wrong password');
    
                const merchantResponse = await fetch('http://localhost:3001/get-merchant', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ username, password }),
                });
    
                if (!merchantResponse.ok) {
                    throw new Error(`HTTP error! Status: ${merchantResponse.status}`);
                }
    
                const merchantBody = await merchantResponse.json();
    
                if (merchantBody.success) {
                    console.log('Merchant found!');
                    setMerchant(merchantBody.user);
                    setMerchantLogged(true);
                } else {
                    console.log('No merchant found for the specified query or wrong password');
                }
            }
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    };
    
  
    useEffect(() => {
        if (isLogIn) {
            fetchUser();
            handleLogIn(); // Remove this line if you only want to trigger login once
        }
    }, [isLogIn]);
    
    if(!openLogin) return null
    else
        return(
            <div onClick={closeLogin} className="" >

                <div className="fixed inset-0 bg-[#2D4944] bg-opacity-25 flex flex-col justify-center items-center">

                    <div onClick={(e) => e.stopPropagation()} className="w-[40%] h-[550px] hidden xl:block 2xl:block bg-white rounded-3xl drop-shadow-3xl">

                        <div className="flex justify-end text-right mt-4 mr-4">
                            <IoCloseCircle size={50} onClick={closeLogin} className="text-[#c8cbc8] hover:text-[#2D4944]" />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h1 className="text-[#2D4944] p-4 font-bold text-5xl">Cultivate
                                <span className="text-[#77AC6F]">Cart</span>
                            </h1>

                            <div className="bg-white h-16 mt-14 flex text-center items-center w-[60%] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <FaUser size={25} />
                                </div>

                                <input type="text" className="text-[#2D4944] rounded-full border border-[#2D4944]
                                pl-36 w-full h-full focus:border-[#507c74]" 
                                placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="bg-white h-16 mt-8 flex text-center items-center w-[60%] text-[#2D4944] text-md font-semibold rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-28 flex items-center justify-center">
                                    <RiLockPasswordFill size={25} />
                                </div>

                                <input type="password" className="text-[#2D4944] rounded-full border border-[#2D4944]
                                pl-36 w-full h-full focus:border-[#507c74]" 
                                placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button className="bg-[#2D4944] w-[60%] h-16 mt-8 text-white rounded-full hover:bg-[#497069]"
                                onClick={handleLogIn} >
                                    Log In
                            </button>

                        </div>
                
                    </div>




                    <div onClick={(e) => e.stopPropagation()} className="w-[50%] h-[60%] hidden md:flex xl:hidden 2xl:hidden bg-white rounded-3xl drop-shadow-3xl flex-col ">

                        <div className="text-[#c8cbc8] hover:text-[#2D4944] flex justify-end text-right mt-4 mr-4">
                            <FaWindowClose size={35} onClick={closeLogin} />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h1 className="text-[#2D4944] p-4 font-bold text-4xl">Cultivate
                                <span className="text-[#77AC6F]">Cart</span>
                            </h1>

                            <div className="bg-white h-16 mt-10 flex text-font-semibold w-[60%] rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-[85px] flex items-center justify-center">
                                    <FaUser size={20} />
                                </div>

                                <input type="text" className="text-[#2D4944] rounded-full border border-[#2D4944]
                                text-sm pl-[100px] w-full h-full focus:border-[#507c74]" 
                                placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="bg-white h-16 mt-8 flex text-center items-center w-[60%] text-[#2D4944] font-semibold rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-16 w-[85px] flex items-center justify-center">
                                    <RiLockPasswordFill size={20} />
                                </div>

                                <input type="password" className="text-[#2D4944] rounded-full border border-[#2D4944]
                                pl-[100px] w-full text-sm h-full focus:border-[#507c74]" 
                                placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button className="bg-[#2D4944] w-[60%] h-16 mt-8 text-white rounded-full hover:bg-[#497069]"
                            onClick={handleLogIn} >
                                Log In
                            </button>
                        </div>
                
                    </div>



                    <div onClick={(e) => e.stopPropagation()} className="w-[60%] h-[55%] sm:flex md:hidden xl:hidden 2xl:hidden bg-white rounded-3xl drop-shadow-3xl flex-col ">

                        <div className="text-[#c8cbc8] hover:text-[#2D4944] flex justify-end text-right mt-4 mr-4">
                            <FaWindowClose size={35} onClick={closeLogin} />
                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                            <h1 className="text-[#2D4944] p-4 font-bold text-3xl">Cultivate
                                <span className="text-[#77AC6F]">Cart</span>
                            </h1>

                            <div className="bg-white h-12 mt-10 flex text-font-semibold w-[60%] rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-12 w-[65px] flex items-center justify-center">
                                    <FaUser size={15} />
                                </div>

                                <input type="text" className="text-[#2D4944] rounded-full border border-[#2D4944]
                                text-xs pl-[85px] w-full h-full focus:border-[#507c74]" 
                                placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>

                            <div className="bg-white h-12 mt-5 flex text-font-semibold w-[60%] rounded-full">
                                <div className="bg-[#2D4944] absolute text-white rounded-full h-12 w-[65px] flex items-center justify-center">
                                    <RiLockPasswordFill size={15} />
                                </div>

                                <input type="text" className="text-[#2D4944] rounded-full border border-[#2D4944]
                                text-xs pl-[85px] w-full h-full focus:border-[#507c74]" 
                                placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button className="bg-[#2D4944] w-[60%] h-12 mt-8 text-white rounded-full text-xs hover:bg-[#497069]"
                            onClick={handleLogIn} >
                                Log In
                            </button>
                        </div>
                
                    </div>




                </div>

            </div>
        );
}

export default LogIn;
