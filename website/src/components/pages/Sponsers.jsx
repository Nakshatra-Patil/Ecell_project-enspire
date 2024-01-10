import React from "react";
import spon1 from "../../assests/s1.jpeg"
import spon2 from "../../assests/s2.jpeg"
import spon3 from "../../assests/s3.jpg"
import spon4 from "../../assests/s4.png"
import spon5 from "../../assests/s5.png"
import spon6 from "../../assests/s6.jpg"
import spon7 from "../../assests/s7.png"
import "./main.css"


export const Sponsers =()=>{
    return (
        <div className="bg-black w-full min-h-screen">
          <div className="Sponser_container flex flex-wrap items-center justify-center h-full">
            
            <div className="wrapper box-border flex items-center justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                 <img src={spon2} alt="Insyst Labs" width="250px" height="250px" className="m-auto" />
                  <div className="content text-white w-[250px] h-[250px]  absolute bg-orange-800 flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl">Lensfit</h1>
                  </div>
             
                </div>

            </div>

            <div className="wrapper box-border flex items-center   justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                <img src={spon3} alt="Blogadda" width="250px" height="250px" className="m-auto"/>
                   <div className="content text-white w-[250px] h-[250px]  absolute  bg-orange-800   flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl" >Blogadda</h1>
                  </div>
              </div>
            </div>
            
            <div className="wrapper box-border flex items-center   justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                <img src={spon4} alt="Ohcampus img" width="250px" height="250px" className="m-auto"/>
                <div className="content text-white w-[250px] h-[250px]  absolute bg-orange-800   flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl">Ohcampus</h1>
                  </div>
              </div>
            </div>

            <div className="wrapper box-border flex items-center   justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                <img src={spon5} alt="Bugsee" width="250px" height="250px" className="m-auto"/>
                <div className="content text-white w-[250px] h-[250px]  absolute bg-orange-800  flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl">Bugsee</h1>
                  </div>
              </div>
            </div>

            <div className="wrapper box-border flex items-center   justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                <img src={spon6} alt="Cloudspolit" width="250px" height="250px" className="m-auto"/>
                <div className="content text-white w-[250px] h-[250px]  absolute bg-orange-800   flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl">Cloudsploit</h1>
                  </div>
              </div>
            </div>

            <div className="wrapper box-border flex items-center   justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                <img src={spon7} alt="Wazirx" width="250px" height="250px" className="m-auto"/>
                <div className="content text-white w-[250px] h-[250px]  absolute bg-orange-800 flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl">Wazirx</h1>
                  </div>
              </div>
            </div>

            <div className="wrapper box-border flex items-center   justify-center ">
              <div className="Sponsercard m-16 flex flex-col">
                <img src={spon1} alt="Insyst Labs" width="250px" height="20px" className="m-auto"/>
                <div className="content text-white w-[250px] h-[65px]  absolute bg-orange-800  flex justify-center items-center flex-col opacity-0 ">
                     <h1 className="text-amber-200 text-2xl">Insyst Labs</h1>
                  </div>
              </div>
            </div>

            
          </div>
        </div>
    )
}