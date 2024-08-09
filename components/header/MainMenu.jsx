import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
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
            <Link href="/" className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          {/* End home link */}

          <li className="nav-item">
            <Link href="/contact" className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
          {/* End contact link */}

          <li className="nav-item">
            <a href="https://x.com/yourprofile" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> X
            </a>
          </li>
          {/* End X link */}

          <li className="nav-item">
            <a href="https://instagram.com/yourprofile" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
          </li>
          {/* End Instagram link */}

          <li className="nav-item">
            <a href="https://facebook.com/yourprofile" className="nav-link" target="_blank" rel="noopener noreferrer">
              <FaFacebookF /> Facebook
            </a>
          </li>
          {/* End Facebook link */}
        </ul>
        {/* End nav */}
      </div>
    </nav>
  );
};

export default MainMenu;
