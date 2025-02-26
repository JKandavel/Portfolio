import Nav from "./Nav";
import "./Contactstyle.css";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contacthero() {
  return (
    <section>
      <Nav />
      <div className="contacthero">
        <center>
          <h1>Contact</h1>
          <a href="https://github.com/JKandavel" className="firstt">
            <LuGithub />
          </a>
          <a href="https://www.instagram.com/kandavel_001/" className="secondd">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kandavel-j-65b6bb351/"
            className="thirdd"
          >
            <FaLinkedin />
          </a>
          <p className="para">If you want to disucss more detail,please contact me</p>
          <h7>
            Email:<a href="#">kandavel9894@gmail.com</a>
          </h7>
        </center>
      </div>
    </section>
  );
}
