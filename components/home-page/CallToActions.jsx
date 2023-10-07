import Link from "next/link";
import Form from "./Form";

const CallToActions = () => {
  return (
    <div className="fancy-short-banner-one mt-170 lg-mt-120">
      <div className="container">
        <div className="bg-wrapper position-relative" data-aos="fade-up">
          <div className="shapes shape-one" />
          <div className="inner-wrapper">
            <div className="subscribe-area">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <div className="title-style-two">
                    <div className="sc-title fw-500 ">Stay Up-to-Date</div>
                    <h4 className="main-title fw-bold tx-dark">
                        Earn Rewards                   </h4>
                  </div>
                  {/* /.title-style-two */}
                </div>
                {/* End .col */}

                <div className="col-lg-6">
                  <div className="subscribe-form">
                    <Form />
                    <p></p>
                  </div>
                  {/* /.subscribe-form */}
                </div>
              </div>
            </div>
            {/* /.subscribe-area */}
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
    </div>
  );
};

export default CallToActions;
