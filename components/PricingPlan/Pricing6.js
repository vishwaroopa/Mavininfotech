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
                    <i className="ri-shopping-cart-line"></i> 
                  </h3>
                </div>
                <div className="price">
                  eCommerce App Development
                </div>
                <div><p>We create effective B2B & B2C eCommerce mobile apps that help you connect with customers in a more engaging way. We craft eCommerce mobile apps that offer easy navigation, seamless checkout, fast speed, and awe-inspiring UI/UX design.</p></div><br/>

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
                 Multi-Store Management
                </div>
                <div>
                <p>
Our developers are specialized in creating high-end eCommerce multi-stores. We simplify eCommerce management at the enterprise level by creating feature-rich multi-stores for companies that manage more than one brand.
                </p>
                </div>
                <br/>

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
                  CMS Integration
                </div>
                <div>
                <p>
We work with various open-source eCommerce platforms like OpenCart, Zen Cart, osCommerce, Magento, WordPress+WooCommerce, and other CMS like Shopify to build a fully-functional eCommerce website.
                </p><br/>
                </div><br/>
              </div>

            </div>  


     <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-settings-line"></i> 
                  </h3>
                </div>
                <div className="price">
                 Migration & Upgrade
                </div>
                <div>
                <p>
We help you migrate your eCommerce website to another platform without any data loss. We also help you upgrade your website to the latest version of a platform and ensure that your data and custom functionality remain intact while upgrading or migrating your site.
                </p>
                </div>
                <br/>

              </div>

            </div>

      <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-paypal-line"></i> 
                  </h3>
                </div>
                <div className="price">
                  Third-party API Integration
                </div>
                <div>
                <p>
Our developers can integrate third-party APIs like PayPal, FedEx, QuickBooks, Google Analytics API, etc that provide ease of performing various operations on your eCommerce website. We ensure to integrate third-party APIs with utter proficiency.
                </p>
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
