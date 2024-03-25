import React from "react";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area-with-white-color pb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-content black-color"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>What we provide?</span>
                <h3>
                  IT Staffing & Consulting
                </h3>
                <p>
                  At Mavininfotech, we specialize in providing comprehensive IT staffing and consulting solutions tailored to meet the evolving needs of businesses in the digital age. With a team of seasoned professionals and a deep understanding of the IT landscape, we offer unparalleled expertise to support your organization's growth and success.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div>
                      <h4>Cost Optimization</h4>
                      <p>
Our experts analyze your IT spending and identify opportunities for cost reduction and efficiency improvement.                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-focus-2-line"></i>
                      </div>
                      <h4>Technical Assessments</h4>
                      <p>
                        We conduct thorough technical assessments to evaluate candidates' skills and proficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-image-wrap"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src="/images/expertise/expertise-2.png" alt="image" />

                <div className="expertise-shape-2">
                  <img
                    src="/images/expertise/shape-2.png"
                    alt="image"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
