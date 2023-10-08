import Image from "next/image";

const AppBanner = () => {
  const features = [
    "Same-day ordering through our website.",
    "Shop daily discounts on all products.",
    "Earn rewards on your purchases.",
  ];

  const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
    {
      platform: "App store",
      icon: "images/icon/apple-black.svg",
      className: "ios-button",
    },
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven wow fadeInLeft">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">Online Ordering</div>
            <h2 className="main-title fw-500 tx-dark m0">
            Easy Pick-Ups
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
          Pick the best time for you to pickup your products and we&apos;ll have them ready.
          </p>
          <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {/* End list */}

          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 wow fadeInRight">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <Image
            src="/images/media/mobile-app-order-p2.png"
            alt="mobile ordering screenshot"
            className="lazy-img main-img ms-auto"
            width="200"
            height="402"
          />
         
          <Image
            src="/images/media/mobile-app-order-p1.png"
            alt="mobile ordering screenshot"
            className="lazy-img screen-two"
            width="275"
            height="533"
          />
          <Image
            src="/images/shape/shape_139.svg"
            alt="custom shape"
            className="lazy-img shapes shape-one"
            width="80"
            height="80"
          />
          <Image
            src="/images/shape/shape_140.svg"
            alt="custom shape"
            className="lazy-img shapes shape-two"
            width="100"
            height="100"
          />
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
