import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import Pricing from "@/components/PricingPlan/Pricing8";
import OurExpertise from "@/components/About/OurExpertise";
import Cta from '@/components/Common/Cta';
import Footer from "@/components/Layout/Footer/Footer";

export default function CaseStudy() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="SHOPIFY DEVELOPMENT" homeText="Home" homeUrl="/" />

 <Pricing />
       <TestimonialStyle2 />


       <Cta />

      <Footer />
    </>
  );
}
