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

      <PageBanner title="CONTRACT STAFFING" homeText="Home" homeUrl="/" />
 <div className="pricing-area pt-100 pb-75">
        <div className="container">
 <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h2>THE RIGHT TALENT AT THE RIGHT TIME</h2><br/>
                <div><p>When there's work to be done, we are proud to play matchmaker. We recognize that pairing the right talent with the right opportunity isn't like swapping out computer parts - each client has a unique culture that isn't always captured in a job posting. In addition, our consultants are individuals with personal strengths that go beyond their technical skills.

</p><p>A consultant who thrives under pressure may be happiest working on a big, challenging project. And a client with many less-experienced team members might want to bring on someone with leadership experience. We look at the duration and complexity of each opportunity to make sure we're meeting everyone's expectations.</p>
</div><br/>

              </div>
            </div>
                   <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <br/><h2>DOES THIS SOUND LIKE A MORE PERSONALIZED APPROACH THAN YOU'RE USED TO? LET'S TALK.</h2><br/>
                <div><p>Get quality talent who can help you excel - not just deliver.</p>
</div><br/>

              </div>
            </div>
            <h2>Client benefits:</h2>
            <ul class="features-list">
            <li><i class="ri-arrow-drop-right-line"></i>Access a large, diverse well-vetted talent pool for your urgent or on-demand projects</li>
            <li><i class="ri-arrow-drop-right-line"></i>Get candidates who match your needs fast - often within hours</li>
            <li><i class="ri-arrow-drop-right-line"></i>Personal attention from your Mavin Infotech team</li>
            </ul>

            <h2>Consultant benefits:</h2>
            <ul class="features-list">
            <li><i class="ri-arrow-drop-right-line"></i>An "in" with top companies doing innovative, cutting-edge work</li>
            <li><i class="ri-arrow-drop-right-line"></i>Hands-on support and mentoring before, during and after placement</li>
            </ul>
          </div> 
          </div>
          </div>
       <TestimonialStyle2 />


       <Cta />

      <Footer />
    </>
  );
}
