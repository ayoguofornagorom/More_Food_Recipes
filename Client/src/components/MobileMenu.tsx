import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

interface MobileMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  openMenu,
  setOpenMenu,
  isLoggedIn,
  handleLogout,
}) => {
  if (!openMenu) return null;

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div
      className="absolute right-2 top-20 z-50 w-72 rounded-xl border border-gray-200 bg-white p-5 shadow-lg md:hidden"
      onClick={(event) => event.stopPropagation()}
    >
      {/* =========================
          Navigation Links
      ========================== */}
      <ul className="flex flex-col gap-2">
        {/* Home */}
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-300 ${
                isActive
                  ? "bg-orange-50 font-semibold text-orange-500"
                  : "text-gray-800 hover:bg-orange-50 hover:text-orange-500"
              }`
            }
          >
            <span>🏠</span>
            <span>Home</span>
          </NavLink>
        </li>

        {/* Recipes */}
        <li>
          <NavLink
            to="/recipes"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-300 ${
                isActive
                  ? "bg-orange-50 font-semibold text-orange-500"
                  : "text-gray-800 hover:bg-orange-50 hover:text-orange-500"
              }`
            }
          >
            <span>🍔</span>
            <span>Recipes</span>
          </NavLink>
        </li>

        {/* Favourites */}
        <li>
          <NavLink
            to="/favourites"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-300 ${
                isActive
                  ? "bg-orange-50 font-semibold text-orange-500"
                  : "text-gray-800 hover:bg-orange-50 hover:text-orange-500"
              }`
            }
          >
            <span>⭐</span>
            <span>Favourites</span>
          </NavLink>
        </li>

        {/* Profile */}
        <li>
          <NavLink
            to="/profile"
            onClick={closeMenu}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors duration-300 ${
                isActive
                  ? "bg-orange-50 font-semibold text-orange-500"
                  : "text-gray-800 hover:bg-orange-50 hover:text-orange-500"
              }`
            }
          >
            {/* Profile Icon */}
            <div className="relative">
              <FaUserCircle className="text-2xl" />

              {/* Notification Badge */}
              {isLoggedIn && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                  1
                </span>
              )}
            </div>

            <span>Profile</span>
          </NavLink>
        </li>
      </ul>

      {/* =========================
          Authentication
      ========================== */}
      <div className="mt-4 border-t border-gray-200 pt-4">
        {/* Logged Out */}
        {!isLoggedIn && (
          <div className="flex flex-col gap-3">
            {/* Login */}
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center gap-2 rounded-md border border-orange-500 px-4 py-2 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
            >
              <CiLogin className="text-xl" />
              Login
            </Link>

            {/* Sign Up */}
            <Link
              to="/signup"
              onClick={closeMenu}
              className="flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-600"
            >
              <IoMdPersonAdd className="text-xl" />
              Sign Up
            </Link>
          </div>
        )}

        {/* Logged In */}
        {isLoggedIn && (
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition-colors duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <FiLogOut className="text-xl" />
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
