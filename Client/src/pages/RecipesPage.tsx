import React, { useMemo, useState } from "react";
import { FiSearch, FiSliders } from "react-icons/fi";

import { recipes } from "../data/Recipes";
import RecipeCard from "../components/RecipeCard";

type SortOption =
  | "newest"
  | "oldest"
  | "rating-high"
  | "rating-low"
  | "reviews"
  | "az"
  | "za";

const RecipesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Get all unique categories from the recipe data
  const categories = [
    "All",
    ...Array.from(new Set(recipes.map((recipe) => recipe.category))),
  ];

  // Filter and sort recipes
  const filteredAndSortedRecipes = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    // FILTER
    const filteredRecipes = recipes.filter((recipe) => {
      // Search through title, description and category
      const matchesSearch =
        search === "" ||
        recipe.title.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search) ||
        recipe.category.toLowerCase().includes(search);

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || recipe.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // SORT
    return [...filteredRecipes].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );

        case "rating-high":
          return b.rating - a.rating;

        case "rating-low":
          return a.rating - b.rating;

        case "reviews":
          return b.reviewCount - a.reviewCount;

        case "az":
          return a.title.localeCompare(b.title);

        case "za":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  // Clear search and filters
  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("newest");
  };

  return (
    <main className="min-h-screen bg-[#FFF7ED]">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="px-4 pb-8 pt-10 md:px-10 md:pb-10 md:pt-14 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Explore Our Recipes
          </span>

          <h1 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Find Your Next Favorite Recipe
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
            Discover delicious recipes from our community. Search, filter, and
            find something amazing to cook today.
          </p>
        </div>
      </section>

      {/* =========================
          SEARCH & FILTERS
      ========================== */}
      <section className="px-4 pb-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-4 shadow-sm md:p-6">
          {/* Search */}
          <div className="relative">
            <FiSearch
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Filters */}
          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <FiSliders size={18} className="mr-1 shrink-0 text-gray-500" />

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="sort"
                className="whitespace-nowrap text-sm font-medium text-gray-600"
              >
                Sort by:
              </label>

              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 sm:w-auto"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating-high">Highest Rated</option>
                <option value="rating-low">Lowest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="az">A–Z</option>
                <option value="za">Z–A</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          RECIPE RESULTS
      ========================== */}
      <section className="px-4 pb-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Results heading */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#1F2937] md:text-2xl">
                All Recipes
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filteredAndSortedRecipes.length}{" "}
                {filteredAndSortedRecipes.length === 1 ? "recipe" : "recipes"}{" "}
                found
              </p>
            </div>

            {(searchTerm || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={handleReset}
                className="self-start text-sm font-medium text-orange-500 transition hover:text-orange-600 sm:self-auto"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Recipe Cards */}
          {filteredAndSortedRecipes.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAndSortedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <FiSearch size={28} className="text-orange-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F2937]">
                No recipes found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                We couldn't find any recipes matching your search or selected
                category.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="mt-6 rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-orange-600"
              >
                Show All Recipes
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default RecipesPage;
