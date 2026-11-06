import React from "react";
import Loader from "../components/Loader";

const FavouritesPage: React.FC = () => {
  const loading = true;
  

  return (
    <section className="min-h-screen bg-[#FFF7ED] px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900">My Favourites</h1>

        {loading ? (
          <Loader />
        ) : (
          <div>{/* Favourite recipes will go here */}</div>
        )}
      </div>
    </section>
  );
};

export default FavouritesPage;
