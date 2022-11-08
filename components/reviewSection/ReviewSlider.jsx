import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import {useState} from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { reviews } from "../../utils/dumyData";

// arrows
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (     
      <div className="shadow-md z-10 absolute top-1/2 -right-5 md:-right-8  rounded-full cursor-pointer p-1 bg-white">
        <MdArrowForwardIos className={` text-main text-xl md:text-2xl`} style={{ ...style, display: "block" }} onClick={onClick}/>
      </div>    
    );
  }
  //arrows
  function SampleprevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="shadow-md z-10 absolute top-1/2 -left-5 md:-left-8  rounded-full cursor-pointer p-1 bg-white">
        <MdArrowBackIosNew className={`cursor-pointer text-main text-xl md:text-2xl`} style={{ ...style, display: "block" }} onClick={onClick}/>
       </div>
      );
  }

  // main function
 function ReviewSlider(){



    const settings = {
      
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: "linear",
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleprevArrow />,
      };

    return(
        <div className="relative bg-customGray-100 rounded-lg shadow ">
           <Slider {...settings} className="rounded-lg">
            {
              reviews.map(review=>(
                <div key={review.id} className={`bg-white rounded-lg   p-8`}>
                  <div className="text-customGray-200 ">{review.message}</div>
                  <div className="flex items-center my-1">
                    <div className="relative w-12 h-12 mx-1">
                        <Image src={review.img} layout="fill" objectFit="cover" objectPosition="center"  alt=""/>
                    </div>
                    <div className="text-center mx-2">
                      <div className=" font-bold my-1">{review.name}</div>
                      <div className="">{review.email}</div>
                    </div>
                  </div>
            </div>
              ))
            }
           
           </Slider>

        </div>
    )
}

export default dynamic(() => Promise.resolve(ReviewSlider), { ssr: false });