import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; Built by <span className="footer__name">Dhiraj Kumar</span>
        {" "}· React Developer · Jaipur, India
      </p>
      <p className="footer__copy">© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
