import Link from "next/link";
import Seo from "../components/common/Seo";
import Image from "next/image";
import DefaulHeader from "../components/header/DefaulHeader";

const Pricing = () => {
  return (
    <>
      <Seo pageTitle="404 - Page Not Found" />

      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
			=============================================
			Error Page
			============================================== 
			*/}
      <div className="error-page-content d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 m-auto">
              <h3>That&apos;s Embarrasing</h3>
              <p className="me-xxl-5 ms-xxl-5 pt-15 pb-20">
              The page you&apos;re looking for no longer exisits. Let&apos;s get you back to the homepage.
              </p>
              <Link href="/" className="btn-twentyOne fw-500 tran3s">
                Back to home
              </Link>
            </div>
          </div>
          
        </div>
        {/* End .container */}


      </div>
      {/* /.error-page-content */}
    </>
  );
};

export default Pricing;
