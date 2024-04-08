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
<div class="page-banner-area1"><div class="col-md-12"><iframe frameborder="0" width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3236222837354!2d78.38882757669889!3d17.444217998136647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915e148b1e5f%3A0x46546dd9b6691d!2sMavin+Infotech!5e0!3m2!1sen!2sin!4v1413445956436"></iframe></div></div>

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
