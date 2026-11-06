import React, { useState } from "react";
import { Link, useNavigate}  from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Modal from "../components/Modal";


const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    navigate("/");
  };
 
  const DesktopImage =
    "https://res.cloudinary.com/dbej9cnnv/image/upload/v1788530021/MoreRecipe-LoginDesktop_vqijch.png";
  const MobileImage =
    "https://res.cloudinary.com/dbej9cnnv/image/upload/v1788530052/More-Recipes_hero-image-mobile_zbrsjr.png";

  // =========================================================
  // FORM SUBMIT
  // =========================================================
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // We'll add the actual login/API logic here later.
    console.log("Login form submitted");
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
              src={DesktopImage}
              alt="Delicious food"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

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
                Discover delicious recipes, share your favourites, and make
                every meal special.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — LOGIN
          ================================================= */}
          <div className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-12">
            <div className="w-full max-w-md">
              {/* =================================================
                  MOBILE IMAGE
              ================================================= */}
              <div className="mb-8 lg:hidden">
                <div className="relative h-52 overflow-hidden rounded-2xl">
                  <img
                    src={MobileImage}
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
                  Welcome back
                </p>

                <h1 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl">
                  Login to your account
                </h1>

                <p className="mt-3 text-sm text-gray-500">
                  Welcome back! Please enter your details.
                </p>
              </div>

              {/* =================================================
                  FORM
              ================================================= */}
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      // ✅ REQUIRED
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                {/* =================================================
                    PASSWORD
                ================================================= */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <Link
                      to="#"
                      className="text-sm font-medium text-orange-500 hover:text-orange-600"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      required
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
                    REMEMBER ME
                ================================================= */}
                <div className="flex items-center">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      className="h-4 w-4 rounded border-gray-300 accent-orange-500"
                    />
                    Remember me
                  </label>
                </div>

                {/* =================================================
                    LOGIN BUTTON
                ================================================= */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600"
                >
                  Login
                </button>
              </form>

              {/* =================================================
                  SIGN UP
              ================================================= */}
              <p className="mt-8 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-orange-500 hover:text-orange-600"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showSuccessModal}
        onClose={handleSuccessClose}
        title="Login Successful"
        type="success"
        closeOnOverlayClick={false}
      >
        <div className="text-center">
          <p className="text-sm leading-6 text-gray-500">
            Welcome! You have successfully logged in to your MoreRecipes
            account.
          </p>

          <button
            type="button"
            onClick={handleSuccessClose}
            className="mt-6 w-full rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-600"
          >
            Continue
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default LoginPage;
