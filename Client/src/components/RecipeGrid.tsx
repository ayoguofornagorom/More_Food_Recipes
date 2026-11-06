import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { recipes } from "../data/Recipes";
import RecipeCard from "./RecipeCard";

const RecipeGrid: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-10 lg:px-16">
      {/* Section Heading */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-500">
          Top Recipes
        </span>

        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Discover recipes people love
        </h2>

        <p className="mt-3 max-w-xl text-sm text-gray-600 md:text-base">
          Explore some of the most popular recipes from our amazing community.
        </p>
      </div>

      {/* Desktop — 4 Recipes */}
      <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5">
        {recipes.slice(0, 4).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {/* Tablet + Mobile — Carousel */}
      <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Recipes */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/recipes"
          className="rounded-md border border-orange-500 px-8 py-3 text-sm font-medium text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
        >
          View All Recipes
        </Link>
      </div>
    </section>
  );
};

export default RecipeGrid;
