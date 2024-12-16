"use client";
import React from "react";

const Enrolled = () => {
  type Enrolled = { id: number; name: string; title: string; logo: string };

  const enrolled: Enrolled[] = [
    {
      id: 1,
      name: "6+",
      title: "Years in Business",
      logo: "/timeline.png",
    },
    {
      id: 2,
      name: "37+",
      title: "Team members",
      logo: "/people.png",
    },
    {
      id: 3,
      name: "3200+",
      title: "Projects completed",
      logo: "/backlog.png",
    },
    {
      id: 4,
      name: "98%",
      title: "Customer Success",
      logo: "/teamwork.png",
    },
  ];
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900">
              Numbers tell the hard works we’ve done in last 6 years
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid sm:gap-6 px-3 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            {enrolled.map((enrolled) => (
              <div
                className="overflow-hidden cursor-default  bg-white border border-gray-200 shadow-md rounded-lg"
                key={enrolled.id}
              >
                <div className="sm:px-4 sm:py-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={enrolled.logo}
                      alt=""
                      className="h-[60px] w-[60px] "
                    />
                    <div className="ml-4 gap-1 flex">
                      <h4 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {enrolled.name}
                      </h4>
                      <p className="mt-1.5 text-lg font-medium leading-tight text-gray-500">
                        {enrolled.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrolled;
