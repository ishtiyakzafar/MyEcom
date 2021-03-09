import React from "react";
import acces1 from "../../assets/images/home-page/acces1.JPG";
import acces2 from "../../assets/images/home-page/acces2.JPG";
import { Row, Col } from "antd";
import AccessoriesCard from "./AccessoriesCard";

const AccessoriesSection = () => {
  const data = [
    { id: 1, title: "MENS ", image: acces1 },
    { id: 2, title: "WOMENS ", image: acces2 },
  ];
  return (
    <div className="container">
      <Row gutter={[32, 32]} className="accesSection ">
        {data.map((data) => (
          <Col xs={24} sm={18} md={12} lg={10} xl={10} key={data.id}>
            <AccessoriesCard data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AccessoriesSection;
