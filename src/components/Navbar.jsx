import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const handleBrandClick = () => {
    if (location.pathname === "/") {
      document.getElementById("top").scrollIntoView({ behaviour: "smooth" });
    }
  };

  return (
    <nav className="nav">
      {/* Home link */}
      <Link className="brand" to="/" onClick={handleBrandClick}>
        ANIKETH.
      </Link>

      <ul className="nav-links">
        {/* NavLink adds an "active" class when on /about */}
        <li>
          <NavLink to="/#about">About</NavLink>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
