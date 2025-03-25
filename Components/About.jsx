import React from "react";

const About = () => {
  return (
    <section id="about" className="about pos-rel pb-140">
      <div className="container">
        <div className="row align-items-center mt-none-30">
          <div className="col-lg-6 mt-30">
            <div className="about__img pos-rel wow fadeInLeft">
              <img src="assets/img/about/about_img.png" alt="" />
              <div className="about__shape">
                <img src="assets/img/shape/about_shape.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-30">
            <div
              className="about__content wow fadeInRight"
              data-wow-delays="100ms"
            >
              <div className="sec-title mb-35">
                <h5 className="sec-title__subtitle">WHAT IS ICO CRYPTO</h5>
                <h2 className="sec-title mb-25">ICO (Initial Coin Offering)</h2>
                <p>
                  ICO is a fundraising method used by blockchain-based projects
                  to raise capital by selling tokens to early investors. It
                  allows individuals to invest in new crypto projects before
                  they are publicly launched.
                </p>
              </div>

              <ul className="about__list ul_li">
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Decentralized Platform
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Rewards Mechanism
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Crowd Wisdom
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Ionvestor Protection
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Token sale Phases
                </li>
                <li>
                  <img src="assets/img/icon/a_arrow.svg" alt="" />
                  Exchange Listing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__sec-shape/s_shape_2.png"></div>
    </section>
  );
};

export default About;
