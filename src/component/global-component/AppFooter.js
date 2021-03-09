import React from "react";
import img1 from "../../assets/images/home-page/paypal-logo.png";
import img2 from "../../assets/images/home-page/visa-logo.png";
import img3 from "../../assets/images/home-page/mastercard-logo.png";
import facebook from "../../assets/images/home-page/facebook.png";
import linkedin from "../../assets/images/home-page/linkedin.png";
import instagram from "../../assets/images/home-page/instagram.png";
import twitter from "../../assets/images/home-page/twitter.png";

import { Row, Col } from "antd";

const AppFooter = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="logoSection">
              <h2>ZapEcom</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <img src={facebook} alt="facebook.png" />
              <img src={linkedin} alt="facebook.png" />
              <img src={instagram} alt="facebook.png" />
              <img src={twitter} alt="facebook.png" />
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="QuickLinks">
              <h2>Quick Links</h2>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Shipping + Returns</a>
              </li>
              <li>
                <a href="#">Afterpay</a>
              </li>
              <li>
                <a href="#">In-Store Perks</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="ShoppingNow">
              <h2>Shopping Now</h2>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </Col>
            <Col xs={24} sm={12} md={12} lg={6} xl={6} className="ContactUs">
              <h2>Contact Us</h2>
              <p>
                17 New Emana Road, Park View, Hydrabad India Phone- +91 596 452
                589 Email-info@fashion4u.com
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="copyRight">
        <div className="container">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={11} xl={10}>
              <p>©2021 Fashion4U Powered By CodingZap Technologies</p>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={7} className="payText">
              <p>Payment Gateway We Accept</p>
            </Col>
            <Col xs={24} sm={24} md={24} lg={7} xl={7} className="payIcon">
              <img style={{ width: "50px" }} src={img2} alt="visa.png" />
              <img
                style={{ width: "50px", padding: "0 10px" }}
                src={img3}
                alt="mastcard.png"
              />
              <img style={{ width: "80px" }} src={img1} alt="paypal.png" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
