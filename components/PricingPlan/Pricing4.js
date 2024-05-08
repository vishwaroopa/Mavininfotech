import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title1 ">
            <h2>FUELLING THE AI REVOLUTION<br/></h2>
            <p>We implement Artificial Intelligence techniques to aid enterprises to derive relevant insights from the information collected and processed from Big Data.</p>
          <br/></div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-computer-line"></i> 
                  </h3>
                </div>
                <div className="price">
1. Machine Learning
                </div>
                <div><p>We improve your operations and processors by deploying ML algorithms created by us within your software solutions. We guide you to avail the full range of advantages of machine learning. Our team of experts utilizes the machine learning service to develop superior quality software and deploy the best technology and statistical methods for your company.</p></div><br/>

              </div>

            </div>

     <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-group-line"></i> 
                  </h3>
                </div>
                <div className="price">
                 2. Deep Learning
                </div>
                <div>
                <p>
Given the constant growth of data volume and complexity, the need for greater processing power and advanced graphics processors is steadily expanding. Enterprises are increasingly turning to Deep Learning to provide big data predictive analytics to meet this demand.
                </p><br/>
              </div>
</div>
            </div>

      <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-app-store-line"></i> 
                  </h3>
                </div>
                <div className="price">
                 3. Natural Language Processing (NLP)
                </div>
                <div>
                <p>
We develop intelligent software solutions capable of understanding human speech and writing.
</p>                </div><br/>
              </div>

            </div>

 <div className="col-lg-4 col-md-6">
              <div className="single-pricing-table">
                <div className="pricing-header">
                  <h3>
                    <i className="ri-settings-2-line"></i> 
                  </h3>
                </div>
                <div className="price">
                 4. Predictive Analysis
                </div>
                <div>
                <p>
Predictive analytics collates advanced analytics capabilities covering ad-hoc statistical analysis, data mining, predictive modeling, optimization, text analytics, real-time scoring, and machine learning. Identifying patterns in data and forecasting what will happen next becomes smooth for organizations who use these tools.

</p>                </div><br/>
              </div>

            </div>
     
        </div>
      </div>
       </div>
    </>
  );
};

export default Pricing;
