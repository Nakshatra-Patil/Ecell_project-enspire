import React from "react";
import bgvideo from "../../assests/black_orange.mp4"
import envid from "../../assests/enspvid.mp4"
import "./main.css"

export const Home =()=>{
    return (
        <>
        <div className="bg-black absolute w-full h-full ">
            <video src={bgvideo} autoPlay loop muted className=" opacity-45 w-full h-full object-cover"></video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col " >
               <div className=" head1 text-white text-lg">ECELL PRESENTS</div>
               <div className="Heading text-white text-9xl font-semibold  ">Enspire</div><br></br>
               <br></br>
               <div className="head2 text-white text-2xl">INNOVATION ODDESSEY</div>
               
               
            </div>
            <div className="vid2 flex items-center justify-center bg-black">
                <video src={envid} autoPlay loop muted className=" ml-20 mt-20 "></video>
            </div>
        </div>
        
        



        </>
        
    )
}