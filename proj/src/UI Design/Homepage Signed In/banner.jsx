import React, {useState } from 'react';


const Banner = () => {

    return(
        <div>
            
            <div className="hidden 2xl:block">
                <div className="relative h-[350px] pt-4 flex flex-col justify-center text-center items-center">

                    <div className="">
                        <img className="mr-[20%] w-[500px] absolute bottom-0 right-0 " src={require('../assets/Farmer.png')} alt="Logo" />
                    </div>

                    <div className="w-full h-[25%] bg-white">
                    </div>
                    
                    <div className="w-full flex flex-col text-center items-center justify-center h-[75%] bg-[#2D4944]">
                        <div className="mr-[30%]">
                            <h1 className="text-[#A4C2C3] p-4 font-bold text-7xl">Cultivate
                                <span className="text-[#77AC6F]">
                                    Cart
                                </span>
                            </h1>
                            <h1 className="text-[#A4C2C3] p-4 font-light text-2xl">
                                Directly from the fields to your doorstep.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hidden xl:block 2xl:hidden">
                <div className="relative h-[350px] pt-4 flex flex-col justify-center text-center items-center">

                    <div className="">
                        <img className="mr-[18%] w-[500px] absolute bottom-0 right-0 " src={require('../assets/Farmer.png')} alt="Logo" />
                    </div>

                    <div className="w-full h-[25%] bg-white">
                    </div>
                    
                    <div className="w-full flex flex-col text-center items-center justify-center h-[75%] bg-[#2D4944]">
                        <div className="mr-[32%]">
                            <h1 className="text-[#A4C2C3] p-4 font-bold text-7xl">Cultivate
                                <span className="text-[#77AC6F]">
                                    Cart
                                </span>
                            </h1>
                            <h1 className="text-[#A4C2C3] p-4 font-light text-2xl">
                                Directly from the fields to your doorstep.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>




            <div className="hidden lg:block xl:hidden 2xl:hidden">
                <div className="relative h-[300px] pt-4 flex flex-col justify-center text-center items-center">

                    <div className="">
                        <img className="mr-[18%] w-[400px] absolute bottom-0 right-0 " src={require('../assets/Farmer.png')} alt="Logo" />
                    </div>

                    <div className="w-full h-[25%] bg-white">
                    </div>
                    
                    <div className="w-full flex flex-col text-center items-center justify-center h-[75%] bg-[#2D4944]">
                        <div className="mr-[32%]">
                            <h1 className="text-[#A4C2C3] p-4 font-bold text-5xl">Cultivate
                                <span className="text-[#77AC6F]">
                                    Cart
                                </span>
                            </h1>
                            <h1 className="text-[#A4C2C3] p-4 font-light text-xl">
                                Directly from the fields to your doorstep.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
                <div className="relative h-[300px] pt-4 flex flex-col justify-center text-center items-center">

                    <div className="">
                        <img className="mr-[8%] w-[400px] absolute bottom-0 right-0 " src={require('../assets/Farmer.png')} alt="Logo" />
                    </div>

                    <div className="w-full h-[25%] bg-white">
                    </div>
                    
                    <div className="w-full flex flex-col text-center items-center justify-center h-[75%] bg-[#2D4944]">
                        <div className="mr-[37%]">
                            <h1 className="text-[#A4C2C3] p-4 font-bold text-5xl">Cultivate
                                <span className="text-[#77AC6F]">
                                    Cart
                                </span>
                            </h1>
                            <h1 className="text-[#A4C2C3] p-4 font-light text-xl">
                                Directly from the fields to your doorstep.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
                <div className="relative h-[450px] pt-4 flex flex-col justify-center text-center items-center">

                    <div className="flex justify-center items-center text-center">
                        <img className="w-[425px] absolute bottom-0" src={require('../assets/Farmer.png')} alt="Logo" />
                    </div>

                    <div className="w-full flex flex-col text-center items-center justify-center h-[45%] bg-white">
                        <div className="">
                                <h1 className="text-[#2D4944] mb-10 p-4 font-normal text-3xl">
                                    Directly from the fields to your doorstep.
                                </h1>
                            </div>
                    </div>
                    
                    <div className="w-full h-[55%] bg-[#2D4944]">
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Banner;
