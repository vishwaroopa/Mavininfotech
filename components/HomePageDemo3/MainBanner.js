import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-wrap-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-wrap-content">
                <span
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  Creative Digital Agency
                </span>
                <h1
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Building Brands With Purpose And Passion
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="580"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-right"
                  data-aos-delay="90"
                  data-aos-duration="900"
                  data-aos-once="true"
                >
                  <Link href="/contact">
                    <a className="default-btn">Get A Quote</a>
                  </Link>
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
              <div
                className="main-banner-wrap-image"
              >
                <img src="/images/main-banner/banner-4.png" alt="Teza" />

                <div
                  className="banner-wrap-shape-1"
                >
                  <img
                    src="/images/main-banner/shape-1.png"
                    alt="Teza"
                    data-aos="fade-down"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  />
                </div>
                <div
                  className="banner-wrap-shape-2"
                >
                  <img
                    src="/images/main-banner/shape-2.png"
                    alt="Teza"
                    data-aos="fade-up"
                    data-aos-delay="90"
                    data-aos-duration="900"
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

export default MainBanner;
