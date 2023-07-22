import React from "react";
import "./header.css";
import Headerbutton from "./Headerbutton"
import me1 from "../../Image/me1.jpg"
import Socialmedia from "./Socialmedia";
import { Typography,Box } from "@mui/material";


const Header = () => {
  return (
  
      <section className="header_container">
        <Box p={3}>
        <Typography variant="h6" component="h5">
        Hello I'm
        </Typography>
        <Typography variant="h4" component="h2">
        Viral Sheladiya
        </Typography>
        <Typography variant="h6" component="h5">
        Fullstack Developer
        </Typography>
        <Box mt={2} />
       <Headerbutton />
   
       <img src={me1} alt="me" className="me"/>
       
      {/* <Socialmedia/> */}
      </Box>
      </section>
    
  );
};

export default Header;
