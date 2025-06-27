import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-information-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Contact Information</span>
            <h2>WE'D LOVE TO HEAR FROM YOU</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <h3>India Office and Development Center:</h3>
                <p><i className="ri-map-pin-line"></i>C/O: WeWork RMZ Spire, Madhapur, RMZ Spire, C9MM+5QX, Silpa Gram Craft Village, HITEC City, Hyderabad, Hyderabad, TS 500081</p>
                <p><i className="ri-mail-line"></i><a href="mailto:info@mavininfotech.com">info@mavininfotech.com</a><br/>D-U-N-S # 828400320</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <h3>Bangalore Office and Development Center:</h3>
                <p><i className="ri-map-pin-line"></i>CoWrks, RMZ Ecoworld, Building 6A, The Bay, Outer Ring Road, Bellandur, Bengaluru-560103, Karnataka, India.</p>
                <br/><br/>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <h3>Australia Office:</h3>
                <p><i className="ri-user-line"></i>Garfield Vijay (Project Manager)<br/>
                 <i className="ri-map-pin-line"></i>10 Anderson ct Endeavour hills Vic-3802.<br/><br/>
                  <i className="ri-phone-line"></i><a href="tel:+61 448278886">+61 448278886</a> <br />
                  <a href="mailto: vijay.garfield@mavininfotech.com"><i className="ri-mail-line"></i>vijay.garfield@mavininfotech.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <h3>Sales & Support:</h3>
                <p><i className="ri-user-line"></i>Augustine R.<br/><br/><br/><br/>
                  <i className="ri-phone-line"></i><a href="tel: +91-9963-197111"> +91-9963-197111</a> <br />
                  <i className="ri-phone-line"></i><a href="tel:  +1 (312) 265 6214"> +1 (312) 265 6214</a>
                  <a href="mailto: augustine@mavininfotech.com"><i className="ri-mail-line"></i>augustine@mavininfotech.com</a> <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
