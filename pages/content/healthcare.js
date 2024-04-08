import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import AboutOurCompany from "@/components/HomePageDemo2/AboutOurCompany9";
import FunFactStyle3 from "@/components/Common/FunFactStyle2";
import OurExpertise from "@/components/HomePageDemo2/OurExpertise";
import WorkingProcess from "@/components/About/WorkingProcess";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Layout/Footer/Footer";
import Pricing from "@/components/PricingPlan/Pricing";

export default function About() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="HEALTHCARE" homeText="Home" homeUrl="/" />

      <AboutOurCompany />

   <Pricing />

      <Faq />

      <Footer />
    </>
  );
}
