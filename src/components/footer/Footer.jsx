const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="containers">
          <ul className="footer-nav">
            <li>Home</li>
            <li>Blog</li>
            <li>Games</li>
            <li>About us</li>
            <li>FAQ</li>
          </ul>
        </div>
      </footer>

      <section className="copyright-section">
        <div className="containers">
          <div className="flex justify-between items-center">
            <img
              src="/footer-logo.webp"
              alt="Logo"
              className="footer-logo"
            />
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
