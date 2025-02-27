import Men from "../assets/men.jpg";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "./HeroStyles.css";

export default function Hero() {
  return (
    <section>
      <div className="heroplus">
        <h1 className="head">
          Hi,<br />
          im <span className="kk">Kandavel.J</span>
          <h6>Enthusiastic Fresher passionate about building responsive and user-friendly web experiences.</h6>
          <div className="icons">
          <a href="https://github.com/JKandavel" className="first"><LuGithub /></a>
          <a href="https://www.instagram.com/kandavel_001/" className="second"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/kandavel-j-65b6bb351/" className="third"><FaLinkedin /></a>
          </div>
             
          
          </h1>   
             
           <img src={Men} className="pic" alt="image"/>
        
        </div>
      
    </section>
  );
}
