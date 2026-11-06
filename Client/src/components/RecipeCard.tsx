import React from "react";
import type { Recipe } from "../data/Recipes";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouriteContext";
import { FiHeart } from "react-icons/fi";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {

  const { toggleFavourite, isFavourite } = useFavourites();
  const favourite = isFavourite(recipe.id);

  return (
    <Link to={`/recipes/${recipe.id}`}>
      <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-52 w-full object-cover"
        />

        <div className="p-4">
          <p className="mb-1 text-sm text-orange-500">{recipe.category}</p>

          <h3 className="text-lg font-bold text-gray-900">{recipe.title}</h3>

          <p className="mt-1 text-sm text-gray-500">
            By{" "}
            <span className="font-medium text-gray-700">{recipe.author}</span>
          </p>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {recipe.description}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-gray-600">⭐ {recipe.rating}</span>

            <span className="text-gray-500">{recipe.reviewCount} reviews</span>
          </div>
        </div>
      </article>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleFavourite(recipe);
              }}
              aria-label={
                favourite ? "Remove from favourites" : "Add to favourites"
              }
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 hover:scale-110"
            >
              <FiHeart
                className={`text-xl ${
                  favourite
                    ? "fill-orange-500 text-orange-500"
                    : "text-gray-600"
                }`}
              />
            </button>
    </Link>
  );
};

export default RecipeCard;
