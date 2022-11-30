import Cardproject from './Cardproject'
import style from'./Project.module.css'
import exercisepic from "../../img/exer.png";
import jammmingpic from "../../img/jammmingpic.png";
import jsgame from "../../img/js-asse.png"

function Project () {
    const jam = "https://github.com/sqiarte/jammming"

    return (
    <div className={style.bigproject} id="projects">
    <h1 className={style.projecthead}>My projects</h1>
    <div className={style.projectcontainer}>
        <Cardproject  pic={exercisepic} head={"Foot-Feet-For-Fire"} explain={"Exercise tracking website created by MERN stack. Users can set their goals and see their progress."}/>
        <Cardproject linkUrl={jam} pic={jammmingpic} head={"Jammming"} explain={"A website using Spotify API, let users search for they Spotify playlists and add them to their Spotify accounts."}/>
        <Cardproject  pic={jsgame} head={"Find Your Hat"} explain={"A javaScript maze game, users can move in order to find the hat, users can win or lose based on conditions"}/>
        </div></div>)

}

export default Project;