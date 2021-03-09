import React from "react";
import advt from "../../assets/images/home-page/advt.JPG";
import { Button } from "antd";

const AdvertiseSection = () => {
  return (
    <div className="advertiseSection ">
      <img src={advt} alt="advt.jpg" />
      <div className="content ">
        <h1>Shopping with Brands Store & Get Instant Cashback</h1>
        <Button type="primary" size="large">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default AdvertiseSection;
