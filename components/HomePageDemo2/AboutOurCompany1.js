import React from "react";
import Link from "next/link";

const AboutOurCompany = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-wrap">
                <img
                  src="/images/Group_of_People_0053047a43.png"
                  alt="About Image"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <img
                  src="/images/about/about-3.jpg"
                  alt="About Image"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <div
                  className="about-shape-3"
                >
                  <img src="/images/about/shape-1.png" alt="Shape" />
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>ABOUT MAVIN INFOTECH</span>
                <h3>
                  We bring global best practices and resources to customers across industry verticals around the world.

                </h3>
                <p>
Mavin InfoTech was setup to leverage the "Proven India Advantage" in delivering low cost IT software services with a guarantee of Quality with Speed. We have evolved into a large team of professionals with diverse skills and experience. We currently offer three types of services:
</p>
<ul>
<li>
Offshore Development Projects</li>
<li>BPO & IT Enabled Services</li>
<li>Staffing & Onsite Consulting Services   </li> </ul>            
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Learn More</a>
                  </Link>
                </div>
              </div>


            </div>
            <div
              className="col-lg-12 col-md-12 pt-75"
            >
              <div className="about-content">
              
                <p>
We have 15 active clients and a reference network spanning over 50 firms. Nearly 90% of our business is derived from service exports to US and 80% of our clients are in manufacturing, financial services, retail and healthcare domains. The basis of our success and future progress is that we ensure "value for money" in each and every client relationship. Nearly 85% of our revenue is from repeat clients. Our billing rates are in the range of US $14 - $22 per hour for offshore work and US $28 - $45 per hour for onsite work. Mavin Info Tech is structured in three parts:

</p>
<ul>
<li>Determine Opportunity Portfolio and Manage Skill Matrix Measurement & Progression</li>
<li>Manage Talent Pool through Recruitment & Skill Training</li>
<li>Opportunity Clustered Delivery Network (Value for Money & Quality with Speed)
</li> 
</ul>  
<p>We adopt both process and outcome control in our quality assurance practices to ensure that our clients get value for their money in every assignment. Each project or initiative is pursued in the spirit of making the relationship a potential source of ongoing repeat business. We have detailed and business relevant "ready to deploy".

</p>          
          
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
