import React from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data/Recipes";

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FFF7ED]">
        <h1 className="text-2xl font-bold text-[#1F2937]">Recipe not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF7ED] px-4 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-64 w-full rounded-2xl object-cover md:h-96"
        />

        {/* Recipe Information */}
        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            {recipe.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl">
            {recipe.title}
          </h1>

          <p className="mt-4 max-w-3xl text-gray-600">{recipe.description}</p>

          {/* Recipe Stats */}
          <div className="mt-6 flex flex-wrap gap-6">
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="font-semibold text-[#1F2937]">⭐ {recipe.rating}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Reviews</p>
              <p className="font-semibold text-[#1F2937]">
                {recipe.reviewCount}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Cooking Time</p>
              <p className="font-semibold text-[#1F2937]">
                {recipe.cookingTime}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Servings</p>
              <p className="font-semibold text-[#1F2937]">{recipe.servings}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className="font-semibold text-[#1F2937]">
                {recipe.difficulty}
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#1F2937]">Ingredients</h2>

            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="rounded-lg bg-white px-4 py-3 text-gray-700 shadow-sm"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          {/* Instructions */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#1F2937]">Instructions</h2>

            <ol className="mt-4 space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-lg bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                    {index + 1}
                  </span>

                  <p className="text-gray-700">{instruction}</p>
                </li>
              ))}
            </ol>
          </section>
          <button className=" mt-10 rounded-md px-4 text-[20px] bg-orange-500 text-white  hover:bg-orange-600 transition-colors duration-300">
            <Link to="/recipes">Back</Link>
          </button>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetailsPage;
