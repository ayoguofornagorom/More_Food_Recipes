import React, { createContext, useContext, useEffect, useState } from "react";
import type { Recipe } from "../data/Recipes";

interface FavouriteContextType {
  favourites: Recipe[];
  addFavourite: (recipe: Recipe) => void;
  removeFavourite: (recipeId: number) => void;
  isFavourite: (recipeId: number) => boolean;
  toggleFavourite: (recipe: Recipe) => void;
}

const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined,
);

export const FavouriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favourites, setFavourites] = useState<Recipe[]>(() => {
    const savedFavourites = localStorage.getItem("favourites");

    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (recipe: Recipe) => {
    setFavourites((prev) => {
      if (prev.some((item) => item.id === recipe.id)) {
        return prev;
      }

      return [...prev, recipe];
    });
  };

  const removeFavourite = (recipeId: number) => {
    setFavourites((prev) => prev.filter((recipe) => recipe.id !== recipeId));
  };

  const isFavourite = (recipeId: number) => {
    return favourites.some((recipe) => recipe.id === recipeId);
  };

  const toggleFavourite = (recipe: Recipe) => {
    if (isFavourite(recipe.id)) {
      removeFavourite(recipe.id);
    } else {
      addFavourite(recipe);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouriteContext);

  if (!context) {
    throw new Error("useFavourites must be used inside a FavouriteProvider");
  }

  return context;
};
