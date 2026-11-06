import React from "react";
import { GoArrowRight } from "react-icons/go";
import { RiCommunityLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFF7ED]">
      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-between gap-8 px-4 py-10 md:flex-row md:px-10 md:py-14 lg:px-16 lg:py-20 ">
        {/* Text Content */}
        <div className="flex w-full flex-col items-start gap-5 text-left md:w-1/2 lg:gap-7 lg:px-8">
          <h3 className="text-sm font-semibold tracking-wide text-orange-500 md:text-base">
            GOOD FOOD. A HAPPIER YOU.
          </h3>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Discover Your Next Favorite{" "}
            <span className="text-orange-500">Recipe</span>
          </h1>

          <p className="max-w-lg text-sm leading-6 text-gray-600 md:text-base">
            Find delicious recipes shared by our community. Cook, share, review,
            and make every meal special.
          </p>

          <Link
            to="/recipes"
            className="flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 font-medium text-white transition-colors duration-300 hover:bg-orange-600"
          >
            Explore Recipes
            <GoArrowRight className="text-xl" />
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative flex w-full justify-center md:w-1/2">
          {/* Mobile Image */}
          <img
            src="https://res.cloudinary.com/dbej9cnnv/image/upload/v1786340962/More-Recipes_hero-image-mobile_y9qsue.png"
            alt="Jollof rice with grilled chicken and fresh salad"
            className="block w-full max-w-sm rounded-3xl object-cover md:hidden"
          />

          {/* Desktop / Tablet Image */}
          <img
            src="https://res.cloudinary.com/dbej9cnnv/image/upload/v1786340945/More-Recipes_Hero-Image-md_yccqwe.png"
            alt="Jollof rice with grilled chicken and fresh salad"
            className="hidden w-full max-w-xl rounded-2xl object-cover md:block"
          />

          {/* Community Badge */}
          <div className="absolute bottom-0 right-20 flex items-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-3 shadow-md md:bottom-0 md:right-20 lg:right-60">
            <RiCommunityLine className="text-2xl text-gray-800" />

            <div className="flex flex-col items-start gap-1">
              <h5 className="text-sm font-semibold text-gray-800 md:text-base">
                10K+ <span className="text-orange-500">Recipes</span>
              </h5>

              
              <p className="text-xs text-gray-500 md:text-sm">
                from our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
