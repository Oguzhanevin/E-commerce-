import React from "react";

import Hero from "../components/HomeComponents/HeroComponents/Hero";
import CategoryCard from "../components/HomeComponents/EditorsPickComponents/CategoryCard";
import BestsellerProducts from "../components/HomeComponents/FeaturedProducts/BestsellerProducts";
import Carousel2 from "../components/HomeComponents/Carousel2";
import Neural from "../components/HomeComponents/NeuralComponents/Neural";
import PracticeSection from "../components/HomeComponents/PracticeAdvice/PracticeSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <BestsellerProducts />
      {/*<Carousel2 />*/}
      <Neural />
      <PracticeSection />
    </div>
  );
};

export default Home;
