import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiEye } from "react-icons/fi";

const RegisterPage: React.FC = () => {

  const desktopImage =
    "https://res.cloudinary.com/dbej9cnnv/image/upload/v1788530021/MoreRecipe-LoginDesktop_vqijch.png";
  const mobileImage =
    "https://res.cloudinary.com/dbej9cnnv/image/upload/v1788530052/More-Recipes_hero-image-mobile_zbrsjr.png";

  // =========================================================
  // FORM SUBMIT
  // =========================================================
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // We'll add the actual registration/API logic here later.
    console.log("Register form submitted");
  };

  return (
    <main className="min-h-screen bg-[#FFF7ED] px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
          {/* =================================================
              LEFT SIDE — DESKTOP IMAGE
          ================================================= */}
          <div className="relative hidden min-h-[650px] lg:block">
            <img
              src={desktopImage}
              alt="Delicious food"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Text over image */}
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-200">
                MoreRecipes
              </p>

              <h2 className="text-4xl font-bold leading-tight">
                Good food.
                <br />
                Better together.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/90">
                Join our community, discover delicious recipes, and make every
                meal special.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — REGISTER FORM
          ================================================= */}
          <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="w-full max-w-md">
              {/* =================================================
                  MOBILE IMAGE
              ================================================= */}
              <div className="mb-8 lg:hidden">
                <div className="relative h-52 overflow-hidden rounded-2xl">
                  <img
                    src={mobileImage}
                    alt="Delicious food"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-sm font-semibold text-white">
                      More<span className="text-orange-300">Recipes</span>
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-white">
                      Good food.
                      <br />
                      Better together.
                    </h2>
                  </div>
                </div>
              </div>

              {/* =================================================
                  HEADING
              ================================================= */}
              <div className="mb-8 text-center lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  Get started
                </p>

                <h1 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl">
                  Create your account
                </h1>

                <p className="mt-3 text-sm text-gray-500">
                  Join MoreRecipes and discover amazing recipes.
                </p>
              </div>

              {/* =================================================
                  REGISTER FORM
              ================================================= */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* =================================================
                    FULL NAME
                ================================================= */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* =================================================
                    PASSWORD
                ================================================= */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      required
                      autoComplete="new-password"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-12 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                    {/* Password visibility icon */}
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-orange-500"
                      aria-label="Show password"
                    >
                      <FiEye />
                    </button>
                  </div>
                </div>

                {/* =================================================
                    CONFIRM PASSWORD
                ================================================= */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      autoComplete="new-password"
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-12 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                    {/* Confirm password visibility icon */}
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-orange-500"
                      aria-label="Show confirm password"
                    >
                      <FiEye />
                    </button>
                  </div>
                </div>

                {/* =================================================
                    TERMS & CONDITIONS
                ================================================= */}
                <div>
                  <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-orange-500"
                    />

                    <span>
                      I agree to the{" "}
                      <Link
                        to="#"
                        className="font-medium text-orange-500 hover:text-orange-600"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="#"
                        className="font-medium text-orange-500 hover:text-orange-600"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                {/* =================================================
                    REGISTER BUTTON
                ================================================= */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
                >
                  Create Account
                </button>
              </form>

              {/* =================================================
                  LOGIN LINK
              ================================================= */}
              <p className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-orange-500 hover:text-orange-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
