import Cardproject from "./Cardproject";
import style from "./Project.module.css";
import exercisepic from "../../img/exer.png";
import jammmingpic from "../../img/jammmingpic.png";
import jsgame from "../../img/js-asse.png";

function Project() {
  const jamgh = "https://github.com/sqiarte/jammming";
  const jam = "https://jammming-one.vercel.app";
  const ffff = "https://footfeetforfire.web.app/dashboard";
  const ffffgh =
    "https://github.com/sqiarte/foot-feet-for-fire/tree/kwan-devmain";
  const find = "https://replit.com/@sy40/js-assessment#index.js";
  const findgh = "https://github.com/sqiarte/findyourhat";

  return (
    <div className={style.out}>
      <div className={style.bigproject} id='projects'>
        <h1 className={style.projecthead}>My projects</h1>
        <div className={style.projectcontainer}>
          <Cardproject
            linkUrl={ffff}
            linkGithub={ffffgh}
            pic={exercisepic}
            head={"Foot-Feet-For-Fire"}
            explain={
              "Exercise tracking website created by MERN stack. Users can login, set their goals, and see their progress."
            }
          />
          <Cardproject
            linkUrl={jam}
            linkGithub={jamgh}
            pic={jammmingpic}
            head={"Jammming"}
            explain={
              "A website using Spotify API, let users search for they Spotify playlists and add them to their Spotify accounts."
            }
          />
          <Cardproject
            linkUrl={find}
            linkGithub={findgh}
            pic={jsgame}
            head={"Find Your Hat"}
            explain={
              "A javaScript maze game, users can move in order to find the hat, users can win or lose based on conditions"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
