import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const FunFactStyle2 = () => {
  return (
    <>
      <div className="fun-fact-area bg-two pt-75 pb-75">
        <div className="container">
          <div className="row justify-content-center">
           <Swiper
                spaceBetween={40}
                slidesPerView={5}
                loop={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper main-banner-image-slides"
              >
                <SwiperSlide>
                    <div className="logos_div">
    <img src="/images/1.png" />
      </div>

      
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="logos_div">
    <img src="/images/3.png" />
      </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="logos_div">
    <img src="/images/Webp-removebg-preview.png" />
      </div>
                </SwiperSlide>
                  <SwiperSlide>
                    <div className="logos_div">
    <img src="/images/5.png" />
      </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className="logos_div">
    <img src="/images/6.png" />
      </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className="logos_div">
    <img src="/images/7.png" />
      </div>
                </SwiperSlide>
                </Swiper>
            
          </div>
        </div>

          
      </div>
    </>
  );
};

export default FunFactStyle2;
