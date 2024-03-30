import React from "react";
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq-content">
                <span>Ask Any Questions</span>
                <h3>
                  Boost Business With Creative Idea & Brand Solutions With Us
                </h3>
                <p>
                 Curious Minds, Welcome! Have questions about our services, pricing, or how we can help elevate your business? We're here to provide clarity and guidance. Whether you're seeking technical advice or simply want to learn more about what we offer, don't hesitate to reach out. Our team is dedicated to ensuring you have all the information you need to make informed decisions. Ask away, and let's start a conversation!
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="faq-info-box">
                      <h3>Clients Satisfied</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          90%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="faq-info-box">
                      <h3>Positive Reviews</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          95%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <Link href="/contact">
                    <a className="default-btn">Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <Accordion preExpanded={['a']}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Company Provides A Full Range of Services?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We specialize in custom website development tailored to your business needs. Our services include responsive design for seamless viewing across devices, integration of user-friendly CMS platforms, e-commerce solutions, and ongoing maintenance and support. We're dedicated to delivering high-quality web solutions that drive business growth and enhance your online presence.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How Long It Will Take For Web Development?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The time it takes to develop a website depends on its complexity. A simple website with a few pages can take a few weeks, while larger websites with more features might take 2 to 3 months. Highly complex websites or custom web applications can take 6 months or more. Effective communication and collaboration between the client and development team are essential for timely delivery.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
