import React, {useState} from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import image1 from "../../assests/1.png";
import image2 from "../../assests/2.png";
import image3 from "../../assests/3.png";
import image4 from "../../assests/4.png";
import image5 from "../../assests/5.png";
import image6 from "../../assests/6.png";
import image7 from "../../assests/7.png";
import image8 from "../../assests/8.png";
import image9 from "../../assests/9.png";
import image10 from "../../assests/10.png";
import image11 from "../../assests/11.png";

export const Events =()=>{

    const slides =[{url:image1},{url:image2},{url:image3},{url:image4},{url:image5},{url:image6},{url:image7},{url:image8},{url:image9},{url:image10},{url:image11}];


     const [currentIndex,setcurrentIndex]=useState(0)

     const prevSlide=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex= isFirstSlide ? slides.length-1:currentIndex-1;
        setcurrentIndex(newIndex);
     }
     const nextSlide=()=>{
        const isLastSlide=currentIndex===slides.length-1;
        const newIndex= isLastSlide ? 0 :currentIndex+1;
        setcurrentIndex(newIndex);
     }
     const goToSlide=(slideIndex)=>{
        setcurrentIndex(slideIndex);
     }


    return (
        <div className=" bg-orange-900 w-full min-h-screen  ">
        <div className="max-w-[1480px] h-[780px] w-full m-auto py-16 px-4 relative group  ">
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className="w-full h-full  bg-center bg-cover duration-500"></div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
          </div>
          <div className="flex top-4 justify-center py-2">
              {slides.map((slide,slideIndex)=>(
                <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className="text-1xl cursor-pointer" >
                    <RxDotFilled/>
                </div>
              ) )}
          </div>


        </div>
        </div>
    )
}