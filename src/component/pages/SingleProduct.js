import React, { useState } from "react";
import img1 from "../../assets/images/feat-img1.JPG";
import img2 from "../../assets/images/feat-img2.JPG";
import img3 from "../../assets/images/feat-img3.JPG";
import img4 from "../../assets/images/mon.jpg";
import img5 from "../../assets/images/feat-img5.JPG";
import img6 from "../../assets/images/feat-img6.JPG";
import img7 from "../../assets/images/feat-img7.JPG";
import img8 from "../../assets/images/feat-img8.JPG";
import ReactImageMagnify from "react-image-magnify";
import { Col, Row, Carousel } from "antd";

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
      image: img7,
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
    <>
      <Row style={{ marginTop: "200px" }}>
        <Col span={11}>
          <div className="mainImg" style={{ width: "" }}>
            <Carousel>
              {data.map((data) => (
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      src: data.image,
                      isFluidWidth: true,
                    },
                    largeImage: {
                      src: data.image,
                      width: 800,
                      height: 800,
                    },
                    enlargedImagePosition: "over",
                  }}
                />
              ))}
            </Carousel>
          </div>
        </Col>
        <Col span={11}></Col>
      </Row>
      <div
        style={{ marginTop: "200px", width: "40%" }}
        className="contin"
      ></div>
    </>
  );
};

export default SingleProduct;
