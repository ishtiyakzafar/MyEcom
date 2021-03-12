import React from "react";
import img1 from "../../assets/images/feat-img1.JPG";
import img2 from "../../assets/images/feat-img2.JPG";
import img3 from "../../assets/images/feat-img3.JPG";
import img4 from "../../assets/images/feat-img4.JPG";
import img5 from "../../assets/images/feat-img5.JPG";
import img6 from "../../assets/images/feat-img6.JPG";
import img7 from "../../assets/images/feat-img7.JPG";
import img8 from "../../assets/images/feat-img8.JPG";
import { Row, Col } from "antd";

const FeaturedCollection = () => {
  const data = [
    { id: 1, title: "Emao Collection 2020", imgsrc: img1 },
    { id: 2, title: "Molita Collection 2020", imgsrc: img2 },
    { id: 3, title: "Esika Collection 2020", imgsrc: img3 },
    { id: 4, title: "Malini Collection 2020", imgsrc: img4 },
    { id: 5, title: "Mahima Collection 2020", imgsrc: img5 },
    { id: 6, title: "Rani Collection 2020", imgsrc: img6 },
    { id: 7, title: "Promita Collection 2020", imgsrc: img7 },
    { id: 8, title: "Esha Collection 2020", imgsrc: img8 },
  ];
  return (
    <div className="container">
      <div className="hrading">
        <h1>Featured Collection</h1>
        <div className="headingLine">
          <hr />
        </div>
      </div>
      <Row gutter={[32, 32]}>
        {data.map((data, ind) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={6}
            className="styleFeatureColl"
            key={data.id}
          >
            <div className="styleImgBx">
              <img src={data.imgsrc} />
            </div>
            <h3>{data.title}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedCollection;
