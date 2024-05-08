import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import CaseStudyDetailsContent from "@/components/CaseStudy/CaseStudyDetailsContent";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function CaseStudyDetails() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Case Study Details" homeText="Home" homeUrl="/" />

      <CaseStudyDetailsContent />

      <Cta />

      <Footer />
    </>
  );
}
