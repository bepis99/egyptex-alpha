import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BookingHero";
import SliderCard from "components/cards/ThreeColSlider.js";
import ToursSlider from "components/cards/BookingSlider";
import TrendingCard from "components/cards/BookingTrending";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <SliderCard />
    <TrendingCard />
    <ToursSlider />
    <Footer />
  </AnimationRevealPage>
);
