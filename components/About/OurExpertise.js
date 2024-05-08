import React from "react";

const OurExpertise = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-content"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>Our Expertise</span>
                <h3>
                  Boost Business With Creative Idea & Brand Solutions With Us
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor sit amet consectetur adipiscing elit et fames
                  maecenas amet.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="inner-box-content">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div>
                      <h4>Boost Your Sale</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        in pretium blandit urna.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="inner-box-content">
                      <div className="icon">
                        <i className="ri-focus-2-line"></i>
                      </div>
                      <h4>Idea & Analysis</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        in pretium blandit urna.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-image"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src="/images/why-choose-us/choose-1.jpg" alt="Teza" />

                <div className="why-choose-us-shape-1">
                  <img src="/images/why-choose-us/shape-1.png" alt="Teza" />
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
