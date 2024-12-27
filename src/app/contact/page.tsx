"use client";

import Footer from "@/layout/Footer";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  let [fullName, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [companyName, setCompanyName] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let data = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      companyName: companyName,
      message: message,
    };

    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:9000/company-form/sent-form",
        data: data,
      });
      console.log(result.data);
      toast.success(`${result.data.message}`);
      setFullname("");
      setEmail("");
      setPhoneNumber("");
      setCompanyName("");
      setMessage("");
    } catch (error) {}
  };

  type Contact = {
    id: number;
    icon: string;
    title: string;
    description: string;
  };

  const contacts: Contact[] = [
    {
      id: 1,
      icon: "/location.png",
      title: "Location",
      description: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      icon: "/mobile.png",
      title: "Phone",
      description: "+977-9749856214",
    },
    {
      id: 3,
      icon: "/email.png",
      title: "Email",
      description: "prabin.shresthadev77@gmail.com",
    },
  ];
  return (
    <div>
      <ToastContainer />
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid md:grid-cols-3 placei">
              {contacts.map((contact) => (
                <div
                  className="overflow-hidden bg-white rounded-xl"
                  key={contact.id}
                >
                  <div className="p-6 flex items-center justify-center flex-col sm:flex sm:items-center sm:justify-center sm:flex-col">
                    <img
                      src={contact.icon}
                      alt=""
                      className="h-[40px] w-[40px]  "
                    />
                    <p className="mt-6 text-lg font-medium text-gray-900">
                      {contact.title}
                    </p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {contact.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={fullName}
                          onChange={(event) => {
                            setFullname(event.target.value);
                          }}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phonenumber"
                          value={phoneNumber}
                          onChange={(event) => {
                            setPhoneNumber(event.target.value);
                          }}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Company name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={companyName}
                          onChange={(event) => {
                            setCompanyName(event.target.value);
                          }}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Message{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="message"
                          value={message}
                          onChange={(event) => {
                            setMessage(event.target.value);
                          }}
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows={4}
                        ></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
