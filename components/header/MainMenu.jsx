import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item logo">
            <Link href="/" className="nav-link">
              <img
                src="/images/logo/cannalife-icon.svg"
                alt="logo"
                width={115}
              />
            </Link>
          </li>
          {/* End logo item */}

          <li className="nav-item">
            <Link
              href="/"
              className={`nav-link ${router.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          {/* End home link */}

          <li className="nav-item">
            <Link
              href="/contact"
              className={`nav-link ${
                router.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          {/* End contact link */}

          <li className="nav-item">
            <a
              href="https://twitter.com/cannalifenj"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter /> X
            </a>
          </li>
          {/* End X link */}

          <li className="nav-item">
            <a
              href="https://www.instagram.com/cannalifenj"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> Instagram
            </a>
          </li>
          {/* End Instagram link */}

          <li className="nav-item">
            <a
              href="https://cannalifenj.com/images/logo/facebook-logo.svg"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/logo/facebook-logo.svg"
                alt="Facebook"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Facebook
            </a>
          </li>
          {/* End Facebook link */}

          <li className="nav-item">
            <a
              href="fb-messenger://user-thread/100000123456789" // Replace with your actual Messenger ID
              className="nav-link"
            >
              <img
                src="/images/logo/messenger-logo.svg"
                alt="Messenger"
                style={{ width: 20, height: 20, marginRight: 8 }}
              />
              Messenger
            </a>
          </li>
          {/* End Messenger link */}
        </ul>
        {/* End nav */}
      </div>
    </nav>
  );
};

export default MainMenu;
