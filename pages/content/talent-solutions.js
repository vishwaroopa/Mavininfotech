import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import CaseStudyCard from "@/components/CaseStudy/CaseStudyCard";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import Pricing from "@/components/PricingPlan/Pricing5";
import OurExpertise from "@/components/About/OurExpertise";
import Cta from '@/components/Common/Cta';
import Footer from "@/components/Layout/Footer/Footer";

export default function CaseStudy() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="TALENT SOLUTIONS" homeText="Home" homeUrl="/" />
 <div className="pricing-area pt-100 pb-75">
        <div className="container">
 <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h2>OUR SERVICES</h2><br/>
                <div><p>The way people work is changing. Between emerging technologies, new methodologies and the rise of the gig economy, the demand for high-caliber talent is at an all-time high. That's where Mavin Infotech comes in.</p>
<p>Our consultants are amazing individuals with talents to share. Our clients are inventors and innovators with a passion for creating products and systems that shape the world. We are here to make the connections that bring great ideas to life.</p>
<p>Mavin Infotech offers several ways to bring talent and opportunities together. Are you looking for people with the skills, passion and vision to bring your ideas to life? We've got you covered. Are you a consultant who wants to further your career while working on something meaningful?    We've got the perfect role for you. Click here to apply for current vacancies</p></div><br/>
              </div>
            </div>
          </div> 
          </div>
          </div>
       <TestimonialStyle2 />


       <Cta />

      <Footer />
    </>
  );
}
