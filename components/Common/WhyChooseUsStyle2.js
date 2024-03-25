import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const WhyChooseUsStyle2 = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="why-choose-us-area-with-video ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-video-view">
                
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-content wrap-color"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>What we do</span>
                <h3>We provide world-class technology services</h3>
                <p>
                  Mavin Infotech delivers high quality, reliable and cost-effective IT services to customers globally. We provide world-class technology services by constantly exploring and implementing innovative solutions that drive long-term value to our customers.
                </p>

                <div className="choose-us-inner-box1"><br/>
                    <ul className="features-list">
                  <li>
                   
                  <h5> <i className="ri-check-line"></i> Custom Software Development</h5></li>
<li>
                    <h5><i className="ri-check-line"></i> IT Consulting /Staffing</h5></li>
<li>
                    <h5><i className="ri-check-line"></i> Web Design & Development</h5></li>
<li>
                    <h5><i className="ri-check-line"></i> Document Management Solutions</h5></li>
<li>
                    <h5><i className="ri-check-line"></i> E-Learning Solutions</h5></li>
<li>
                    <h5><i className="ri-check-line"></i> IT Infrastructure Management</h5></li>
<li>
                   <h5> <i className="ri-check-line"></i> Warehouse Management & ERP Solutions</h5></li></ul>
                </div>

                <div className="choose-us-inner-box">
              
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsStyle2;
