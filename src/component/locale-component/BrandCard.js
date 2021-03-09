import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";

const BrandCard = ({ data }) => {
  return (
    <div className="brandCard">
      <img src={data.image} alt="brand.jpg" />
      <h3>{data.title}</h3>
      <div className="brandCrdBagIcon">
        <ShoppingOutlined />
      </div>
    </div>
  );
};

export default BrandCard;
