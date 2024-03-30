import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title1 ">
            <h2>MOBILE APPLICATION DEVELOPMENT<br/></h2>
            <p>Companies operating in a dynamic business environment are incessantly caught in a vortex of ever-changing market pressures and customer needs. To stay competitive, businesses have to make their systems more responsive by investing in time and cost-effective applications that help them address functional gaps and achieve business goals. Besides packaged software, businesses also require custom-built solutions to accommodate specific business needs and operational requirements.</p>
          <br/></div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-computer-line"></i> 
                  </h3>
                </div>
                <div className="price">
                  Android Apps Development
                </div>
                <div><p>Our Android developers are adept at fulfilling the diverse set of business requirements. They have brilliantly developed numerous custom Android apps for a mix of industry verticals in the least possible time. They know the art of developing applications that shine and stand apart from others.</p></div><br/>

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
                 eCommerce Web Development
                </div>
                <div>
                <p>
We can develop full-scale e-commerce websites and multi-vendor marketplaces (B2B and B2C) using CMS/Platforms like Magento, WordPress+WooCommerce, BigCommerce, Shopify, osCommerce, and more. We integrate top security features, right plugins/extensions, and add the best functionality to your e-commerce website or application.                </p>
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
                 CMS Based Websites
                </div>
                <div>
                <p>
Having an in-depth technical knowledge of various open-source content management systems like WordPress, Drupal, Joomla, Magento, etc, we can build cutting-edge CMS based websites for different types of businesses. Our developers can help choose the best CMS for your website and build the right solution that meets your expectations.                </p>
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
