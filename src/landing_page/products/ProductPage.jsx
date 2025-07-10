import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        kitePng="media/kite.png"
        headingKite="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        appleStore="media/appstoreBadge.svg"
        googlePlayStore="media/googlePlayBadge.svg"
      />
      <RightSection
        img="media/console.png"
        heading="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
    </>
  );
};

export default ProductPage;
