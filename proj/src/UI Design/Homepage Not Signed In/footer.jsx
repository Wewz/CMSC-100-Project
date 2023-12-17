import React, {useState} from 'react';
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = ({merchantLogged}) => {

    if(merchantLogged) return null;
    else {
        return(
            <div className="bg-[#DCE0DC] h-full">

                <div className="hidden 2xl:flex xl:flex lg:flex p-20 justify-center text-center">

                    <div className="border-r border-[#2D4944] pr-[8%]">
                        <div className="rounded-full bg-white border border-[#2D4944]">
                            <img className="w-[200px] h-[200x]" src={require('../assets/DA_Logo.png')} alt="Logo" />
                        </div>
                    </div>

                    <ul className=" ml-[5%] pt-10">
                        <li className="py-3 font-bold text-lg flex ml-8 w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                            Menu
                        </li>
                        <li className="pb-1 flex ml-8 w-32 text-[#2D4944] hover:text-[#77AC6F]">
                            Home
                        </li>
                        <li className="pb-1 flex ml-8 w-36 text-[#2D4944] hover:text-[#77AC6F]">
                            Products
                        </li>
                        <li className="pb-1 flex ml-8 w-36 text-[#2D4944] hover:text-[#77AC6F]">
                            About Us
                        </li>

                    </ul>

                    <ul className="pt-10">
                        <li className="py-3 font-bold text-lg flex ml-8 w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                            Contact Us
                        </li>
                        <li className="pb-1 flex ml-8 w-50 text-[#2D4944] hover:text-[#77AC6F]">
                            <MdEmail size={20} className="mr-2" />
                            osec.official@da.gov.ph
                        </li>
                        <li className="pb-1 flex ml-8 w-40 text-[#2D4944] hover:text-[#77AC6F]">
                            <IoCall size={20} className="mr-2" />
                            +63 (2) 8273-2474
                        </li>
                    </ul>

                    <ul className="ml-[4%] pt-10">
                        <li className="py-3 font-bold text-lg flex ml-8 w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                            Social Media
                        </li>
                        <li className="pb-1 flex ml-8 w-50 text-[#2D4944]">
                            <FaFacebook size={20} className="mr-2 hover:text-[#77AC6F]" />
                            <AiFillInstagram size={20} className="mr-2 hover:text-[#77AC6F]" />
                            <FaSquareXTwitter size={20} className="mr-2 hover:text-[#77AC6F]" />
                            <FaYoutube size={20} className="mr-2 hover:text-[#77AC6F]" />
                        </li>
                    </ul>

                </div>

                <div className="hidden md:block sm:hidden lg:hidden 2xl:hidden xl:hidden lg: justify-center text-center">

                    <div className="border-b border-[#2D4944] py-[8%] w-[70%] ml-[15%] flex justify-center text-center">
                        <div className="rounded-full bg-white border w-[200px] h-[200x] border-[#2D4944]">
                            <img className="w-[200px] h-[200x]" src={require('../assets/DA_Logo.png')} alt="Logo" />
                        </div>
                    </div>

                    <div className="p-20 flex justify-center text-center">

                        <ul className=" ml-[5%] pt-10">
                            <li className="py-3 font-bold text-lg flex w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                                Menu
                            </li>
                            <li className="pb-1 flex w-32 text-[#2D4944] hover:text-[#77AC6F]">
                                Home
                            </li>
                            <li className="pb-1 flex w-36 text-[#2D4944] hover:text-[#77AC6F]">
                                Products
                            </li>
                            <li className="pb-1 flex w-36 text-[#2D4944] hover:text-[#77AC6F]">
                                About Us
                            </li>

                        </ul>

                        <ul className="pt-10 p-5">
                            <li className="py-3 font-bold text-lg flex w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                                Contact Us
                            </li>
                            <li className="pb-1 flex w-50 text-[#2D4944] hover:text-[#77AC6F]">
                                <MdEmail size={20} className="mr-2" />
                                osec.official@da.gov.ph
                            </li>
                            <li className="pb-1 flex w-40 text-[#2D4944] hover:text-[#77AC6F]">
                                <IoCall size={20} className="mr-2" />
                                +63 (2) 8273-2474
                            </li>
                        </ul>

                        <ul className="pt-10 p-10">
                            <li className="py-3 font-bold text-lg flex w-28 text-[#2D4944] hover:text-[#77AC6F]">  
                                Social Media
                            </li>
                            <li className="pb-1 flex w-50 text-[#2D4944]">
                                <FaFacebook size={20} className="mr-2 hover:text-[#77AC6F]" />
                                <AiFillInstagram size={20} className="mr-2 hover:text-[#77AC6F]" />
                                <FaSquareXTwitter size={20} className="mr-2 hover:text-[#77AC6F]" />
                                <FaYoutube size={20} className="mr-2 hover:text-[#77AC6F]" />
                            </li>
                        </ul>

                        </div>  
                </div>

                <div className="md:hidden sm:block lg:hidden 2xl:hidden xl:hidden lg: justify-center text-center">

                    <div className="border-b border-[#2D4944] py-[8%] w-[60%] ml-[23%] flex justify-center text-center">
                        <div className="rounded-full bg-white border w-[200px] h-[200x] border-[#2D4944]">
                            <img className="w-[200px] h-[200x]" src={require('../assets/DA_Logo.png')} alt="Logo" />
                        </div>
                    </div>

                    <div className="p-20 block">

                        <div className="flex justify-center text-center">
                            <ul className=" ml-[5%]">
                                <li className="flex justify-center text-center w-full py-3 font-bold text-md text-[#2D4944] hover:text-[#77AC6F]">  
                                    Menu
                                </li>
                                <li className="flex justify-center text-center pb-1 w-full text-[#2D4944] hover:text-[#77AC6F] text-sm">
                                    Home
                                </li>
                                <li className="flex justify-center text-center pb-1 w-full text-[#2D4944] hover:text-[#77AC6F] text-sm">
                                    Products
                                </li>
                                <li className="flex justify-center text-center pb-1 w-full text-[#2D4944] hover:text-[#77AC6F] text-sm">
                                    About Us
                                </li>

                            </ul>
                        </div>

                        <div className="flex justify-center text-center">
                            <ul className="pt-10 p-5">
                                <li className="flex justify-center text-center py-3 font-bold w-full text-[#2D4944] hover:text-[#77AC6F] text-md">  
                                    Contact Us
                                </li>
                                <li className="flex justify-center text-center pb-1 w-full text-[#2D4944] hover:text-[#77AC6F] text-sm">
                                    <MdEmail size={20} className="mr-2" />
                                    osec.official@da.gov.ph
                                </li>
                                <li className="flex justify-center text-center pb-1 w-full text-[#2D4944] hover:text-[#77AC6F] text-sm">
                                    <IoCall size={20} className="mr-2" />
                                    +63 (2) 8273-2474
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center text-center">
                            <ul className="pt-10 p-10">
                                <li className="flex justify-center text-center py-3 font-bold w-full text-[#2D4944] hover:text-[#77AC6F] text-sm">  
                                    Social Media
                                </li>
                                <li className="flex justify-center text-center pb-1 w-full text-[#2D4944]">
                                    <FaFacebook size={20} className="mr-2 hover:text-[#77AC6F]" />
                                    <AiFillInstagram size={20} className="mr-2 hover:text-[#77AC6F]" />
                                    <FaSquareXTwitter size={20} className="mr-2 hover:text-[#77AC6F]" />
                                    <FaYoutube size={20} className="mr-2 hover:text-[#77AC6F]" />
                                </li>
                            </ul>
                        </div>


                        </div>  
                </div>

            </div>
        );
    }
}

export default Footer;
