import Nav from "../components/Nav";
import More from "../assets/more.webp";
import "./Aboutstyle.css";
export default function Abouthero() {
    return (
      <section>
        <Nav/>
        <div className="heroo">
          <img src={More}/>
          <p>"Hi, I'm JK, a passionate front-end developer and a Computer Science Engineering student at Dhanalakshmi College of Engineering. I strive to build reliable and efficient web projects with a strong focus on user experience and functionality."</p>
        </div>
        <a className="resume" href="/">Click here:<span className="click">Resume</span></a>
        </section>
    );
}
    
