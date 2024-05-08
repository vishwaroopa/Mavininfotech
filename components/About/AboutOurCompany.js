import React from "react";

const AboutOurCompany = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-image">
                <img src="/images/about/about-1.png" alt="Teza" />

                <div className="about-shape-1">
                  <img src="/images/about/shape-1.png" alt="Teza" />
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
                <span>About Our Company</span>
                <h3>
                  Best Award Winning Creative Agency Shape Of Perfect Solution
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor sit amet consectetur adipiscing elit et fames
                  maecenas amet est scelerisque lectus tortor sit.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-shape-2">
          <img src="/images/about/shape-2.png" alt="Teza" />
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
