import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CardItem from "./CardItems"
import {useState} from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";


// arrows
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (     
      <div className="shadow-md z-10 absolute top-1/2 -right-4 md:-right-8  rounded-full cursor-pointer p-1 bg-white">
        <MdArrowForwardIos className={` text-main text-xl md:text-2xl`} style={{ ...style, display: "block" }} onClick={onClick}/>
      </div>    
    );
  }
  //arrows
  function SampleprevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="shadow-md z-10 absolute top-1/2 -left-4 md:-left-8  rounded-full cursor-pointer p-1 bg-white">
        <MdArrowBackIosNew className={`cursor-pointer text-main text-xl md:text-2xl`} style={{ ...style, display: "block" }} onClick={onClick}/>
       </div>
      );
  }

  // main function
 function CardSlider({cards,title,category,desc}){

    const {i18n}=useTranslation()

    const settings = {
      
        infinite: true,
        slidesToShow:cards.length>3?3:cards.length,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: "linear",
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleprevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: cards.length>3?3:cards.length,
              slidesToScroll: 1,
              speed: 1000,
             nextArrow: <SampleNextArrow />,
             prevArrow: <SampleprevArrow />,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:true,
             nextArrow: <SampleNextArrow />,
             prevArrow: <SampleprevArrow />,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:true
            }
          }
        ]
      };

    return(
        <div className="relative py-2 md:py-4 font-sans">
          <div className="flex justify-between py-4">
            <div>
               <div className="text-2xl font-bold">{title}</div>
               <div className="text-sm text-customGray-200">{desc}</div>
            </div>
            <Link href={`/cards/${category}`}>
               <a className=" text-sm hover:underline flex items-center"><span>See All</span>{i18n.language==="ar"?<MdArrowBackIosNew/>:<MdArrowForwardIos/>}</a>
            </Link>
          </div>
           <Slider {...settings} className="">
            {
              cards.map((card,index)=>(
                <div key={index} className={`px-2 md:px-4`}>
                     <CardItem withOnlyImg={true} card={card}/>
              </div>
              ))
            }
           
           </Slider>

        </div>
    )
}

export default dynamic(() => Promise.resolve(CardSlider), { ssr: false });