import React from "react";
import { benefits } from "../../constants";

const HomeWhyChooseUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 dark:bg-[#060417]">
      <div className="max-w-5xl mx-auto text-center px-5 xl:px-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-white">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-6 rounded-lg shadow-lg border hover:border-sky-800 cursor-pointer transition-all duration-500 dark:bg-gray-800"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 dark:text-gray-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
