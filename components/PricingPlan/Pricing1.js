import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title1 ">
            <h2>WEBSITE DESIGN & DEVELOPMENT<br/></h2>
            <p>Mavin Infotech is a reliable website design & development company, we design and develop high-grade websites that provide a visually appealing and interactive web experience. Working with the latest web technologies and tools, we build websites with high performance and security. Our developers create diverse Web Development solutions from websites to complex enterprise web applications.</p>
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
                  Web App Development
                </div>
                <div><p>Our custom website design & development company turns your ideas into reality. It is our core competency and we focus on providing a robust Website Development Services that meet clients' needs and fulfills all the business requirements. Whether it's about third-party API integration or custom business application, our developers are apt at providing tailored solutions.</p></div><br/>

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
