import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle  } from "react-icons/io";
import React, {useEffect,useState} from 'react';

const ProductCarousel = () => {

    function NextArrow(props) {

        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
                transform: "scale(2)",
            }}
            onClick={onClick}>
          </div>
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
        <div
            className={className}
            style={{
                transform: "scale(2)",
            }}
            onClick={onClick}>
        </div>
        );
      }
      

    const settings = {
        className: "center",
        rows: 1,
        slidesPerRow: 1,
        slidesToShow: 4,
        infinite: true,
        swipeToSlide: true,
        slidesToScroll: 1,
        lazyLoad: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                lazyLoad: true,
                adaptiveHeight: true
              }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                lazyLoad: true,
                adaptiveHeight: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,               
                lazyLoad: true,
                adaptiveHeight: true
            }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: true,
                adaptiveHeight: true
                }
            }
        ]

    };

    const [ products, setProducts] = useState([])
    //const [ greeting, setGreeting ] = useState('')
    useEffect(() => {
    fetch('http://localhost:3001/get-product')
      .then(response => response.json())
      .then(body => {
    setProducts(body)
      })
    }, [])

    return (
        <div className="w-full m-auto p-20 pt-0">

            <div className="hidden md:block lg:block xl:block 2xl:block mt-6 bg-[#DCE0DC] rounded-3xl p-10">
                <Slider {...settings} className="">
                {products.map((product, index) => (
                    <div key={product.ptitle}>
                        <div className="bg-white border border-[#2D4944] rounded-2xl flex flex-col ">

                        <div className="flex flex-col h-36 items-center justify-center">
                            <img className="object-cover object-center w-full h-full rounded-t-2xl" src={product.url} alt=""/>
                        </div>

                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1 p-4 pl-6 truncate">
                                    <p className="text-[#2D4944] text-xl font-bold truncate ">{product.ptitle}</p>
                                    <p className="text-[#6b9089] text-xl font-bold truncate ">₱{product.price}.00</p>
                                    <p className="text-[#6b6b6b] text-base truncate">Quantity: {product.quantity}</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#2D4944] h-12 w-full mt-4 text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Buy Now</button>
                        <button></button>
                    </div>
                ))}
                </Slider>
            </div>

            <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden mt-6 bg-[#DCE0DC] rounded-3xl p-8">
                <Slider {...settings} className="">
                {products.map((product, index) => (
                    <div key={product.ptitle} >
                        <div className="bg-white border border-[#2D4944] rounded-2xl">

                            <div className="rounded-t-2xl flex h-36 items-center justify-center">
                                <img className="object-cover object-center w-full h-full rounded-t-2xl" src={product.url} alt="" />
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1 p-4 pl- truncate">
                                    <p className="text-[#2D4944] text-md font-bold truncate">{product.ptitle}</p>
                                    <p className="text-[#6b9089] text-md font-bold truncate" >₱{product.price}.00</p>
                                    <p className="text-[#6b6b6b] text-sm">Quantity: {product.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>

        </div>
    );
}

export default ProductCarousel;
