import React from "react";
import { Col, Row } from "antd";
import { Input } from "antd";

const { Search } = Input;

const NewsLetterSection = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className="newsletter container">
      <h1>Get Upcoming Offer News</h1>
      <Row className="searchBx ">
        <Col xs={24} sm={18} md={15} lg={12} xl={10}>
          <div className="searchBar">
            <input type="text" placeholder="Enter Your Email" />
            <div className="btn">
              <button>SEND NOW</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsLetterSection;
