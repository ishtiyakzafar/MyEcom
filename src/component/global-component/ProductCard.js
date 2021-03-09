import React from "react";
import { Card } from "antd";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";

const ProductCard = ({ data }) => {
  return (
    <Card
      style={{ width: 240, padding: "10px" }}
      cover={<img alt="example" style={{ height: "280px" }} src={data.image} />}
    >
      <div className="cardContent">
        <h3>{data.brand}</h3>
        <p>{data.title}</p>
      </div>
      {data.discount ? (
        <div className="productPrice">
          <p>
            Rs. {data.price - Math.round((data.discount / 100) * data.price)}{" "}
            <del>Rs. {data.price}</del>
            <span> ({data.discount}% OFF)</span>
          </p>
        </div>
      ) : (
        <div className="productPrice">
          <p>Rs. {data.price}</p>
        </div>
      )}
      <div>
        <ShoppingOutlined className="bagIcon" />
        <HeartOutlined className="wishlistIcon" />
      </div>
    </Card>
  );
};

export default ProductCard;
