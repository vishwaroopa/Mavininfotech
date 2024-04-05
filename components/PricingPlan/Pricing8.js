import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <h2>OUR COMPANY OFFERS IMPECCABLE SHOPIFY DEVELOPMENT SERVICES</h2>
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
                  Shopify Theme Development
                </div>
                <div><p>Our creative Shopify web designer can revamp your website with uniquely good ideas while including responsive and interactive features with exponential Shopify themes. We have a team of proficient UX/UI Shopify web designers who can craft an alluring eCommerce website that is developed with the latest technology.</p></div><br/>

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
                 Shopify Migration
                </div>
                <div>
                <p>
At Mavin Infotech, our eminent Shopify website developer can migrate your existing eCommerce store to Shopify, irrespective of the platform. Worry no more about incompatibilities, complex navigation, inefficient links, and weak elements on your site as our Shopify development company is with you to remove all your business complexities.
                </p>
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
                  Shopify App Development
                </div>
                <div>
                <p>
User experience is enhanced with Shopify's mobile application development. Our professionals make a responsive and enticing app for your eCommerce website. This Shopify application can enhance the abilities of your business and help in its expansion.
                </p><br/><br/>
                </div><br/>
              </div>

            
             

            </div>    
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
