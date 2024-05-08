import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-75">
        <div className="container">
          <div className="section-title1 ">
            <h2>CLOUD SERVICES<br/></h2>
           </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
                <div><p><br/>Cloud based services provide information technology (IT) as a service over the Internet or dedicated network, with delivery on demand, and payment based on usage. Cloud based services range from full applications and development platforms, to servers, storage, and virtual desktops.</p></div><br/>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h2>Who uses cloud based services and why?</h2>
                <div><p>Cloud based services provide information technology (IT) as a service over the Internet or dedicated network, with delivery on demand, and payment based on usage. Cloud based services range from full applications and development platforms, to servers, storage, and virtual desktops.</p></div><br/>
              </div>
            </div>
          </div>

         <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h2>How cloud based services work?</h2>
                <div><p>Among the many types of cloud based services delivered internally or by third party service providers, the most common are:</p></div><br/>
              </div>
            </div>
          </div>
        <br/>
       <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h3>Software-as-a-Service (SaaS):</h3>
                <div><p>software runs on computers owned and managed by the SaaS provider, versus installed and managed on user computers. The software is accessed over the public Internet and generally offered on a monthly or yearly subscription.</p></div><br/>
              </div>
            </div>
          </div>
        <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h3>Infrastructure-as-a-Service (IaaS):</h3>
                <div><p>compute, storage, networking, and other elements (cloud security, tools) are provided by the IaaS provider via public Internet, VPN, or dedicated network connection. Users own and manage operating systems, applications, and information running on the infrastructure and pay by usage.</p></div><br/>
              </div>
            </div>
          </div>
        <div className="row justify-content-center">
            <div className="col-lg-12 col-md-6">
              <div className="single-pricing-table1">
              <h3>Platform-as-a-Service (PaaS):</h3>
                <div><p>All software and hardware required to build and operate cloud based applications are provided by the PaaS provider via public Internet, VPN, or dedicated network connection. Users pay by use of the platform and control how applications are utilized throughout their lifecycle.</p></div><br/>
              </div>
            </div>
          </div>
      </div>
       </div>
    </>
  );
};

export default Pricing;
