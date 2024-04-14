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
                  <i className="ri-youtube-fill"></i>
                </div>
                <h3>
                    CREATE CUSTOMIZED YOUTUBE CHANNEL
                </h3>
                <p>
We are the only resource who can quickly grasp your YouTube video promotion requirements and create a customized channel which gives you marketing experience with entertainment feel.
                  </p>
               <br/>
              </div>
            </div>
                    <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-two">
                  <i className="ri-group-fill"></i>
                </div>
                <h3>
                    CONTENT & AUDIENCE TARGETING
                </h3>
                <p>
YouTube video content targeting is the most crucial activity comes under YouTube promotion service which we do to manage YouTube channel and target audience.
                </p>
               
              </div>
            </div>

                   <div className="col-lg-4 col-md-6">
              <div className="single-services-card">
                <div className="icon color-two">
                  <i className="ri-star-fill"></i>
                </div>
                <h3>
                    GENERATE KEYWORDS & TITLES
                </h3>
                <p>
Mavin Infotech helps you bring you or your brand in limelight by creating strong and competitive keywords & titles for your video.
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
