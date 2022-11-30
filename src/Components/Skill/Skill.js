import React from "react";
import style from "./Skill.module.css";
import iconhtml from "../../icon/html.png";
import iconcss from "../../icon/css.png";
import iconjs from "../../icon/javascript.png";
import iconnode from "../../icon/node.png";
import iconreact from "../../icon/react.png";
import iconexpress from "../../icon/express.png";
import iconmongodb from "../../icon/mongodb.png";
import icongit from "../../icon/git.png";

function Skill() {
  return (
    <div className={style.skillcontainer} id="skill">
      <div className={style.box}>
        <h1 className={style.skillhead}>My skills</h1>
        <div className={style.skills}>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconhtml}
              alt='html'
              
              title='HTML'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconcss}
              alt='css'
              width='100'
              title='CSS'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconjs}
              alt='javascript'
              width='100'
              title='JavaScript'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconreact}
              alt='react'
              width='100'
              title='React.js'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconnode}
              alt='node'
              width='100'
              title='Node.js'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconexpress}
              alt='html'
              width='100'
              title='html'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={iconmongodb}
              alt='html'
              width='100'
              title='html'
            ></img>
          </div>
          <div className={style.item}>
            <img
              className={style.icon}
              src={icongit}
              alt='html'
              width='100'
              title='html'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
