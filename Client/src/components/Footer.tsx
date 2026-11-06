import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF7ED] text-gray-800">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-14 lg:px-16 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col md:items-start items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              More<span className="text-orange-500">Recipes</span>
            </Link>

            <p className="mt-3 text-sm font-medium text-gray-700">
              Good food. Better together.
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600 text-start">
              Discover, share and enjoy delicious recipes from our amazing
              community.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <FaFacebookF className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <FaInstagram className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <FaXTwitter className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 hover:-translate-y-1"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-gray-900">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/recipes"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Recipes
                </Link>
              </li>

              <li>
                <Link
                  to="/favourites"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Favourites
                </Link>
              </li>

              <li>
                <Link
                  to="/profile"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:text-start">
            <h3 className="text-base font-bold text-gray-900">Support</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/help"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-gray-600 transition-colors hover:text-orange-500"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold text-gray-900">Stay Updated</h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Get the latest recipes and cooking tips straight to your inbox.
            </p>

            <form className="mt-5 flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-md border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-orange-500"
              />

              <button
                type="submit"
                className="rounded-r-md bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-orange-100">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-600 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} MoreRecipes. All rights reserved.</p>

          <p>
            Made with <span className="text-red-500">♥</span> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
