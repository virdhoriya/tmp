import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="containers">
          <ul className="footer-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </footer>

      <section className="copyright-section">
        <div className="containers">
          <div className="copyright-content">
            <img src="/footer-logo.webp" alt="Logo" className="footer-logo" />
            <p className="copy-text">
              &copy; Teen patti Master @. All Rights are reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
