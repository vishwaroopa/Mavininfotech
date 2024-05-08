import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title1 ">
            <h2>UI/UX DEVELOPMENT<br/></h2>
            <p>Mavin Infotech's User Experience (UX) CoE's mission is to enhance user experience by partnering with clients and users. We are therefore equipped with the skills to achieve the highest standards of User Experience Management (UXM) with optimal usable solutions</p>
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
                  Customized Web Design Services
                </div>
                <div><p>We build a prototype of your project by analyzing your project requirements and render amazing web designing solutions. Our highly skilled designers offer scalable solutions in close sync with the specific business needs.</p></div><br/>

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
                 eCommerce App Design 
                </div>
                <div>
                <p>
We have hands-on working experience in building feature-enriched eCommerce apps to provide a user-friendly experience. Our app designs are functional that will enhance the engagement rate to a great extent.
                </p><br/>
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
                 Web Design Services
                </div>
                <div>
                <p>
We are inclined towards building a web design that will aid businesses to connect with their target customers better. Our amazing web designs have the potential to extend your business reach easily.
</p>                </div><br/>
              </div>

            </div>

                        
     
        </div>
      </div>
       </div>
    </>
  );
};

export default Pricing;
