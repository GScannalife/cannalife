import Link from "next/link";
import Seo from "../../components/common/Seo";
import HowToStartBlock from "../../components/home-page/HowToStartBlock";
import CallToActions from "../../components/home-page/CallToActions";
import Counter from "../../components/home-page/Counter";
import CopyrightFooter from "../../components/home-page/CopyrightFooter";

import DefaulHeader from "../../components/header/DefaulHeader";
import AppBanner from "../../components/home-page/AppBanner";
import Block from "../../components/home-page/Block";
import LogoGroup from "../../components/home-page/LogoGroup";
import Feature from "../../components/home-page/Feature";
import Hero from "../../components/home-page/Hero";
import Service from "../../components/home-page/Service";
import WhyChoose from "../../components/home-page/WhyChoose";
import { SpeedInsights } from "@vercel/speed-insights/next";

const CannaLife = () => {
  return (
    <>
     <SpeedInsights /> {/* Add SpeedInsights component */}
     
      <Seo pageTitle="NJ Premium Cannabis Cultivator & Dispensary" description={"Upcoming cannabis cultivator and dispensary located in Northern NJ. We provide premium cannabis products at affordable prices. Locally owned."} keywords={"cannabis nj, premium cannabis, north jersey dispensary"} />

      {/* <!-- Header --> */}
      <DefaulHeader />

      {/* <!-- Main Banner --> */}
      <Hero /> 


     {/* <!-- What Sets us Apart--> */}
      <div className="fancy-feature-thirtyFour mt-200">
        <div className="container">
          <div className="row gx-xxl-5">
          <div className="text-center">
            <h1 class="hero-heading fw-500 tx-dark">What Makes Us Unique</h1>
           
     </div>
            <Feature />
                       
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.fancy-feature-thirtyFour --> */}
      {/*
			=====================================================
				Feature Section Thirty Five
			=====================================================
			*/}
<CallToActions />
<div className="partner-section-two position-relative mt-225 mb-250 md-mt-120 md-mb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-data-aos="fade-right">
              <div className="title-style-four">
                <div className="sc-title-two" style={{ color: "#6A45FF" }}>
                  Stay Connected
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Social Media
                </h2>
              </div>
              {/* /.title-style-four */}
              <p className="fs-20 pt-30 pe-xxl-5">
              Follow for updates, exclusive content, and a behind-the-scenes look at opening a new dispensary in NJ.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
          <LogoGroup />
        </div>
        <img
          src="/images/shape/shape_49.svg"
          alt="logo"
          className="lazy-img shapes shape-one"
        />
  
        <img
          src="/images/shape/shape_51.svg"
          alt="logo"
          className="lazy-img shapes shape-three"
        />
      </div>


      {/* /.fancy-feature-thirtyFive */}
      {/* 
			=============================================
				Feature Section Thirty Six
			============================================== 
			*/}
      <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                  data-aos="fade-right">
                  <h2 className="main-title fw-500 tx-dark m0">
                      Cannabis Products
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Service />
            </div>
            {/* /.row */}

            {/* 
            <div className="text-center md-mt-50">
              <Link
                href="/pages-menu/service-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View All Products
              </Link>
            </div> */}


          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySix */}
      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Trust.</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                  Why Us?
                  </h2>
                </div>
                <WhyChoose />
                {/* /.accordion-style-five */}
              </div>
            </div>
            {/* End .col-6 */}

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      <HowToStartBlock />
      <div className="fancy-feature-twenty mt-3 lg-mt-20">


        <div className="wrapper mt-60 lg-mt-10">
          <div className="container">
            <div className="row justify-content-center">
              <Counter />
            </div>
          </div>
        </div>
        {/* /.wrapper */}
      </div>

  
      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtyEight */}
     
      {/*
			=====================================================
				Footer
			=====================================================
			*/}

<div class="footer-style-nine theme-basic-footer zn2 position-relative">
<CopyrightFooter /></div>
   
      {/* /.footer-style-ten */}
    </>
  );
};

export default CannaLife;
