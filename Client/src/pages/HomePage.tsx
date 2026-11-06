import React from "react";
import HeroSection from "../components/HeroSection";
import RecipeGrid from "../components/RecipeGrid";

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <RecipeGrid />
    </div>
  );
};

export default HomePage;
