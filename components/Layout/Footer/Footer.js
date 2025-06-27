import React, { useState } from 'react';
import Link from "next/link";
import Popup from './Popup';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

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
                      <img src="/images/logo (1).png" alt="Mavin Info Tech" />
                    </a>
                  </Link>
                </div>
                <p>
                  Mavin InfoTech was setup to leverage the "Proven India Advantage" in delivering low cost IT software services with a guarantee of Quality with Speed.
                </p><br/>
                <p class="ptext1">© Copyright 2003 - {currentYear}  <a
                  href="https://mavininfotech.com/"
                  target="_blank"
                  rel="noreferrer"
                >Mavin Infotech</a> </p>
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
                    C/O: WeWork RMZ Spire, Madhapur, RMZ Spire, C9MM+5QX, Silpa Gram Craft Village, HITEC City, Hyderabad, Hyderabad, TS 500081
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
          <div className="container1">
            <div className="copyright-area-content">
              <p>
              <span class="lock">
                <img alt="Login" onClick={openPopup} src="/images/login-icon.png" />
                
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
                </span>
                <span class="foot-imgs">
                <b >D-U-N-S # 828400320</b>
                <a class="footer_ariba" href="http://discovery.ariba.com/profile/AN01012782156" target="_blank">
                <img alt="View Mavin Infotech profile on Ariba Discovery"  src="/images/Ariba_badge_180x55.jpg" />
                </a>
                <a class="footer_cert" href="/images/10sb.jpg" target="_blank">
                <img alt="Certification" class="sigimg" src="/images/sig_img1.png" title="10KSB" />
                </a>
                <a class="footer_cert" href="/images/weconnect.png" target="_blank">
                <img alt="WE CONNECT" class="sigimg" src="/images/sig_img2.png" title="WE CONNECT" />
                </a>
                <a class="footer_cert" href="http://msmehyd.ap.nic.in/" target="_blank">
                <img alt="MSME" class="sigimg" src="/images/sig_img3.png" title="MSME" />
                </a>
                <a class="footer_cert" href="/images/iso.jpg" target="_blank">
                <img alt="ISO 9001:2008 CERTIFED" class="sigimg" src="/images/sig_img4.png" title="ISO 9001:2008 CERTIFED" />
                </a>
                </span>
  </p>
            </div>
          </div>
        </div>
      
      </footer>
    </>
  );
};

export default Footer;
