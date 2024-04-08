import React from "react";
import Link from "next/link";

const OurServices = () => {
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          
          <div className="row justify-content-center">
           <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-two">
                  <i className="ri-codepen-fill"></i>
                </div>
                <h3>
                    FACEBOOK CAMPAIGN MANAGEMENT
                </h3>
                <p>
Spread your business by making it more enhanced, attractive and engaged with our professionally offered Facebook campaign management which brings the active audience to the service page.
                  </p>
               <br/>
              </div>
            </div>
                    <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-two">
                  <i className="ri-codepen-fill"></i>
                </div>
                <h3>
                    USER ENGAGEMENT
                </h3>
                <p>
Without user engagement, business promotion cannot cross the market hurdles. We at this point help you widen your horizons and allow your business get engaged with customers.
                </p>
               
              </div>
            </div>

                   <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-two">
                  <i className="ri-codepen-fill"></i>
                </div>
                <h3>
                    INCREASED CONVERSION RATES
                </h3>
                <p>
By Initiating the service of Facebook paid advertising, we open up the doors for entrepreneurs to grow their sales with the help of high conversion rates
                  </p>
               <br/>
              </div>
            </div>


           
                    </div>  

         
        </div>
      </div>
    </>
  );
};

export default OurServices;
