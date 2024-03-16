import React from "react";

const FunFactStyle3 = () => {
  return (
    <>
      <div className="fun-fact-area bg-three pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Our Funfact</span>
            <h2>Working Together To Create Something Unique</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-box">
                <div className="icon">
                  <i className="ri-user-line"></i>
                </div>
                <h3>
                  1,286 <span className="small-text">+</span>
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-box">
                <div className="icon">
                  <i className="ri-stack-line"></i>
                </div>
                <h3>
                  1,584 <span className="small-text">+</span>
                </h3>
                <p>Total Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-box">
                <div className="icon">
                  <i className="ri-global-line"></i>
                </div>
                <h3>
                  1,288 <span className="small-text">+</span>
                </h3>
                <p>Worldwide Partner</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact-box">
                <div className="icon">
                  <i className="ri-star-line"></i>
                </div>
                <h3>
                  1,475 <span className="small-text">+</span>
                </h3>
                <p>Positive Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactStyle3;
