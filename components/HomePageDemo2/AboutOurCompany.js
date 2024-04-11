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
                <span>ABOUT MAVIN INFOTECH</span>
                <h3>
                  We bring global best practices and resources to customers across industry verticals around the world.

                </h3>
                <p>
                  Mavin Infotech delivers high quality, reliable and cost-effective IT services to customers globally. We provide world-class technology services by constantly exploring and implementing innovative solutions that drive long-term value to our customers. As industry leaders, we introduced offshore development centers, pioneered "follow the sun" development and support frameworks, ensuring compressed delivery timeframe.
                </p>
                <div className="about-btn">
                  <Link href="/content/who-are-we">
                    <a className="default-btn">Learn More</a>
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

export default AboutOurCompany;
