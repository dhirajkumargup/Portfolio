import "./Projects.css";

const projects = [
  {
    icon: "📚",
    title: "LMS – Learning Management System",
    desc: "Built a responsive Learning Management System UI in React with reusable components and full API integration. Implemented interactive features using React Hooks, Redux, and Ant Design.",
    tags: ["React", "Redux", "Ant Design", "REST API"],
    period: "Oct 2025 – Present",
  },
  {
    icon: "🦯",
    title: "VibraNav – Haptic Navigation Aid",
    desc: "Hardware-based haptic blind stick for the visually impaired. Built using ultrasonic and IR sensors for real-time obstacle detection and haptic feedback alerts.",
    tags: ["Hardware", "Ultrasonic Sensor", "IR Sensor", "IoT"],
  },
  {
    icon: "🎂",
    title: "Age Calculator",
    desc: "A precise frontend age calculator that computes a person's accurate age down to days from their date of birth. Built with pure JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section className="section bg-dark" id="projects">
      <p className="section-label">What I've Built</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects__grid">
        {projects.map((p) => (
          <div className="proj-card card" key={p.title}>
            <div className="proj-card__icon">{p.icon}</div>
            <h3 className="proj-card__title">{p.title}</h3>
            {p.period && <p className="proj-card__period">{p.period}</p>}
            <p className="proj-card__desc">{p.desc}</p>
            <div className="proj-card__tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
