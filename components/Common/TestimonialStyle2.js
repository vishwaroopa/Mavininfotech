import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const TestimonialStyle2 = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className="testimonials-box-content">
                <span>Our Review</span>
                <h3>Top Google Reviews</h3>
                <p>
                  Insights, Experiences, and Perspectives from Our Valued Customers/Employees
                </p>
                <Link href="/testimonials">
                  <a className="default-btn">View More</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                pagination={{
                  clickable: true,
                }}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  }
                }}
                modules={[Pagination]}
                className="mySwiper testimonials-slides-two"
              >
                <SwiperSlide>
                  <div className="single-testimonials-card">
                    <div className="box-content">
                      <div className="icon">
                        <i className="flaticon-straight-quotes"></i>
                      </div>
                      <p>
                        One of the best IT services company we have worked with.  We have worked/outsourced multiple projects to Mavin Infotech and have got the best ROI.  

                      </p>
                    </div>

                    <div className="info">
                      <div className="d-flex align-items-center justify-content-start">
                        
                        <div className="title">
                          <h3>Mike Cohen</h3>
                          <span>CLIENT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-card">
                    <div className="box-content">
                      <div className="icon">
                        <i className="flaticon-straight-quotes"></i>
                      </div>
                      <p>
                        Mavin Infotech was brought in at a critical time, when deadlines and working under strict budget was the need for our survival. And really I'm glad for their dedication.
                      </p>
                    </div>

                    <div className="info">
                      <div className="d-flex align-items-center justify-content-start">
                     
                        <div className="title">
                          <h3>Theresa</h3>
                          <span>Director</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>

        <div className="testimonials-shape-1">
          <img src="/images/testimonials/shape-1.png" alt="Teza" />
        </div>
      </div>
    </>
  );
};

export default TestimonialStyle2;
