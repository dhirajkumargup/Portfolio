import "./Skills.css";

const skills = [
  { name: "HTML5",      icon: "🌐", level: 95 },
  { name: "CSS3",       icon: "🎨", level: 90 },
  { name: "JavaScript", icon: "⚡", level: 85 },
  { name: "React JS",   icon: "⚛️", level: 88 },
  { name: "Ant Design", icon: "🐜", level: 82 },
  { name: "MySQL",      icon: "🗄️", level: 70 },
  { name: "Python",     icon: "🐍", level: 65 },
  { name: "C++",        icon: "⚙️", level: 60 },
  { name: "Git",        icon: "🌿", level: 78 },
];

export default function Skills() {
  return (
    <section className="section bg-dark" id="skills">
      <p className="section-label">What I Know</p>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills__grid">
        {skills.map((s) => (
          <div className="skill-card card" key={s.name}>
            <div className="skill-card__icon">{s.icon}</div>
            <div className="skill-card__name">{s.name}</div>
            <div className="skill-card__bar">
              <div
                className="skill-card__fill"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <div className="skill-card__pct">{s.level}%</div>
          </div>
        ))}
      </div>
    </section>
  );
}
