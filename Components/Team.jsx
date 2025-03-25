import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const Team = () => {
  return (
    <section id="team" className="team poss-rel ">
      <div className="container">
        <div className="sec-title text-center mb-70">
          <h5 className="sec-title__subtitle">Team</h5>
          <h2 className="sec-title__title">About Me</h2>
        </div>
        <div className="team__wrap ul_li">
          <div className="team__item">
            <div className="avatar">
              <img src="assets/img/team/Ayush Nayak.jpg" alt="" />
            </div>
            <div className="team__info text-center mb-20">
              <h3>Ayush Nayak</h3>
              <span>Blockchain Developer</span>
            </div>
            <div className="team__social ul_li_center">
              <ul className="team__social-link link-left ul_li">
                <li>
                  <a href="https://github.com/Ayush1832">
                    <TiSocialGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ayushh-nayak/">
                    <TiSocialLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Ayush_n_18">
                    <TiSocialTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="team__shape">
        <div className="shape shape-1">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
        <div className="shape shape-2">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Team;
