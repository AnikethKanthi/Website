//import Ani from "src/assets/Ani.jpg";
import AboutSection from "./aboutSection";
import "./Home.css";
export default function Home() {
  return (
    <>
      {/* HERO with image */}
      <header className="hero" id="top">
        <img className="hero-img" src="/Ani.JPG" alt="Welcome banner" />
        <div className="hero-content">
          <h1>Hi, I’m Aniketh</h1>
          <p>Front-end developer building smooth, accessible UIs.</p>
          <a className="btn" href="#about">
            About Me
          </a>
        </div>
      </header>
      {/* MAIN SECTIONS */}
      <main className="container">
        <section id="about" className="section">
          <AboutSection />
        </section>

        <section id="projects" className="section alt">
          <h2>Projects</h2>
          <p>List a few cool things you built.</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>How people can reach you (email, LinkedIn, etc.).</p>
        </section>
      </main>
    </>
  );
}
