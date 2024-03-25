import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
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
    </>
  );
};

export default MainBanner;
