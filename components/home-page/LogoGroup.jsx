import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MessengerIcon } from "react-icons/fa"; // Import Messenger icon if available

const LogoGroup = () => {
  const logoData = [
    { icon: <FaTwitter />, url: "https://twitter.com/cannalifenj", name: "X" }, // X icon
    { icon: <FaInstagram />, url: "https://www.instagram.com/cannalifenj", name: "Instagram" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/cannalifenj", name: "Facebook" },
    { icon: <MessengerIcon />, url: "https://m.me/cannalifenj", name: "Messenger" },
    { icon: <FaGoogle />, url: "#", name: "Google" }, // Replace with appropriate Google icon
    { icon: <FaEnvelope />, url: "mailto:info@cannalifenj.com", name: "Email" } // Replace with appropriate Email icon
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {logoData.map((logo, index) => (
        <a
          href={logo.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="d-flex align-items-center justify-content-center m-2"
          style={{ fontSize: '24px', color: 'inherit' }}
          aria-label={logo.name}
        >
          {logo.icon}
        </a>
      ))}
    </div>
  );
};

export default LogoGroup;
