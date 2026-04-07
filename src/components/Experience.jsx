import "./Experience.css";

const experiences = [
  {
    title: "React Developer — Trainee",
    company: "Cyberfrat",
    location: "Jaipur",
    period: "Dec 2025 – Present",
    points: [
      "Planned and built 10+ responsive UI pages using React Hooks and Ant Design for dashboards and user-facing modules.",
      "Integrated 8+ REST APIs to fetch and render real-time data across multiple application screens.",
    ],
  },
  {
    title: "React Developer — Intern",
    company: "Cyberfrat",
    location: "Jaipur",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Built 5+ reusable UI components and pages using React Hooks and Ant Design.",
      "Consumed REST APIs to display dynamic data on dashboards and form-based modules.",
    ],
  },
  {
    title: "Salesforce Application Architect Intern",
    company: "Salesforce",
    location: "Jaipur",
    period: "Jul 2024 – Aug 2024",
    points: [
      "Internship ID: 3976-1311-4680-2253.",
      "Gained hands-on experience with Salesforce platform architecture and CRM application development.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section bg-alt" id="experience">
      <p className="section-label">My Journey</p>
      <h2 className="section-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="tl-item" key={i}>
            <div className="tl-dot" />
            <div className="tl-card card">
              <div className="tl-header">
                <div>
                  <h3 className="tl-title">{exp.title}</h3>
                  <p className="tl-company">{exp.company} · {exp.location}</p>
                </div>
                <span className="tl-period">{exp.period}</span>
              </div>
              <ul className="tl-points">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
