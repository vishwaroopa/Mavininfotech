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

      <PageBanner title="DIRECT HIRE" homeText="Home" homeUrl="/" />
 <div className="pricing-area pt-100 pb-75">
        <div className="container">
 <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h2>JOINING FORCES TO DO GREAT THINGS</h2><br/>
                <div><p>Committing to a full-time position is a serious decision. Your team at Mavin Infotech understands your needs and can answer the questions of both companies and talent. We know how to find a fulfilling match with long-term potential and can work through the stickier full-time-hire hurdles. We negotiate in good faith and support both business and the talent as they make the transition.</p>
                <p>Full-time hires are a big deal. They are a major life event for the person hired and an addition of new long-term capabilities for the company. That's why our people take the time to explore a client's business plan, articulate long-term goals and create a staffing roadmap to get them there. That's why we meet extensively with potential candidates and get to know them, their skills, growth goals, professional needs, and potential. And that's why we pay attention to the cultural fit on both sides.</p>
<p>The right chemistry between talent and employer fuels unlimited opportunity for both.
</p>
<p>
We view our role as both an art and a science. Salaries, job titles and resumes are just a starting point. Let us help you go deeper as you take your next step.</p>
</div><br/>

              </div>
            </div>
                 
            <h2>Client benefits:</h2><br/>
            <p>We bring candidates positioned to meet today's needs and fuel your long-term plans You'll see only thoughtfully vetted candidates, well screened by our in-house experts Count on us to offer transitional support for your newest team member.</p>

            <h2>Consultant benefits:</h2>
            <p>We have personal connections with hiring managers at top companies You'll get support and mentoring before, during and after placement We are experienced, fair negotiators who are committed to your success</p>
          </div> 
          </div>
          </div>
       <TestimonialStyle2 />


       <Cta />

      <Footer />
    </>
  );
}
