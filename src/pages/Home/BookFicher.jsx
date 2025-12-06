import React from "react";
const features = [
  {
    title: "Creative writing",
    description: "Consectetur adipiscing elit.",
    imgSrc: "", // Add your image src here
  },
  {
    title: "Group reading",
    description: "Consectetur adipiscing elit.",
    imgSrc: "", // Add your image src here
  },
  {
    title: "Arts & craft",
    description: "Consectetur adipiscing elit.",
    imgSrc: "", // Add your image src here
  },
  {
    title: "Poetry classes",
    description: "Consectetur adipiscing elit.",
    imgSrc: "", // Add your image src here
  },
];

const BookFicher = () => {
  return (
    <div>
      <section className="bg-[#f5f1e6] py-12 px-6 md:px-16">
        <div className=" md:w-10/12  mx-auto flex flex-col md:flex-row  justify-between items-start md:items-center gap-10">
          {/* Left Text Content */}
          <div className="md:flex-1 max-w-xl">
            <p className="text-green-700 uppercase text-xs font-semibold mb-3">
              WELCOME
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-green-800 mb-4 leading-tight">
              Join Blacks and explore artistic features
            </h2>
            <p className="text-gray-600 mb-6">
              We appreciate your trust. Our clients choose us and our products
              because they know we're the best.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium transition">
              About Us
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:flex-1 md:max-w-xl">
            {features.map(({ title, description, imgSrc }, idx) => (
              <div
                key={idx}
                className="bg-[#fef9f3] px-25 py-10 rounded-lg shadow-md flex flex-col justify-center"
              >
                {/* If you want to add images, uncomment below and provide imgSrc */}
                {/* {imgSrc && (
                <img src={imgSrc} alt={title} className="mb-4 w-full h-32 object-cover rounded" />
              )} */}
                <h3 className="text-green-800 font-serif text-lg mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookFicher;
