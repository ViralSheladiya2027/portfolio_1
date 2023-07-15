import React from "react";
import "./nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import { Hidden } from "@mui/material";

const Nav = () => {
  const [value, setValue] = React.useState("#");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="nav_container">
      <Hidden mdUp>
      <BottomNavigation
        sx={{
          bgcolor: "var(--nav-color)",
          borderRadius: 4,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
         
        }}
        onChange={handleChange}
        value={value}
      >
        <BottomNavigationAction
          label="Home"
          href="#"
          icon={<HomeOutlinedIcon />}
        />
        <BottomNavigationAction
          label="About"
          href="#about"
          icon={<PersonOutlineOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Experience"
          href="#experience"
          icon={<MenuBookOutlinedIcon />}
        />

        <BottomNavigationAction
          label="Service"
          href="#service"
          icon={<WorkHistoryOutlinedIcon />}
        />

        <BottomNavigationAction
          label="Contact"
          href="#contact"
          icon={<MessageOutlinedIcon />}
        />
      </BottomNavigation>
      </Hidden>
      
    </div>
  );
};

export default Nav;
