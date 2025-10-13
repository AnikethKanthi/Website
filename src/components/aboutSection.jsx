import { Link } from "react-router-dom";
import "./aboutSection.css"; //style file for AboutSection
import About from "./about.jsx";
export default function AboutSection() {
  return (
    <div className="about">
      {/* Left: image */}
      <div className="about-media">
        {/* public/aniketh.jpg served at /aniketh.jpg */}
        <img src="/about_picture.jpg" alt="Portrait of Aniketh" />
      </div>

      {/* Right: text + More link */}
      <div className="about-body">
        <h2>About</h2>
        <p>
          I’m Aniketh — a front-end developer focused on responsive, accessible,
          and smooth user experiences. I enjoy building fast React interfaces
          and thoughtful design systems.
        </p>

        {/* "More" behaves like a nav link: SPA route change to /profile */}
        <Link className="btn-link" to="/About">
          More
        </Link>
      </div>
    </div>
  );
}
