import React, { FC } from "react";

import { CopyrightSymbolSvg, FooterLogoImage } from "../../assets/images";

import "../../assets/components/footer.scss";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__row">
          <img src={FooterLogoImage} className="footer__logo" />
          <div className="footer__copyright-wrapper">
            <img src={CopyrightSymbolSvg} className="footer__copyright-icon" />
            <p className="footer__text"> OpTimeRx All rights reserved</p>
          </div>
        </div>
        <div className="footer__row">
          <p className="footer__text">Contact Us</p>
          <p className="footer__number">+111 2221 33314</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
