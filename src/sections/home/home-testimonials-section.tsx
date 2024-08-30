import { useRef } from "react";
import Slider from "react-slick";
import { testimonialsSettings } from "../../utils/react-slick-utils";
import { testimonials } from "../../constants";

const HomeTestimonialsSection = () => {
  const bannerRef = useRef<Slider | null>(null);

  const previous = () => {
    bannerRef.current?.slickPrev();
  };

  const next = () => {
    bannerRef.current?.slickNext();
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-5xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Short quotes from satisfied customers
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          <button
            onClick={previous}
            title="left arrow"
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  xl:block  border-sky-800 hover:bg-sky-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="w-full">
            <Slider {...testimonialsSettings} ref={bannerRef}>
              {testimonials.map((item, i) => (
                <div key={i}>
                  <p className="flex items-center text-center text-gray-500 lg:mx-8">
                    {item.testimonial}
                  </p>

                  <div className="flex flex-col items-center justify-center mt-8">
                    <img
                      className="object-cover rounded-full w-14 h-14"
                      src={item.image}
                      alt=""
                    />

                    <div className="mt-4 text-center">
                      <h1 className="font-semibold text-gray-800 dark:text-white">
                        {item.name}
                      </h1>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <button
            onClick={next}
            title="right arrow"
            className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100   xl:block  border-sky-800 hover:bg-sky-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
