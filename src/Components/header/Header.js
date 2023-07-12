import React from "react";
import "./header.css";
import Headerbutton from "./Headerbutton"
import me1 from "../../Image/me1.jpg"
import Socialmedia from "./Socialmedia";
// import { Button } from "@mui/material";


const Header = () => {
  return (
  
      <section className="header_container">
        <h5>Hello I'm</h5>
        <h2>Viral Sheladiya</h2>
        <h5>Fullstack Developer</h5>
       <Headerbutton />
       <div className="me">

       <img src={me1} alt="me" />
       </div>
      <Socialmedia/>
      
      </section>
    
  );
};

export default Header;
