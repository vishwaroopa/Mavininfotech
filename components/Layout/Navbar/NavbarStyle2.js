import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarStyle2 = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top navbar-style-two">
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/images/logo (1).png"
                    alt="Black logo"
                    className="black-logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
         
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      ABOUT US <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/who-are-we" activeClassName="active">
                          <a className="nav-link">Who Are We?</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/what-we-do" activeClassName="active">
                          <a className="nav-link">What We do?</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      SERVICES <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/website-design-and-development" activeClassName="active">
                          <a className="nav-link">Website Design & Development</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/mobile-application-development" activeClassName="active">
                          <a className="nav-link">Mobile Application Development</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/ui-ux-development" activeClassName="active">
                          <a className="nav-link">UI/UX Development</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/ai-services" activeClassName="active">
                          <a className="nav-link">AI Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/cloud-services" activeClassName="active">
                          <a className="nav-link">Cloud Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a className="nav-link">
                        TALENT SERVICES <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/talent-solutions" activeClassName="active">
                          <a className="nav-link">Talent Solutions</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/contract-staffing" activeClassName="active">
                          <a className="nav-link">Contract Staffing</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/direct-hire" activeClassName="active">
                          <a className="nav-link">Direct Hire</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/executive-search" activeClassName="active">
                          <a className="nav-link">Executive Search</a>
                        </Link>
                      </li>

                     
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      PRODUCTS <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/3-pl-erp" activeClassName="active">
                          <a className="nav-link">3PL ERP</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/erp-1"
                          activeClassName="active"
                        >
                          <a className="nav-link">ERP</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/crm"
                          activeClassName="active"
                        >
                          <a className="nav-link">CRM</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/instafile-document-management"
                          activeClassName="active"
                        >
                          <a className="nav-link">Instafile Document Management</a>
                        </Link>
                      </li>
                       <li className="nav-item">
                        <Link
                          href="/content/mobile-device-management-mdm"
                          activeClassName="active"
                        >
                          <a className="nav-link">Mobile Device Management (MDM)</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/insta-training"
                          activeClassName="active"
                        >
                          <a className="nav-link">InstaTraining</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/healthcare"
                          activeClassName="active"
                        >
                          <a className="nav-link">Healthcare</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      DIGITAL MARKETING <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/seo-services" activeClassName="active">
                          <a className="nav-link">SEO Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/content-marketing"
                          activeClassName="active"
                        >
                          <a className="nav-link">Content Marketing</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/social-media-marketing" activeClassName="active">
                          <a className="nav-link">Social Media Marketing</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/facebook-marketing-services" activeClassName="active">
                          <a className="nav-link">Facebook Marketing Services</a>
                        </Link>
                      </li>
                       <li className="nav-item">
                        <Link href="/content/youtube-marketing-services" activeClassName="active">
                          <a className="nav-link">Youtube Marketing Services</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
   <li className="nav-item">
                    <a href="#" className="nav-link">
                      ECOMMERCE <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/ecommerce-1" activeClassName="active">
                          <a className="nav-link">eCommerce Development</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/magento-development"
                          activeClassName="active"
                        >
                          <a className="nav-link">Magento Development</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/shopify-development" activeClassName="active">
                          <a className="nav-link">Shopify Development</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/content/woocommerce-development" activeClassName="active">
                          <a className="nav-link">WooCommerce Development</a>
                        </Link>
                      </li>
                    </ul>
                  </li>   <li className="nav-item">
                    <a href="#" className="nav-link">
                      WORK WITH US <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/content/jobs" activeClassName="active">
                          <a className="nav-link">Current Vacancies</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/content/submit-resume"
                          activeClassName="active"
                        >
                          <a className="nav-link">Submit Resume</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                 
                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
            
 
                <div className="option-item">
                  <Link href="/content/contact-us">
                    <a className="default-btn">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyle2;
