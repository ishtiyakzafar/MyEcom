import React, { useRef, useState } from "react";
import img1 from "../../assets/images/offer/img1.JPG";
import img2 from "../../assets/images/offer/img2.JPG";
import img3 from "../../assets/images/offer/img3.JPG";
import img4 from "../../assets/images/offer/img4.JPG";
import img5 from "../../assets/images/offer/img5.JPG";
import img6 from "../../assets/images/offer/img6.JPG";
import img7 from "../../assets/images/offer/img7.JPG";
import img8 from "../../assets/images/offer/img8.JPG";
import { Col, Row, Image } from "antd";
import { Tabs } from "antd";
import SingleProductDescription from "../locale-component/SingleProductDescription";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const SingleProduct = () => {
  const [image, setImage] = useState(img1);
  const data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
  ];
  const myfun = (id) => {
    const fiterimg = data.find((data) => id == data.id);
    setImage(fiterimg.image);
  };

  return (
    <div className="" style={{ marginTop: "170px" }}>
      <div className="productTitle container">
        <h1>Office Jacket</h1>
      </div>
      <div className="productLine">
        <hr />
      </div>
      <div className="container">
        <Row
          gutter={[32, 32]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col xs={24} sm={22} md={20} lg={14} xl={13}>
            <Row gutter={[16, 16]}>
              <Col
                xs={{ span: 24, order: 2 }}
                sm={{ span: 4, order: 1 }}
                md={{ span: 4, order: 1 }}
                lg={{ span: 4, order: 1 }}
                xl={{ span: 4, order: 1 }}
              >
                {data.map((data) => (
                  <div className="productImage" key={data.id}>
                    <img
                      src={data.image}
                      onClick={() => myfun(data.id)}
                      alt="image.jpg"
                    />
                  </div>
                ))}
              </Col>
              <Col
                xs={{ span: 24, order: 1 }}
                sm={{ span: 20, order: 2 }}
                md={{ span: 20, order: 2 }}
                lg={{ span: 20, order: 2 }}
                xl={{ span: 20, order: 2 }}
              >
                <div className="singleProImg">
                  <Image
                    width="100%"
                    height="100%"
                    src={image}
                    style={{ borderRadius: "3px" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={24} sm={22} md={20} lg={10} xl={11}>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Description" key="1">
                <SingleProductDescription />
              </TabPane>
              <TabPane tab="Specifications" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Reviews" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SingleProduct;
