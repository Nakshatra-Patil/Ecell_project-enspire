import React,{useState} from "react";
import {Link,NavLink} from "react-router-dom"
import "./Navbar.css"

export const Navbar =()=>{
    const [menuOpen,setMenuOpen]=useState(false);

    return (
        
        <nav className="bg-black text-white z-10 relative">
          <Link to="/" className="title pl-12">Enspire</Link>
           <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
             <span></span>
             <span></span>
             <span></span>
             
           </div>
            <ul className={menuOpen ? "open" :""}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/sponsers">Sponsers</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
            </ul>
        </nav>
    )
}