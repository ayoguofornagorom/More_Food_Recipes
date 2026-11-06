import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "Favourites", href: "/favourites" },
];

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Temporary login state for testing.
  // This will later come from your authentication system.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOpenMenu(false);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      <nav className="relative flex h-20 items-center justify-between px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-xl font-bold">
          <span className="text-gray-800">More</span>
          <span className="text-orange-500">Recipes</span>
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Navigation Links */}
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "font-semibold text-orange-500"
                        : "text-gray-800 hover:text-orange-500"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Authentication */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                {/* Login */}
                <Link
                  to="/login"
                  className="rounded-md border border-orange-500 px-4 py-2 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                >
                  Login
                </Link>

                {/* Sign Up */}
                <Link
                  to="/signup"
                  className="rounded-md bg-orange-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-orange-600"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                {/* Profile Icon */}
                <Link
                  to="/profile"
                  aria-label="Profile"
                  className="relative text-gray-700 transition-colors duration-300 hover:text-orange-500"
                >
                  <FaUserCircle className="text-3xl" />

                  {/* Notification Badge */}
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                    1
                  </span>
                </Link>

                {/* Log Out */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition-colors duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <FiLogOut />
                  Log Out
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={
              openMenu ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={openMenu}
            onClick={toggleMenu}
            className="text-3xl text-gray-800 transition-colors duration-300 hover:text-orange-500"
          >
            {openMenu ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      </nav>
    </header>
  );
};

export default Navbar;
