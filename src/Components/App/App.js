import style from "./App.module.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
