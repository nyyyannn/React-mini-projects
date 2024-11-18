import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./card";
import './App.css';

function App()
{
    return(
        <>
        <Navbar className="navbar"/>
        <Hero className="hero"/>
        <div className="cards">
            <Card/>
        </div>
        </>
    )
}
export default App;