import "./Contact.css";

const contacts = [
  { icon: "📧", label: "Email",    value: "dhiraj84121100@gmail.com", link: "mailto:dhiraj84121100@gmail.com" },
  { icon: "📞", label: "Phone",    value: "+91 6202320180",           link: "tel:+916202320180" },
  { icon: "📍", label: "Location", value: "Jaipur, Rajasthan, India", link: null },
  { icon: "💼", label: "LinkedIn", value: "View Profile",             link: "https://rb.gy/1oazkc" },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__orb" />
      <div className="contact__inner">
        <p className="section-label" style={{ textAlign: "center" }}>Get In Touch</p>
        <h2 className="section-title" style={{ textAlign: "center" }}>Contact Me</h2>
        <p className="contact__sub">
          I'm currently open to new opportunities. Whether you have a project,
          a question, or just want to say hi — my inbox is always open!
        </p>
        <div className="contact__grid">
          {contacts.map((c) => (
            <div className="contact-item card" key={c.label}>
              <div className="contact-item__icon">{c.icon}</div>
              <div className="contact-item__label">{c.label}</div>
              {c.link ? (
                <a className="contact-item__value" href={c.link} target="_blank" rel="noreferrer">
                  {c.value}
                </a>
              ) : (
                <span className="contact-item__value">{c.value}</span>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="mailto:dhiraj84121100@gmail.com">
            <button className="btn-primary">Send an Email ✉️</button>
          </a>
        </div>
      </div>
    </section>
  );
}
