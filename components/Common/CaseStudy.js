import React from "react";
import Link from "next/link";

const CaseStudy = () => {
  return (
    <>
      <div className="case-study-area pt-100 pb-75">
        <div className="container">
          <div className="section-title-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <span>Current Projects</span>
                <h2>
                  Discover Our Ongoing Endeavors
                </h2>
              </div>
            
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-card">
                <a target="_blank"  href="https://autospotrentals.com/">
                    <img
                      src="/images/la_auto_db9b537562 (1).png"
                      alt="Teza"
                    />
                  </a>
                <div className="case-study-content">
                  <h3>
                    <a target="_blank" href="https://autospotrentals.com/">
                    LA AUTO SPOT</a>
                   

                  </h3>
                  <h4>Car Booking System</h4>
                    <a rel="noopener noreferrer" href="https://autospotrentals.com/" target="_blank" className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-card">
                  <a>
                    <img
                      src="/images/morgan.jpg"
                      alt="Teza"
                    />
                  </a>
                <div className="case-study-content">
                  <h3>
                                            <a>IT Staffing & Consulting</a>
                  </h3>
                  <h4>Morgan Stanley</h4>
                    <a className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
              </div>
            </div>

                  <div className="col-lg-4 col-md-6">
              <div className="single-case-study-card">
                <a target="_blank" href="https://www.ecospotrecycling.com/">
                    <img
                      src="/images/ecospot.png"
                      alt="Teza"
                    />
                  </a>
                <div className="case-study-content">
                  <h3>
                    <a target="_blank" href="https://www.ecospotrecycling.com/">
                      Ecospot Recycling</a>
                  </h3>
                  <h4>Recover, Reuse and then Recycle </h4>
                  <a target="_blank"  className="case-btn" href="https://www.ecospotrecycling.com/">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
