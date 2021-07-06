import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
//import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import axios from "axios";
import { BASE_API_URL } from "constant_api";

export default () => {
  
   return(

  <AnimationRevealPage>
    <Hero />
    <TrendingCard />
    <Footer />
  </AnimationRevealPage>
   )};
