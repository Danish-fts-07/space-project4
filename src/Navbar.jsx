import React from 'react'
import "./Navbar.css"
import {  Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Destination from './Component/Destination/Destination';
import Home from './Component/Home/Home';
import Crew from './Component/Crew/Crew';
import Tech from './Component/Tech/Tech';
import {  NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";


function Navbar() {
        const[Active,setActive]=useState(false)
    return (
        <>
            <nav>
                <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg></div>
               
                <div className="nav-line"></div>
                <ul className={Active ? "show" : ""}>
                    <div className="close" onClick={() => { setActive(!Active) }}><MdClose /></div>
                    <li>
                        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">00 HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="Destination">01 DESTINATION</NavLink>
                    </li>
                    <li>
                        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="Crew">02 CREW</NavLink>
                    </li>
                    <li>
                        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="Tech">03 TECHNOLOGY</NavLink>
                    </li>
                </ul>
                <div className="open" onClick={() => { setActive(!Active) }}><VscThreeBars /></div>
            </nav>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Destination" element={<Destination />} />
                <Route path="Crew" element={<Crew />} />
                <Route path="Tech" element={<Tech/>} />
            </Routes>
        </>
    )
}

export default Navbar
