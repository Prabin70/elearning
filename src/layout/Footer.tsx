"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-4">
              <img
                src="/logo.png"
                alt="SkillSphare Logo"
                className="h-12 w-12 rounded-full"
              />
              <h1 className="text-2xl font-bold text-blue-700">
                Skill <span className="text-yellow-500">Sphare</span>
              </h1>
            </Link>
            <p className="text-sm leading-6 text-gray-400">
              SkillSphare is your go-to platform for learning coding techniques
              in a fraction of the time it took us to master them. It's free and
              packed with resources!
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Help</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest tutorials and insights.
            </p>
            <form action="#" method="POST">
              <div className="flex items-center gap-2">
                <div className="group">
                  <input
                    type="text"
                    className="input px-2 py-1 outline-none border-none focus:outline-none text-gray-900"
                    placeholder="Email"
                  />
                </div>
                <button className="button border border-gray-500 px-2 py-1 hover:bg-gray-500 hover:text-gray-950 transition-all ease-in-out duration-300">
                  <p className="text">Subscribe</p>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} SkillSphare. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
