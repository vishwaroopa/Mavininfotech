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
              <div className="col-lg-5 col-md-12 text-end">
                <Link href="/case-study">
                  <a className="default-btn">View More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-card">
                <Link href="/case-study-details">
                  <a>
                    <img
                      src="/images/la_auto_db9b537562 (1).png"
                      alt="Teza"
                    />
                  </a>
                </Link>
                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>LA AUTO SPOT</a>
                    </Link>

                  </h3>
                  <h4>Car Booking System</h4>
                  <Link href="/case-study-details">
                    <a className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-card">
                <Link href="/case-study-details">
                  <a>
                    <img
                      src="/images/morgan.jpg"
                      alt="Teza"
                    />
                  </a>
                </Link>
                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                                            <a>IT Staffing & Consulting</a>
                    </Link>
                  </h3>
                  <h4>Car Booking System</h4>
                  <Link href="/case-study-details">
                    <a className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

                  <div className="col-lg-4 col-md-6">
              <div className="single-case-study-card">
                <Link href="/case-study-details">
                  <a>
                    <img
                      src="/images/ecospot.png"
                      alt="Teza"
                    />
                  </a>
                </Link>
                <div className="case-study-content">
                  <h3>
                    <Link href="/case-study-details">
                      <a>Ecospot Recycling</a>
                    </Link>
                  </h3>
                  <h4>Recover, Reuse and then Recycle </h4>
                  <Link href="/case-study-details">
                    <a className="case-btn">
                      <i className="ri-arrow-right-line"></i>
                    </a>
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

export default CaseStudy;
