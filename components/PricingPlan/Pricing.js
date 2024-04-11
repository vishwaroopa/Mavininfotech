import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>OUR PRODUCTS</span>
            <h2>Explore Our Range</h2>
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
                  3PL ERP
                </div>
                <div><p>Mavin provides a resource network that provides advantages for in-house processes. Mavin 3PL ERP eliminates the need to invest in staff to execute the logistics processes.

</p></div><br/>
<div className="pricing-btn">
                  <Link href="/content/3-pl-erp/">
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
                  <Link href="/content/erp-1/">
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
                  <Link href="/content/instafile-document-management/">
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
