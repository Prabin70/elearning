"use client";
import Cross from "@/ui/Cross";
import Menu from "@/ui/Menu";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  let [isMenuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  let handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div>
      <header className="flex flex-wrap  backdrop-blur-3xl  md:justify-start md:flex-nowrap z-50 w-full bg-white border border-gray-200 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-x-1">
            <Link
              className="flex items-center gap-3 font-semibold h-[50px] w-[50px] text-black focus:outline-none focus:opacity-80 dark:text-white"
              href="/"
              aria-label="Brand"
            >
              <img src="/logo.webp" alt="" />
              <p className="text-blue-700 flex text-xl font-bold">
                skill <span className="text-yellow-400">Sphare</span>
              </p>
            </Link>

            <button
              className="p-2 rounded-lg flex md:hidden"
              onClick={() => {
                setMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <Cross /> : <Menu />}
            </button>
            <div
              className={`fixed bg-gray-200 top-12 h-[360px] w-[auto] inset-0 transition-transform transform md:hidden flex flex-col items-start gap-4 px-6 py-8 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Link
                href="/"
                className="text-lg text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blogs"
                className="text-lg text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/courses"
                className="text-lg text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/tutorial"
                className="text-lg text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Tutorial
              </Link>
              <Link
                href="/contact"
                className="text-lg text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              {!isLoggedIn ? (
                <div className="flex flex-col gap-2 w-full">
                  <Link
                    href="/login"
                    className="py-2 text-center rounded-md bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="py-2 text-center rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="py-2 w-full text-center rounded-md bg-red-600 text-white hover:bg-red-700"
                >
                  Log out
                </button>
              )}
            </div>
          </div>

          <div
            id="hs-header-base"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
            aria-labelledby="hs-header-base-collapse"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                    <Link
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="/tutorial"
                    >
                      Home
                    </Link>
                    <Link
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="/"
                    >
                      Blogs
                    </Link>

                    <Link
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="/tutorial"
                    >
                      Tutorial
                    </Link>

                    <Link
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="notes"
                    >
                      Notes
                    </Link>

                    <Link
                      className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                <div className="my-2 md:my-0 md:mx-2">
                  <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
                </div>

                {!isLoggedIn ? (
                  <div className=" flex flex-wrap items-center gap-x-1.5">
                    <Link
                      className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="/login"
                    >
                      Log in
                    </Link>
                    <Link
                      className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                      href="/signup"
                    >
                      Sign up
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
