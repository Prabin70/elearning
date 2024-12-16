"use client";
const page = () => {
  type Tutorial = {
    id: number;
    image: string;
    title: string;
    description: string;
  };

  const tutorials: Tutorial[] = [
    {
      id: 1,
      image: "html.png",
      title: "HTML",
      description:
        "Encourage students to give and receive constructive peer feedback to enhance the learning experience..",
    },
    {
      id: 2,
      image: "css.png",
      title: "CSS",
      description:
        "Provide personalized feedback on student submissions directly from instructors. directly from instructors.",
    },
    {
      id: 3,
      image: "js.png",
      title: "JavaScript",
      description:
        "Create a space where learners can engage in discussions, ask questions, and share insights",
    },
    {
      id: 4,
      image: "nodejs.png",
      title: "Node.js",
      description:
        "Enable groups to review each other's group work promoting collaborative feedback.collaborative feedback.",
    },
    {
      id: 5,
      image: "react.png",
      title: "React",
      description:
        "Collect information with customizable forms to streamline communication and data collection.",
    },
    {
      id: 6,
      image: "mongo.png",
      title: "MongoDB",
      description:
        "Promote collaboration by allowing students to discuss their group work and receive feedback.",
    },
    {
      id: 7,
      image: "tailwind.png",
      title: "Tailwind",
      description:
        "Encourage students to create a discussion board to foster collaboration and communication.",
    },
    {
      id: 8,
      image: "redux.png",
      title: "ReduxToolKit",
      description:
        "Manage multiple branches with unique branding, courses, and user roles—all from one platform.",
    },
  ];

  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Tutorials of our courses
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorials) => (
              <div
                className="overflow-hidden bg-white rounded shadow"
                key={tutorials.id}
              >
                <div className="p-8">
                  <div className="flex items-center">
                    <img
                      src={tutorials.image}
                      className="h-[50px] w-[50px] "
                      alt=""
                    />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">
                        {tutorials.title}
                      </p>
                      <p className="mt-px text-sm text-gray-600">
                        {tutorials.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">
                    {tutorials.description}
                  </p>
                </div>
                <div className="flex items-center justify-center mb-5  ">
                  <button className="px-2 py-1 bg-blue-700 hover:bg-blue-800 transition-all rounded-md text-white  ">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
