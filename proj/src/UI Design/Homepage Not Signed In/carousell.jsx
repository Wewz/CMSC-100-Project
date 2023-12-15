import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle  } from "react-icons/io";

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

    return (
        <div className="w-full m-auto p-20 pt-0">

            <div className="hidden md:block lg:block xl:block 2xl:block mt-6 bg-[#DCE0DC] rounded-3xl p-10">
                <Slider {...settings} className="">
                {products.map((product, index) => (
                    <div>
                        <div className="bg-white border border-[#2D4944] rounded-2xl" key={index}>
                            <div className="rounder-2xl flex items-center justify-center">
                                <img className="object-fill rounded-t-2xl" src={(product.img)} alt="" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1 p-4 pl-6">
                                    <p className="text-[#2D4944] text-xl font-bold">{product.name}</p>
                                    <p className="text-[#6b9089] text-xl font-bold" >{product.price}</p>
                                    <p className="text-[#6b6b6b] text-base">{product.description}</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#2D4944] h-12 w-full mt-4 text-white rounded-lg px-6 p-2 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Buy Now</button>
                        <button></button>
                    </div>
                ))}
                </Slider>
            </div>

            <div className="sm:block mg:hidden lg:hidden xl:hidden 2xl:hidden mt-6 bg-[#DCE0DC] rounded-3xl p-8">
                <Slider {...settings} className="">
                {products.map((product, index) => (
                    <div>
                        <div className="bg-white border border-[#2D4944] rounded-2xl" key={index}>
                            <div className="rounder-2xl flex items-center justify-center">
                                <img className="object-fill rounded-t-2xl" src={(product.img)} alt="" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1 p-4 pl-6">
                                    <p className="text-[#2D4944] text-md font-bold">{product.name}</p>
                                    <p className="text-[#6b9089] text-md font-bold" >{product.price}</p>
                                    <p className="text-[#6b6b6b] text-sm">{product.description}</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#2D4944] h-8 w-full mt-4 text-white text-xs rounded-lg px-6 hover:bg-[#DCE0DC] hover:text-[#2D4944]">Buy Now</button>
                        <button></button>
                    </div>
                ))}
                </Slider>
            </div>

        </div>
    );
}

const products = [
    {
        name: `Apple`,
        img: `../assets/testing.jpg`, 
        price: `₱150.00`,
        description: `Grown in ETIVAC`
    },
    {
        name: `Apple`,
        img: `../assets/testing.jpg`, 
        price: `₱150.00`,
        description: `Grown in ETIVAC`
    },
    {
        name: `Apple`,
        img: `../assets/testing.jpg`, 
        price: `₱150.00`,
        description: `Grown in ETIVAC`
    },
    {
        name: `Apple`,
        img: `../assets/testing.jpg`, 
        price: `₱150.00`,
        description: `Grown in ETIVAC`
    },
    {
        name: `Apple`,
        img: `../assets/testing.jpg`, 
        price: `₱150.00`,
        description: `Grown in ETIVAC`
    },
    {
        name: `Apple`,
        img: `../assets/testing.jpg`, 
        price: `₱150.00`,
        description: `Grown in ETIVAC`
    },
];

export default ProductCarousel;
