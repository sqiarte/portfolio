import React from "react";
import style from "./Hero.module.css";
import Mycat from "../../img/mycat3.png";
import Button from "@mui/material/Button";
import { useState } from "react";
// import EmailIcon from "@mui/icons-material/Email";

function Hero() {
  const [buttonIcon, setButtonIcon] = useState("✉️");
  const [name, setName] = useState("SUEBKWAN");
  const [url, setUrl] = useState();

  const clickGreen = () => {
    if (buttonIcon === "✉️") {
      setButtonIcon("suebkwan@gmail.com");
    } else if (buttonIcon === "suebkwan@gmail.com") {
      setButtonIcon("linkedin.com/in/suebkwan");
    } else if (buttonIcon === "linkedin.com/in/suebkwan") {
      setButtonIcon("github.com/sqiarte");
    } else if (buttonIcon === "github.com/sqiarte") {
      setButtonIcon("Suebkwan's CV 📃");
    } else {
      myCV();
    }
  };

  const myName = () => {
    if (name === "SUEBKWAN") {
      setName("K W A N");
    } else {
      setName("SUEBKWAN");
    }
  };

  const linkUrl =
    "https://drive.google.com/file/d/1mRyaR1X8sV0waC5SbqG-KuLigpxYu5LM/view?usp=sharing";
  const myCV = () => {
    setUrl(linkUrl);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.leftcon}>
          <h1 className={style.textone} onClick={myName}>
            {name} <h1 className={style.textone1}>NAWAYUTH</h1>
          </h1>
          <h3 className={style.textthree}>
            I am a former veterinarian who has passion in software development,{" "}
            <br></br>I am excited to start a new journey as a fullstack
            developer.
          </h3>
          <div className={style.btn}>
            <a href={url} target='_blank' rel='noreferrer'>
              <Button
                sx={{ paddingLeft: 5, paddingRight: 5, fontWeight: "bold" }}
                variant='contained'
                color='success'
                onClick={clickGreen}
              >
                {buttonIcon}
              </Button>
            </a>
          </div>
        </div>

        <div className={style.rightcon}>
          <img className={style.catimg} src={Mycat} alt='my beloved cat'></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
