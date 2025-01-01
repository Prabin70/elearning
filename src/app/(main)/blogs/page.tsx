import Footer from "@/layout/Footer";
import React from "react";

const about = () => {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <img
                className="w-full max-w-md mx-auto"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png"
                alt=""
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow your coding skills with sillSphare.
              </h2>
              <p className="mt-6 text-base text-gray-600">
                Here is our latest blogs and here you will get all the required
                knowledge and experience related to the programming and loic
                building process that will be used to build the application
                which helps you to be a productive.
              </p>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {" "}
                Check all 1486 apps{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Latest from blog
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Here you will be connected with the exports working in big company
              around the world...
            </p>
          </div>

          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg"
                  alt=""
                />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9">
                {" "}
                Technology{" "}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black">
                  {" "}
                  How to mange your remote team?{" "}
                </a>
              </p>
              <p className="mt-4 text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Martin Jones . June 12, 2021{" "}
              </span>
            </div>

            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg"
                  alt=""
                />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9">
                {" "}
                Marketing{" "}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black">
                  {" "}
                  6 Product launching emails you want to use on next campaign.{" "}
                </a>
              </p>
              <p className="mt-4 text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Martin Jones . June 12, 2021{" "}
              </span>
            </div>

            <div>
              <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg"
                  alt=""
                />
              </a>
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-green-500 bg-sky-100 mt-9">
                {" "}
                Programming{" "}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href="#" title="" className="text-black">
                  {" "}
                  Learn from the best: 7 email marketing ideas you can use{" "}
                </a>
              </p>
              <p className="mt-4 text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {" "}
                Martin Jones . June 12, 2021{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default about;
