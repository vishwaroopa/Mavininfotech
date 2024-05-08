import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-area bg-F9F5F4 pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Get Benefit And More With Our Excelent Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-cast-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Business Strategy</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-cast-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-codepen-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Website Development</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-codepen-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-stack-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Marketing & Reporting</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-stack-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-compass-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Company Branding</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-compass-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-code-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>App Development</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-code-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-computer-line"></i>
                </div>
                <h3>
                  <Link href="/service-details">
                    <a>Web Solution</a>
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consec tetur adip iscing elit non
                  in pretium blandit loremm ipdum pronibh ultrna some.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-computer-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
