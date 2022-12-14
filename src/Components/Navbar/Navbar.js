import React from "react";
// import { useState } from "react";
import style from "./Navbar.module.css";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItem } from "@mui/material";
// import { Link } from "react-router-dom";
// import {useEffect} from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

function Navbar() {
  //   const [choose, setChoose] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkedinUrl = "https://www.linkedin.com/in/suebkwan/"
  const githubUrl = "https://github.com/sqiarte"
  const cvUrl = "https://drive.google.com/file/d/1mRyaR1X8sV0waC5SbqG-KuLigpxYu5LM/view?usp=sharing"


  return (
    <div className={style.navbar}>
      <ul className={style.rightnav}>
        <li className={style.navcontent}><a href="#">about me ðº</a></li>
        <li className={style.navcontent}><a href="#skill">skill ð§âð»</a></li>
        <li className={style.navcontent}><a href="#projects">projectsð±ï¸</a></li>
        {/*<li className='navcontent'>contact ð</li>*/}
        <li>
          <ListItem
            className={style.navcontent}
            sx={{ p: 0 }}
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Contact ð
          </ListItem>
          <Menu
            // sx={{ width: 150, backgroundColor: "#fffEf1" }}
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <a href="mailto:suebkwan@gmail.com" target="_blank" rel="noreferrer">
            <MenuItem
              sx={{
                backgroundColor: "#fffEf1",
                // width: 150,
                fontFamily: "chewy",
                color: "#a38a40",
                paddingRight:0,
              }}
              onClick={handleClose}
            >
              <EmailIcon sx={{color:'grey', paddingRight:1}}/> Email 
            </MenuItem>
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <MenuItem
              sx={{
                backgroundColor: "#fffEf1",
                // width: 150,
                fontFamily: "chewy",
                color: "#a38a40",
              }}
              onClick={handleClose}
            >
              <LinkedInIcon sx={{color:'grey', paddingRight:1}}/> LinkedIn 
              
            </MenuItem>
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
            <MenuItem
              sx={{
                backgroundColor: "#fffEf1",
                // width: 150,
                fontFamily: "chewy",
                color: "#a38a40",
              }}
              onClick={handleClose}
            >
              <GitHubIcon sx={{color:'grey', paddingRight:1}} /> GitHub 
            </MenuItem>
            </a>
            <a href={cvUrl} target="_blank" rel="noreferrer">
            <MenuItem
              sx={{
                backgroundColor: "#fffEf1",
                // width: 150,
                fontFamily: "chewy",
                color: "#a38a40",
              }}
              onClick={handleClose}
            >
              <DescriptionIcon sx={{color:'grey', paddingRight:1}} /> CV 
            </MenuItem>
            </a>
          </Menu>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
