import "./Certificates.css";

const certs = [
  { icon: "🏆", title: "RHCSA Certification",        id: "ID: 230-089-096" },
  { icon: "🌐", title: "Full Stack Web Development", id: "ID: Grras/214647" },
  { icon: "☁️", title: "Salesforce Internship",      id: "ID: 3976-1311-4680-2253" },
];

export default function Certificates() {
  return (
    <section className="section bg-dark" id="certificates">
      <p className="section-label">Achievements</p>
      <h2 className="section-title">Certifications</h2>
      <div className="certs__grid">
        {certs.map((c) => (
          <div className="cert-card card" key={c.title}>
            <div className="cert-card__icon">{c.icon}</div>
            <div>
              <h3 className="cert-card__title">{c.title}</h3>
              <p className="cert-card__id">{c.id}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
