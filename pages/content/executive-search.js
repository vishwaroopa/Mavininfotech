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

      <PageBanner title="EXECUTIVE SEARCH" homeText="Home" homeUrl="/" />
 <div className="pricing-area pt-100 pb-75">
        <div className="container">
 <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h2>LEADERSHIP RECRUITING: WE HAVE SOMEONE YOU SHOULD MEET</h2><br/>
                <div><p>Effective leadership takes a special kind of person. Someone with respected skills. Someone with the ability to articulate a vision and foster trust. Someone who works well with other leaders and helps bring out the best in others. Senior leaders help define and amplify the culture of a workplace, which impacts the success of everyone on the team.</p>

<p>People with this unique mix of intangibles know they need the right opportunity to make the best use of their talents. Senior leadership and director candidates might be growing into a role or looking for a new challenge. Wherever you're coming from, whatever you're looking for, Mavin Infotech has the access and the insight to make great matches.</p>
<br/><h2>FROM THE CORNER OFFICE TO THE BULLPEN, WE HAVE A LINE ON GREAT CREATIVE AND IT LEADERS AT EVERY LEVEL.
</h2>
<p>
We are proud to have some of the best talent in IT and digital marketing on staff at Mavin Infotech. These leaders support our executive search team and develop insights through one-on-one meetings that help us understand the potential each candidate offers our clients. See what we can do for you.</p>
</div><br/>

              </div>
            </div>
                 
            <br/><h2>Client benefits:</h2><br/>
            <p>We get to know your business model, culture and challenges - and find candidates who fit We work with potential leaders who might not be actively looking but are open to opportunity We offer only carefully vetted candidates, well screened by our in-house experts</p>

            <br/><h2>Executive candidate benefits:</h2>
            <p>Not ready to commit? Get in touch - we'll keep an eye out for you We have insights into the opportunities and cultures at top companies We have the ear of company leaders and can help you skip normal early hiring steps.</p>
          </div> 
          </div>
          </div>
       <TestimonialStyle2 />


       <Cta />

      <Footer />
    </>
  );
}
