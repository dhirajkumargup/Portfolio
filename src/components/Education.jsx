import "./Education.css";

const education = [
  {
    degree: "B.Tech – Computer Science & Engineering",
    school: "Arya College of Engineering & IT",
    period: "2021 – 2025",
    location: "Jaipur, India",
    score: "CGPA: 7.87",
  },
  {
    degree: "12th – Science (PCM)",
    school: "A.N.D Public School",
    period: "2019 – 2021",
    location: "Chapra, India",
    score: "Score: 66%",
  },
  {
    degree: "10th – Secondary Education",
    school: "A.N.D Public School",
    period: "2018 – 2019",
    location: "Saran, India",
    score: "Score: 59%",
  },
];

export default function Education() {
  return (
    <section className="section bg-alt" id="education">
      <p className="section-label">Academic Background</p>
      <h2 className="section-title">Education</h2>
      <div className="edu__grid">
        {education.map((e) => (
          <div className="edu-card card" key={e.degree}>
            <div className="edu-card__icon">🎓</div>
            <h3 className="edu-card__degree">{e.degree}</h3>
            <p className="edu-card__school">{e.school}</p>
            <p className="edu-card__meta">{e.period} · {e.location}</p>
            <span className="edu-card__badge">{e.score}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
