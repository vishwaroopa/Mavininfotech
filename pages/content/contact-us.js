import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Layout/Footer/Footer";

export default function Contact() {
  return (
    <>
      <NavbarStyle2 />
<div class="page-banner-area1"><div class="col-md-12"><iframe frameborder="0" width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30452.39014750902!2d78.36438443071225!3d17.433429383461622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3bcb915e6616ae59%3A0xd5c2c8e5b1a23088!2s5th%20Floor%2C%20WeWork%20RMZ%20Spire%2C%20RMZ%20Spire%2C%20Silpa%20Gram%20Craft%20Village%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana!3m2!1d17.4334383!2d78.3850053!4m5!1s0x3bcb91fd5092a709%3A0x62dd7e828bcee686!2sRMZ%20Spire%2C%20C9MM%2B9X9%2C%20Silpa%20Gram%20Craft%20Village%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!3m2!1d17.4334031!2d78.3849963!5e0!3m2!1sen!2sin!4v1751016956438!5m2!1sen!2sin"></iframe></div></div>

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
