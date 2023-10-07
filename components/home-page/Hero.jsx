import Image from "next/image";
import React from "react";
import SubscribeForm from "../subscribe/SubscribeForm";
import { auto } from "@popperjs/core";


const Hero1 = () => {
  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <div><img style={{margin: "0 auto"}} src="images/cannalife-icon.svg" width={90}></img></div>
            <h1 className="hero-heading fw-500 tx-dark">
              NJ Premium Cannabis
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Coming Soon to Northern NJ
            </p>
          
            {/* End form */}

       
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={487}
        height={649}
        src="/images/assets/ils_11.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
        layout="intrinsic"
      />
      <Image
        width={537}
        height={658}
        src="/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
        layout="intrinsic"
      />
    </div>
  );
};

export default Hero1;
