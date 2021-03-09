import React from "react";
import HomeBanner from "../locale-component/HomeBanner";
import FeaturedCollectionSection from "../locale-component/FeaturedCollectionSection";
import NewArrivalsSection from "../locale-component/NewArrivalsSection";
import BrandsProductSection from "../locale-component/BrandsProductSection";
import AdvertiseSection from "../locale-component/AdvertiseSection";
import AccessoriesSection from "../locale-component/AccessoriesSection";
import NewsLetterSection from "../locale-component/NewsLetterSection";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeaturedCollectionSection />
      <NewArrivalsSection />
      <BrandsProductSection />
      <AdvertiseSection />
      <AccessoriesSection />
      <NewsLetterSection />
    </div>
  );
};

export default Home;
