import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import './App.css';
import data from './data';

function App()
{
    const items = data.map((item)=>
    {
        return <Card
            key={item.id}
            {...item}
            />
    }
    )
    return(
        <>
        <Navbar className="navbar"/>
        <Hero className="hero"/>
        <div className="cards">
            {items}
        </div>
        </>
    )
}
export default App;