import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiBookOpen,
  FiClock,
  FiImage,
  FiList,
  FiTag,
  FiUsers,
  FiFileText,
  FiGlobe,
  FiSave,
  FiX,
} from "react-icons/fi";
import { MdRestaurant, MdOutlineSignalCellularAlt } from "react-icons/md";

const AddRecipePage: React.FC = () => {
  const [isPublic, setIsPublic] = useState(true);

  const [categories, setCategories] = useState([
    "Nigerian",
    "African",
    "Italian",
    "Asian",
    "Breakfast",
    "Dessert",
    "Fast Food",
  ]);

  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [creatingCategory, setCreatingCategory] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Recipe submitted");
  };

  return (
    <main className="min-h-screen bg-[#FFF7ED] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            BACK TO RECIPES
        ====================================================== */}
        <Link
          to="/recipes"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-orange-500"
        >
          <FiArrowLeft />
          Back to Recipes
        </Link>

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            Share your recipe
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl">
            Add New <span className="text-orange-500">Recipe</span>
          </h1>

          <p className="mt-2 text-sm text-gray-500 md:text-base">
            Share your favourite recipe with the community.
          </p>
        </div>

        {/* =====================================================
            FORM
        ====================================================== */}
        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-3">
            {/* =================================================
                LEFT — MAIN RECIPE INFORMATION
            ================================================== */}
            <div className="space-y-6 p-5 md:p-8 lg:col-span-2">
              {/* Recipe Title */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Recipe Title <span className="text-orange-500">*</span>
                </label>

                <div className="relative">
                  <FiBookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    placeholder="Enter recipe title"
                    className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Category + Cooking Time */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Category <span className="text-orange-500">*</span>
                  </label>

                  {/* Category Select */}
                  <div className="relative">
                    <MdRestaurant className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <select
                      id="category"
                      name="category"
                      value={creatingCategory ? "__create_new__" : category}
                      onChange={(event) => {
                        const value = event.target.value;

                        if (value === "__create_new__") {
                          setCreatingCategory(true);
                          setCategory("");
                          return;
                        }

                        setCreatingCategory(false);
                        setCategory(value);
                      }}
                      required
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    >
                      <option value="" disabled>
                        Select category
                      </option>

                      {categories.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}

                      <option value="__create_new__">
                        + Create new category
                      </option>
                    </select>
                  </div>

                  {/* =================================================
      NEW CATEGORY INPUT
  ================================================== */}
                  {creatingCategory && (
                    <div className="mt-3">
                      <label
                        htmlFor="newCategory"
                        className="mb-2 block text-xs font-medium text-gray-500"
                      >
                        New Category
                      </label>

                      <div className="flex gap-2">
                        <input
                          id="newCategory"
                          type="text"
                          value={newCategory}
                          onChange={(event) =>
                            setNewCategory(event.target.value)
                          }
                          placeholder="e.g. Vegan"
                          autoFocus
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            const trimmedCategory = newCategory.trim();

                            if (!trimmedCategory) return;

                            if (!categories.includes(trimmedCategory)) {
                              setCategories((prev) => [
                                ...prev,
                                trimmedCategory,
                              ]);
                            }

                            setCategory(trimmedCategory);
                            setNewCategory("");
                            setCreatingCategory(false);
                          }}
                          className="whitespace-nowrap rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                          Add
                        </button>
                      </div>

                      {/* Cancel creating category */}
                      <button
                        type="button"
                        onClick={() => {
                          setCreatingCategory(false);
                          setNewCategory("");
                        }}
                        className="mt-2 text-xs font-medium text-gray-500 hover:text-orange-500"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
                {/* Cooking Time */}
                <div>
                  <label
                    htmlFor="cookingTime"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Cooking Time <span className="text-orange-500">*</span>
                  </label>

                  <div className="relative">
                    <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="cookingTime"
                      name="cookingTime"
                      type="text"
                      required
                      placeholder="e.g. 45 mins"
                      className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>
              </div>

              {/* Servings + Difficulty */}
              <div className="grid gap-5 md:grid-cols-2">
                {/* Servings */}
                <div>
                  <label
                    htmlFor="servings"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Servings <span className="text-orange-500">*</span>
                  </label>

                  <div className="relative">
                    <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="servings"
                      name="servings"
                      type="number"
                      min="1"
                      required
                      placeholder="Enter number of servings"
                      className="w-full rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <label
                    htmlFor="difficulty"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Difficulty Level <span className="text-orange-500">*</span>
                  </label>

                  <div className="relative">
                    <MdOutlineSignalCellularAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <select
                      id="difficulty"
                      name="difficulty"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    >
                      <option value="" disabled>
                        Select difficulty
                      </option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <label
                  htmlFor="ingredients"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Ingredients <span className="text-orange-500">*</span>
                </label>

                <div className="relative">
                  <FiList className="absolute left-4 top-4 text-gray-400" />

                  <textarea
                    id="ingredients"
                    name="ingredients"
                    required
                    rows={7}
                    placeholder={
                      "List ingredients, one per line...\n\n2 cups rice\n1 kg chicken\n3 tomatoes"
                    }
                    className="w-full resize-none rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <p className="mt-1 text-xs text-gray-400">
                  Enter each ingredient on a separate line.
                </p>
              </div>

              {/* Instructions */}
              <div>
                <label
                  htmlFor="instructions"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Instructions <span className="text-orange-500">*</span>
                </label>

                <div className="relative">
                  <FiFileText className="absolute left-4 top-4 text-gray-400" />

                  <textarea
                    id="instructions"
                    name="instructions"
                    required
                    rows={9}
                    placeholder={
                      "Step-by-step instructions...\n\n1. Prepare the ingredients.\n2. Cook the sauce.\n3. Add the main ingredients."
                    }
                    className="w-full resize-none rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <p className="mt-1 text-xs text-gray-400">
                  Write clear step-by-step instructions.
                </p>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Description <span className="text-orange-500">*</span>
                </label>

                <div className="relative">
                  <FiFileText className="absolute left-4 top-4 text-gray-400" />

                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    placeholder="Write a short description of your recipe..."
                    className="w-full resize-none rounded-lg border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — IMAGE + EXTRA DETAILS
            ================================================== */}
            <div className="border-t border-gray-200 bg-gray-50 p-5 md:p-8 lg:col-span-1 lg:border-l lg:border-t-0">
              {/* Recipe Image */}
              <div>
                <label
                  htmlFor="recipeImage"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Recipe Image <span className="text-orange-500">*</span>
                </label>

                <label
                  htmlFor="recipeImage"
                  className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white px-5 text-center transition hover:border-orange-400 hover:bg-orange-50"
                >
                  <FiImage className="mb-3 text-4xl text-orange-500" />

                  <p className="text-sm font-semibold text-gray-700">
                    Click to upload
                  </p>

                  <p className="mt-1 text-xs text-gray-400">PNG, JPG or WEBP</p>

                  <p className="mt-1 text-xs text-gray-400">
                    Maximum size: 5MB
                  </p>

                  <input
                    id="recipeImage"
                    name="recipeImage"
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    required
                    className="hidden"
                  />
                </label>
              </div>

              {/* Additional Details */}
              <div className="mt-6">
                <label
                  htmlFor="tags"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Tags{" "}
                  <span className="text-xs font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <div className="relative">
                  <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    id="tags"
                    name="tags"
                    type="text"
                    placeholder="e.g. chicken, spicy, quick"
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Public Recipe */}
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <div className="mt-1 text-orange-500">
                      <FiGlobe className="text-xl" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        Make this recipe public
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Others will be able to see and discover your recipe.
                      </p>
                    </div>
                  </div>

                  {/* Toggle */}
                  <button
                    type="button"
                    aria-label="Toggle recipe visibility"
                    aria-pressed={isPublic}
                    onClick={() => setIsPublic((prev) => !prev)}
                    className={`relative h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-300 ${
                      isPublic ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
                        isPublic ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              FORM ACTIONS
          ====================================================== */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-200 bg-white p-5 sm:flex-row sm:justify-end md:p-8">
            {/* Cancel */}
            <Link
              to="/recipes"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              <FiX />
              Cancel
            </Link>

            {/* Save Recipe */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              <FiSave />
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddRecipePage;
