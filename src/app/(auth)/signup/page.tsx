"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = { name, email, password };

    try {
      const result = await axios.post(
        "http://localhost:9000/user/register",
        data
      );

      console.log(result.data);
      toast.success("User registered successful...!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error("Failed to register. Please try again later.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <section className="py-10 bg-gradient-to-br from-blue-100 to-red-100 sm:py-16 lg:py-15">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Create free account
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              You can create a free Celebration account in 2 minutes
            </p>
          </div>
          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
              <div className="px-4 py-6 sm:px-8 sm:py-5">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                      />
                    </div>
                    <div className="relative">
                      <div
                        className="absolute right-3  top-2.5 rounded-xl  p-2  cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {inputType === "password" ? (
                          <img src="/eye.png" height={20} width={20} />
                        ) : (
                          <img src="/closedeye.png" height={20} width={20} />
                        )}
                      </div>
                      <input
                        type={inputType}
                        name="password"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 "
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        required
                        type="checkbox"
                        name="agree"
                        id="agree"
                        className="w-5 h-5 text-green-500 bg-white border-gray-200 rounded"
                      />
                      <label htmlFor="agree" className="ml-2 text-gray-600">
                        I agree to the terms and conditions
                      </label>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Create account
                      </button>
                    </div>
                    <div className="text-center">
                      <p className="text-base text-gray-600">
                        Already have an account?{" "}
                        <a
                          href="/auth/login"
                          title=""
                          className="font-medium text-blue-500 transition-all duration-200 hover:text-blue-600 hover:underline"
                        >
                          Login here
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
