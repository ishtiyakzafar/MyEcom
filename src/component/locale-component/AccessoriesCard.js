import React from "react";
import { Button } from "antd";

const AccessoriesCard = ({ data }) => {
  return (
    <div className="accesCard">
      <img src={data.image} alt="acces.jpg" />
      <div className="content">
        <h1>
          {data.title}
          <span>ACCESSORIES</span>
        </h1>
        <Button type="primary" size="large">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default AccessoriesCard;
