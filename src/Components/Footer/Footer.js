import style from "./Footer.module.css";
import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <div className={style.out}>
      <div className={style.big}>
        <div className={style.contact}>
        <EmailIcon sx={{paddingRight: 1}} />suebkwan@gmail.com
        </div>
        <div className={style.contact}>
        <LocalPhoneIcon sx={{paddingX: 1}} /> +6685-0994206
        </div>
      </div>
    </div>
  );
};

export default Footer;
