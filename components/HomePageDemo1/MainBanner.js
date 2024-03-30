import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-5 col-md-12"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="main-banner-content">
                <span>Creative Digital Agency</span>
                <h1>Create Your Experience With Us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit.
                </p>
                <div className="banner-btn">
                  <Link href="/contact">
                    <a className="default-btn">Get A Quote</a>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-7 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper main-banner-image-slides"
              >
                <SwiperSlide>
                  <div className="slides-image-item">
                    <div
        className="main-hero-area"
        style={{ backgroundImage: `url("/images/html-system-website-concept.jpg")` }}
      >
        <div className="container-fluid">
          <div className="main-hero-content">
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
             Software Development Company
            </span>
            <h1
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Global Knowledge. Local Support.
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              We bring global best practices and resources to customers across industry verticals around the world.

            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/contact">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="main-hero-shape-1">
          <img src="/images/main-hero/shape-1.png" alt="Teza" />
        </div>
        <div className="main-hero-shape-2">
          <img src="/images/main-hero/shape-2.png" alt="Teza" />
        </div>
      </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slides-image-item">
                    <img
                      src="/images/main-banner/banner-2.jpg"
                      alt="Banner Img 2"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slides-image-item">
                    <img
                      src="/images/main-banner/banner-3.jpg"
                      alt="Banner Img 3"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="main-banner-shape-1">
          <img src="/images/main-banner/shape-1.png" alt="Shape 1" />
        </div>
        <div className="main-banner-shape-2">
          <img src="/images/main-banner/shape-2.png" alt="Shape 2" />
        </div>
        <div className="main-banner-bg-text">Teza</div>
      </div>
    </>
  );
};

export default MainBanner;
