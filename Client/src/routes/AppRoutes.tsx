import React from "react";
import { Routes, Route } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";
import AddRecipePage from "../pages/AddRecipePage";
import EditRecipePage from "../pages/EditRecipePage";
import LoginPage from "../pages/LoginPage";
import FavouritesPage from "../pages/FavouritesPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import PersonalDetailsPage from "../pages/PersonalDetailsPage";
import SecurityPage from "../pages/SecurityPage";
import PreferencesPage from "../pages/PreferencesPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/edit-recipe/:id" element={<EditRecipePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route
          path="/profile/personal-details"
          element={<PersonalDetailsPage />}
        />
        <Route path="/profile/security" element={<SecurityPage />} />
        <Route path="/profile/preferences" element={<PreferencesPage />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
