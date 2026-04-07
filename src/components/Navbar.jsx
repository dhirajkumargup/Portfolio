import { useState } from "react";
import "./Navbar.css";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        DK.
      </div>
      <ul className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>
      <button className="navbar__hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
