import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div>
          <div className="row align-items-center justify-content-center">
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <Swiper
                spaceBetween={0}
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
<br/>
            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/content/contact-us">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/content/website-design-and-development/">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="slides-image-item">
                    <div
        className="main-hero-area"
        style={{ backgroundImage: `url("/images/2150389105.jpg")` }}
      >
        <div className="container-fluid">
          <div className="main-hero-content">
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
             IT CONSULTING
            </span>
            <h1
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              IT Staffing & Consulting
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
            Contact to Build Offshore & Onsite Teams<br/><br/>
            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/content/contact-us">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/content/jobs/">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
                  </div>
                </SwiperSlide>
            
 <SwiperSlide>
                  <div className="slides-image-item">
                    <div
        className="main-hero-area"
        style={{ backgroundImage: `url("/images/104964.jpg")` }}
      >
        <div className="container-fluid">
          <div className="main-hero-content">
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
             MAVIN MDM
            </span>
            <h1
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Mobile Device Management
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
            
Monitor your devices, stay in the know.<br/>
Report on anything and everything.

            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/content/contact-us">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/content/mobile-application-development/">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
                  </div>
                </SwiperSlide> 

                <SwiperSlide>
                  <div className="slides-image-item">
                    <div
        className="main-hero-area"
        style={{ backgroundImage: `url("/images/110796.png")` }}
      >
        <div className="container-fluid">
          <div className="main-hero-content">
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
  ERP
            </span>
            <h1
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
              MAVIN 3PL ERP
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
            
Inventory Management<br/>
Carrier API Integration (FedEx, DHL, UPS, USPS)<br/>
Billing and 3PL Invoicing<br/>
Warehouse, Sales, Manufacturing,

            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/content/contact-us">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/content/3-pl-erp/">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
                  </div>
                </SwiperSlide> 

                <SwiperSlide>
                  <div className="slides-image-item">
                    <div
        className="main-hero-area"
        style={{ backgroundImage: `url("/images/12643221_5040007.png")` }}
      >
        <div className="container-fluid">
          <div className="main-hero-content">
            <span
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
  CRM
            </span>
            <h1
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="700"
              data-aos-once="true"
            >
             MAVIN CRM
            </h1>
            <p
              data-aos="fade-right"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
            
Customer Relationship Management<br/>
Integrated with Microsoft outlook & Exchange Server<br/><br/><br/>

            </p>

            <ul
              className="hero-btn"
              data-aos="fade-right"
              data-aos-delay="90"
              data-aos-duration="900"
              data-aos-once="true"
            >
              <li>
                <Link href="/content/contact-us">
                  <a className="default-btn">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/content/crm/">
                  <a className="optional-btn">Learn More</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
                  </div>
                </SwiperSlide> 
                    
              </Swiper>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
};

export default MainBanner;
