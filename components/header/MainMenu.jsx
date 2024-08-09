import Link from "next/link";
import { FaXTwitter, FaFacebookF } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import { useRouter } from "next/router";
import { RiMessengerLine } from "react-icons/ri"; // Import Messenger icon

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

          <li className="nav-item d-flex justify-content-around mt-3">
            <a
              href="https://twitter.com/cannalifenj"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '24px', padding: '10px' }} // Increase size and padding for better pressability
              aria-label="X"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/cannalifenj"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '24px', padding: '10px' }} // Increase size and padding for better pressability
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="fb-messenger://user-thread/100000123456789" // Replace with your actual Messenger ID
              className="nav-link"
              style={{ fontSize: '24px', padding: '10px' }} // Increase size and padding for better pressability
              aria-label="Messenger"
            >
              <RiMessengerLine />
            </a>
          </li>
          {/* End social media links */}
        </ul>
        {/* End nav */}
      </div>
    </nav>
  );
};

export default MainMenu;
