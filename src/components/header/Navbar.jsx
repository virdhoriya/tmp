import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <section className="nav-section">
      <div className="containers">
        <nav>
          <ul className="nav-container">
            <li>
              <Link
                to="/"
                className={`nav-item ${pathname === "/" ? "active-nav" : ""}`}
              >
                <img src="/home.png" alt="Home" />
                <span>home</span>
              </Link>
            </li>
            {/* <li className={`nav-item ${pathname === "/" ? "active-nav" : ""}`}>
              <img src="/list.png" alt="Home" />
              <span>blog</span>
            </li> */}
            <li>
              <Link
                to="/games"
                className={`nav-item ${
                  pathname === "/games" ? "active-nav" : ""
                }`}
              >
                <img src="/game.png" alt="Home" />
                <span>games</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-item ${
                  pathname === "/about" ? "active-nav" : ""
                }`}
              >
                <img src="/group.png" alt="Home" />
                <span>about us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`nav-item ${
                  pathname === "/faq" ? "active-nav" : ""
                }`}
              >
                <img src="/email.png" alt="Home" />
                <span>faq</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
