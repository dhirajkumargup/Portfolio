import { useEffect, useState } from "react";
import "./Hero.css";
import logo from "../assets/dhiraj.jpeg";

const stats = [
  { num: "10+", lbl: "UI Pages Built" },
  { num: "8+", lbl: "REST APIs" },
  { num: "3+", lbl: "Internships" },
  { num: "7.87", lbl: "CGPA" },
];

const roles = [
  "React Developer",
  "CS Engineer",
  "Frontend Developer",
  "Problem Solver"
];

export default function Hero() {

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    const typingSpeed = 90;

    if (charIndex < roles[roleIndex].length) {

      const timeout = setTimeout(() => {
        setText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);

    } else {

      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1400);

    }

  }, [charIndex, roleIndex]);


  return (
    <section className="hero" id="hero">

      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />

      <div className="hero__inner">

        <div className="hero__text">

          <p className="hero__greeting">
            Hello, I'm
          </p>

          <h1 className="hero__name">
            Dhiraj <span>Kumar</span>
          </h1>

          <p className="hero__role">
            {text}
            <span className="cursor">|</span>
          </p>

          <p className="hero__bio">
            A passionate B.Tech Computer Science student with strong problem-solving
            skills. Looking for opportunities to apply technical knowledge and
            contribute to innovative projects.
          </p>

          <div className="hero__btns">

            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
              }
            >
             Connect me
            </button>

            <button
              className="btn-outline btn-small"
              onClick={() =>
                document.getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects ↓
            </button>
            <a href="/Portfolio/Dhiraj-resume.pdf" download>

              <button className="btn-outline btn-small">
                Download CV ↓
              </button>

            </a>

          </div>


          <div className="hero__stats">

            {stats.map((s) => (

              <div className="hero__stat" key={s.lbl}>

                <span className="hero__stat-num">
                  {s.num}
                </span>

                <span className="hero__stat-lbl">
                  {s.lbl}
                </span>

              </div>

            ))}

          </div>

        </div>



        <div className="hero__avatar">

          <div className="hero__avatar-inner">
            <img src={logo} alt="Dhiraj Kumar" />
          </div>

          <div className="hero__avatar-ring" />

        </div>

      </div>

    </section>
  );
}