import React from "react";
import Banner from "../components/Banner";
import FeaturesSection from "../components/FeaturedSection";
import ReviewsCarousel from "../components/ReviewsCarousel";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Banner />
      <section id="featured">
        <FeaturesSection />
      </section>

      <ReviewsCarousel />
    </main>
  );
};

export default Home;
