import "./About.css";

const info = [
  { label: "Name",        value: "Dhiraj Kumar" },
  { label: "DOB",         value: "20 December 2003" },
  { label: "Location",    value: "Jaipur, Rajasthan, India" },
  { label: "Email",       value: "dhiraj84121100@gmail.com" },
  { label: "Phone",       value: "+91 6202320180" },
  { label: "Nationality", value: "Indian" },
  { label: "Languages",   value: "Hindi, English" },
  { label: "LinkedIn",    value: "View Profile", link: "https://rb.gy/1oazkc" },
  { label: "GitHub",      value: "github.com/dhirajkumar", link: "https://github.com/" },
];

export default function About() {
  return (
    <section className="section bg-alt" id="about">
      <p className="section-label">Get To Know</p>
      <h2 className="section-title">About Me</h2>
      <div className="about__grid">
        <div className="about__bio">
          <p>
            I'm a B.Tech Computer Science student at Arya College of Engineering &amp; IT,
            Jaipur, with a strong foundation in frontend development — particularly React.js.
            I have hands-on experience building responsive UIs and integrating REST APIs in
            real-world projects.
          </p>
          <p>
            I enjoy turning complex problems into elegant, user-friendly interfaces. My journey
            includes internships where I built production-grade dashboards and modules using
            React Hooks and Ant Design, and I hold certifications in RHCSA and Full Stack
            Web Development.
          </p>
          <p>
            Currently working as a React Developer Trainee at Cyberfrat, Jaipur, where I
            continue to build and scale frontend solutions.
          </p>
        </div>
        <div className="about__info">
          {info.map((i) => (
            <div className="about__info-item" key={i.label}>
              <span className="about__info-label">{i.label}</span>
              {i.link ? (
                <a href={i.link} target="_blank" rel="noreferrer">{i.value}</a>
              ) : (
                <span>{i.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
