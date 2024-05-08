import React from "react";
import Link from "next/link";

const AboutOurCompany = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-wrap">
                <img
                  src="/images/Group_of_People_0053047a43.png"
                  alt="About Image"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <img
                  src="/images/about/about-3.jpg"
                  alt="About Image"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <div
                  className="about-shape-3"
                >
                  <img src="/images/about/shape-1.png" alt="Shape" />
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>What We Do</span>

                <p>
Mavin Infotech delivers high quality, reliable and cost-effective IT services to customers globally. We provide world-class technology services by constantly exploring and implementing innovative solutions that drive long-term value to our customers.
<br/><br/>
As industry leaders, we introduced offshore development centers, pioneered "follow the sun" development and support frameworks, ensuring compressed delivery timeframes.
<br/><br/>
Today, our solutions provide strategic advantage to several most-admired organizations in the world. We have long-standing and vibrant partnerships with over 30 companies across the globe.
<br/>
</p>
           
               
              </div>


            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
