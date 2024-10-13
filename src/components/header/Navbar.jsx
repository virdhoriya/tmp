import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="nav-section">
      <div className="containers">
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/" className="nav-item">
                <img src="/home.png" alt="Home" />
                <span>home</span>
              </Link>
            </li>
            <li className="nav-item">
              <img src="/list.png" alt="Home" />
              <span>blog</span>
            </li>
            <li className="nav-item">
              <img src="/game.png" alt="Home" />
              <span>games</span>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                <img src="/group.png" alt="Home" />
                <span>about us</span>
              </Link>
            </li>
            <li className="nav-item">
              <img src="/email.png" alt="Home" />
              <span>faq</span>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
