import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/mavin-logo.svg" alt="Mavin Info Tech" />
                    </a>
                  </Link>
                </div>
                <p>
                  Mavin InfoTech was setup to leverage the "Proven India Advantage" in delivering low cost IT software services with a guarantee of Quality with Speed.
                </p>
                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/pages/Mavin-Infotech/135556656509121"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/pages/Mavin-Infotech/135556656509121"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://in.linkedin.com/in/mavininfotech"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Useful Link</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/content/who-are-we">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/3-pl-erp/">
                      <a>ERP</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/contract-staffing/">
                      <a>Contract Staffing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/jobs/">
                      <a>Jobs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Our Services</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/content/website-design-and-development/">
                      <a>Web Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/ecommerce-1/">
                      <a>Ecommerce Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/seo-services/">
                      <a>SEO Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/content/mobile-application-development/">
                      <a>Mobile App Development</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact Info</h3>

                <ul className="footer-information">
                  <li>
                    <i className="ri-map-pin-line"></i>
                    Block # 304 & 305, Bhanu Arcade, Opp. Hi-Tech theater, Madhapur, Hyderabad-500081, Telangana, India.
                  </li>
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href="tel:91-9963-197111">+91-9963-197111</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:info@mavininfotech.com">info@mavininfotech.com</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:augustine@mavininfotech.com">augustine@mavininfotech.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright 2003 - {currentYear}  <a
                  href="https://mavininfotech.com/"
                  target="_blank"
                  rel="noreferrer"
                >Mavin Infotech</a> - D-U-N-S # 828400320 {' '}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
