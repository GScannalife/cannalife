import Link from "next/link";
import React from "react";


const HowToStartBlock = () => {
  return (
    <div className="fancy-feature-fortyThree bg-black position-relative pt-130 pb-65 lg-pt-80">
      <div className="container">
        <div className="row ">
          <div
            className="col-xl-5 col-md-6 ms-auto order-md-last"
            data-aos="fade-right"
          >
            <div className="title-style-one mb-30">
              <h2 className="main-title fw-500 text-white m0">
                Large-Scale Cultivation Operation
              </h2>
            </div>
            <p className="fs-20 text-white opacity-75 mb-50 md-mb-30">
            <strong>Cultivation Center:</strong> 25k square feet <br></br>
            <strong>Canopy Size:</strong> 17k square feet <br></br>
            <strong>Plants:</strong> 3k-5k / Harvest <br></br>
            <strong>Output:</strong> 1,800 Pounds / Year <br></br></p>  
    

          </div>
          {/* End .col */}

          <div className="col-md-6 order-md-first" data-aos="fade-left">
            <img
              src="images/media/cannabis-grow.jpg"
              alt="media"
              className="lazy-img sm-mt-40"
            />
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default HowToStartBlock;
