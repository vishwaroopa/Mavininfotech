import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>OUR ECOMMERCE WEBSITE DEVELOPMENT SERVICES</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-computer-line"></i> 
                  </h3>
                </div>
                <div className="price">
                  eCommerce App Development
                </div>
                <div><p>We create effective B2B & B2C eCommerce mobile apps that help you connect with customers in a more engaging way. We craft eCommerce mobile apps that offer easy navigation, seamless checkout, fast speed, and awe-inspiring UI/UX design.</p></div><br/>
<div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Learn More</a>
                  </Link>
                </div>
              </div>

            </div>

     <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-group-line"></i> 
                  </h3>
                </div>
                <div className="price">
                 ERP / CRM
                </div>
                <div>
                <p>
                Mavin delivers the proven, comprehensive financial management capabilities required to grow a changing, complex business for small and medium businesses.
                </p>
                </div>
                <br/>
<div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Learn More</a>
                  </Link>
                </div>
              </div>

            </div>

      <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-file-line"></i> 
                  </h3>
                </div>
                <div className="price">
                  Doc / File Management
                </div>
                <div>
                <p>
                Access, store and share your files anytime and anywhere . We have built our solutions on state of the art technology using Microsoft.
                </p>
                </div><br/>
<div className="pricing-btn">
                  <Link href="/contact">
                    <a className="default-btn">Learn More</a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
