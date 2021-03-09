import React from "react";
import { Col, Row } from "antd";
import feat1 from "../../assets/images/home-page/feat1.JPG";
import feat2 from "../../assets/images/home-page/feat2.JPG";
import feat3 from "../../assets/images/home-page/feat3.JPG";
import feat4 from "../../assets/images/home-page/feat4.JPG";
import feat5 from "../../assets/images/home-page/feat5.JPG";
import feat6 from "../../assets/images/home-page/feat6.JPG";
import feat7 from "../../assets/images/home-page/feat7.JPG";
import feat8 from "../../assets/images/home-page/feat8.JPG";

const FeaturedCollectionSection = () => {
  const data = [
    { id: 1, title: "Emao Collection 2020", image: feat1 },
    { id: 2, title: "Molita Collection 2020", image: feat2 },
    { id: 3, title: "Esika Collection 2020", image: feat3 },
    { id: 4, title: "Malini Collection 2020", image: feat4 },
    { id: 5, title: "Mahima Collection 2020", image: feat5 },
    { id: 6, title: "Rani Collection 2020", image: feat6 },
    { id: 7, title: "Promita Collection 2020", image: feat7 },
    { id: 8, title: "Esha Collection 2020", image: feat8 },
  ];
  return (
    <div className="featured container">
      <div className="hrading">
        <h1>Featured Collection</h1>
        <div className="headingLine">
          <hr />
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {data.map((data) => (
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={6}
            key={data.id}
            className="featureImgBx"
          >
            <img src={data.image} alt="example" />
            <h3>{data.title}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCollectionSection;
