const LogoGroup = () => {
  const logoData = [
    { image: "twitter-logo.svg", url: "https://twitter.com/cannalifenj" },
    { image: "instagram-logo.svg", url: "https://www.instagram.com/cannalifenj" },
    { image: "facebook-logo.svg", url: "https://www.facebook.com/cannalifenj" },
    { image: "messenger-logo.svg", url: "https://m.me/cannalifenj" },
    { image: "google-logo.svg", url: "#" },
    { image: "gmail-logo.svg", url: "mailto:info@cannalifenj.com" }

  ];

  return (
    <>
      {logoData.map((logo, index) => (
        <div
          className="logo d-flex align-items-center justify-content-center"
          key={index}
        >
          <a href={logo.url} target="_blank" rel="noopener noreferrer">
            <img src={`/images/logo/${logo.image}`} alt="logo" className="lazy-img social-media-fix" />
          </a>
        </div>
      ))}
    </>
  );
};

export default LogoGroup;
