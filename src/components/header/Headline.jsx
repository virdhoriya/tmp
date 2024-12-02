import { useEffect, useState } from "react";
import { FaGamepad, FaHome } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Headline = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <section className="main-section">
      <div className="containers">
        <div className="flex justify-between items-center">
          <img src="/logo.png" alt="logo" className="logo-img" loading="lazy" />
          <div className="flex items-center gap-xl">
            <a
              href="TeenPattiMaster.apk"
              download="TeenPattiMaster.apk"
              className="download-btn"
              title="download"
              aria-label="download"
            >
              <span className="z-10">
                <img src="/download-icon.png" alt="download" className="icon" />
              </span>
              <span className="z-10">downlaod</span>
            </a>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              ) : (
                <ImCross className="p-1 h-full w-full fill-[var(--primary)]" />
              )}
            </div>
          </div>
        </div>
      </div>
      {!isOpen && <div className="mobile-menu-cover"></div>}
      <div
        className={`mobile-menu-container ${
          !isOpen ? "animate-mobile-nav" : ""
        }`}
      >
        <div className="flex justify-end items-center">
          <ImCross
            className="inline-block p-1 h-10 w-10 fill-[var(--secondary)]"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(true)}
              className={`mobile-nav-item ${
                pathname === "/" ? "active-mobile-nav" : ""
              }`}
            >
              <FaHome className="mobile-nav-icon" />
              <span>home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/games"
              onClick={() => setIsOpen(true)}
              className={`mobile-nav-item ${
                pathname === "/games" ? "active-mobile-nav" : ""
              }`}
            >
              <FaGamepad className="mobile-nav-icon" />
              <span>games</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(true)}
              className={`mobile-nav-item ${
                pathname === "/about" ? "active-mobile-nav" : ""
              }`}
            >
              <MdGroups className="mobile-nav-icon" />
              <span>about us</span>
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              onClick={() => setIsOpen(true)}
              className={`mobile-nav-item ${
                pathname === "/faq" ? "active-mobile-nav" : ""
              }`}
            >
              <IoIosMail className="mobile-nav-icon" />
              <span>about us</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Headline;
