"use client";

import Cross from "@/ui/Cross";
import Menu from "@/ui/Menu";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  let [isMenuOpen, setMenuOpen] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  let handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header className=" w-full bg-gray-50 border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-blue-700">
              skill<span className="text-yellow-400">Sphare</span>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <Cross /> : <Menu />}
        </button>

        {/* Links Section (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Blogs
          </Link>
          <Link
            href="/courses"
            className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Courses
          </Link>
          <Link
            href="/tutorial"
            className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Tutorial
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Contact
          </Link>
          {!isLoggedIn ? (
            <>
              <Link
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                Sign up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Log out
            </button>
          )}
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-neutral-800 md:hidden flex flex-col items-start gap-4 px-6 py-4">
            <Link
              href="/"
              className="w-full text-gray-800 hover:bg-gray-200 py-2 rounded-md dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="w-full text-gray-800 hover:bg-gray-200 py-2 rounded-md dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/courses"
              className="w-full text-gray-800 hover:bg-gray-200 py-2 rounded-md dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/tutorial"
              className="w-full text-gray-800 hover:bg-gray-200 py-2 rounded-md dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              Tutorial
            </Link>
            <Link
              href="/contact"
              className="w-full text-gray-800 hover:bg-gray-200 py-2 rounded-md dark:text-white dark:hover:bg-neutral-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="w-full px-4 py-2 bg-yellow-500 text-white rounded-md text-center hover:bg-yellow-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700"
              >
                Log out
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
