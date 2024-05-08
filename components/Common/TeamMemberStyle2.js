import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TeamMemberStyle2 = () => {
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>LATEST PROJECTS/CLIENTS</span>
            <h2>Recent Innovations and Partnerships in Software Development</h2>
          </div>

          <Swiper
            navigation={true}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="mySwiper team-slides-two"
          >
            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/bk_5f4e3cdb42.jpg" alt="Teza" />

                  <ul className="social">
                    <li><h6>Infused with Canadian spring Water</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>BLK Alkaline Mineral Water</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/aci_1_0700a7c6f2.png" alt="Teza" />

                  <ul className="social">
                    <li><h6>Sage X3 Implementation & Support</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>ACI Consulting</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/autodeski_1_d8488baaea.png" alt="Teza" />

                  <ul className="social">
                    <li><h6>IT Staffing & Consulting</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>AUTODESK</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                   <img src="/images/naacp_awards_trophy_6a9d254b90.jpg" alt="Teza" />

                  <ul className="social">
                    <li><h6>International Awards NAACP</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>NAACP Image Awards</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                   <img src="/images/la_auto_db9b537562 (1).png" alt="Teza" />

                  <ul className="social">
                    <li><h6>Car Booking System</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>LA Auto Spot</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/morgan.jpg" alt="Teza" />

                  <ul className="social">
                    <li><h6>IT Staffing & Consulting</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Morgan Stanley</h3>
                </div>
              </div>
            </SwiperSlide>
 <SwiperSlide>
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/ecospot.png" alt="Teza" />

                  <ul className="social">
                    <li><h6>Redcue, Reuse and Recycle</h6></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Ecospot Recycling</h3>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="team-shape-1">
          <img src="/images/team/shape-1.png" alt="Teza" />
        </div>
      </div>
    </>
  );
};

export default TeamMemberStyle2;
