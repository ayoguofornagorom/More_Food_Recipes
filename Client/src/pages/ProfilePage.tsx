import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiEdit3,
  FiLock,
  FiPlus,
  FiSettings,
  FiUser,
} from "react-icons/fi";

const ProfilePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <div className="flex flex-col items-center justify-center gap-3 text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
            My Account
          </p>

          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl">
            My Profile
          </h1>

          <p className="max-w-2xl text-sm leading-6 text-gray-500 md:text-center">
            Manage your recipes and account settings from one place.
          </p>
        </div>

        {/* =====================================================
            RECIPE MANAGEMENT
        ====================================================== */}
        <section>
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="text-xl font-bold text-[#1F2937] md:text-2xl">
              Recipe Management
            </h2>

            <p className="text-sm text-gray-500">
              Create and manage your recipes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 mt-5">
            {/* Add Recipe */}
            <Link
              to="/add-recipe"
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md md:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <FiPlus className="text-2xl" />
                </div>

                <FiArrowRight className="text-xl text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#1F2937]">
                Add Recipe
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                Create and share a new recipe with the MoreRecipes community.
              </p>
            </Link>

            {/* Edit Recipe */}
            <Link
              to="/recipes"
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-md md:p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <FiEdit3 className="text-2xl" />
                </div>

                <FiArrowRight className="text-xl text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
              </div>

              <h3 className="mt-6 text-lg font-bold text-[#1F2937]">
                Edit Recipe
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                View your recipes and update the details of any recipe you've
                created.
              </p>
            </Link>
          </div>
        </section>

        {/* =====================================================
            ACCOUNT SETTINGS
        ====================================================== */}
        <section className="mt-12">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#1F2937] md:text-2xl">
              Account Settings
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your personal information and preferences.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Personal Details */}
            <Link
              to="/profile/personal-details"
              className="group flex items-center justify-between gap-4 border-b border-gray-200 p-5 transition hover:bg-orange-50/50 md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition group-hover:bg-orange-100 group-hover:text-orange-500">
                  <FiUser className="text-xl" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#1F2937] md:text-base">
                    Personal Details
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 md:text-sm">
                    Manage your name, email, avatar and bio.
                  </p>
                </div>
              </div>

              <FiArrowRight className="flex-shrink-0 text-lg text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-500" />
            </Link>

            {/* Password & Security */}
            <Link
              to="/profile/security"
              className="group flex items-center justify-between gap-4 border-b border-gray-200 p-5 transition hover:bg-orange-50/50 md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition group-hover:bg-orange-100 group-hover:text-orange-500">
                  <FiLock className="text-xl" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#1F2937] md:text-base">
                    Password & Security
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 md:text-sm">
                    Manage your password and account security.
                  </p>
                </div>
              </div>

              <FiArrowRight className="flex-shrink-0 text-lg text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-500" />
            </Link>

            {/* Preferences */}
            <Link
              to="/profile/preferences"
              className="group flex items-center justify-between gap-4 p-5 transition hover:bg-orange-50/50 md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition group-hover:bg-orange-100 group-hover:text-orange-500">
                  <FiSettings className="text-xl" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#1F2937] md:text-base">
                    Preferences
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 md:text-sm">
                    Manage your recipe and notification preferences.
                  </p>
                </div>
              </div>

              <FiArrowRight className="flex-shrink-0 text-lg text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-500" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
