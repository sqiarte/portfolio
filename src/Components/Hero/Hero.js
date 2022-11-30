import React from "react";
import style from "./Hero.module.css";
import Mycat from "../../img/mycat3.png";
// import ThreeD from "../ThreeD/ThreeD";
import Button from "@mui/material/Button";

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.leftcon}>
          <h1 className={style.textone}>Suebkwan Nawayuth</h1>
          <h3 className={style.textthree}>
            I am a former veterinarian who has passion in software development,{" "}
            <br></br>I am excited to start a new journey as a fullstack
            developer.
          </h3>
          <div className={style.btn}>
            <Button
              sx={{ paddingLeft: 5, paddingRight: 5, fontWeight: "bold" }}
              variant='contained'
              color='success'
            >
              suebkwan@gmail.com
            </Button>
          </div>
        </div>

        <div className={style.rightcon}>
          <img
            className={style.catimg}
            src={Mycat}
            alt='my beloved cat'
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
