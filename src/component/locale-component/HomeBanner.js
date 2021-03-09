import React from "react";
import { Row, Col, Carousel, Button } from "antd";
import banner from "../../assets/images/home-page/banner.JPG";

const HomeBanner = () => {
  const data = [
    {
      id: 1,
      title: "Women Dresses 40% off",
      discp:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      image: banner,
    },
    {
      id: 2,
      title: "Women Dresses 40% off",
      discp:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      image: banner,
    },
    {
      id: 3,
      title: "Women Dresses 40% off",
      discp:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      image: banner,
    },
  ];
  return (
    <Carousel>
      {data.map((data) => {
        return (
          <div key={data.id} className="homeBanner">
            <img src={data.image} alt={`${data.image}.jpg`} />
            <div className="bannerContent">
              <div className="container">
                <h1>{data.title}</h1>
                <p>{data.discp}</p>
                <Button type="primary" size="large">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeBanner;
