import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhoAreWe = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    {
      id: 1,
      icon: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      points: [
        "Prepare a Roadmap for Your Career with the help of the best career counselling in India.",
        "Overcome your Career insecurities, anxious and procrastinating behavior.",
      ],
    },
    {
      id: 2,
      icon: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      points: [
        "Get Credible information and authentic reviews of top colleges in India.",
        "Find a top Colleges with the help of the best Career guidance company in India.",
      ],
    },
    {
      id: 3,
      icon: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
      points: [
        "Get insights into the trending career options. Find an Apt Course for your profile.",
        "Explore the off-beat courses with the help of No. 1 Career Counselling Company in India.",
      ],
    },
  ];
  const slides = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Online Course counselling",
      description:
        "We use various tools to determine your undiscovered skillsets & abilities and then based on these abilities, we suggest you the best Career and course associated with that career path.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Online College counselling",
      description:
        "Finding the right college is more like 'Finding a Needle in the Haystack'. But Don't worry! We will provide you with credible information about best colleges in India that will suit your course and interests.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Online Career counselling",
      description:
        "We will assist you to nurture your career development goals by analyzing your personality and aptitude. After that, we will determine the best practices which can help you to build a satisfying career.",
    },
  ];
  return (
    <section className="relative py-16 md:py-8 mt-[-2rem] md:mt-[0rem] bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="relative mr-[2%] ml-[2%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-800">
          Who are we?
        </h2>
        <p className="text-lg md:text-xl mb-0 md:px-5 leading-relaxed text-justify md:text-center">
          IIT Academy is a smart career guidance platform designed to cater to
          the needs of the students who are looking forward to building
          successful careers in the future. Here, We have combined technology,
          traditional counseling services, and admission assistance services to
          form a platform where you can find all the career guidance services
          under one roof.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-12">
          {/* Features Section */}
          <div className="flex md:flex-col justify-center lg:items-start gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className="cursor-pointer lg:w-auto flex flex-row items-center gap-4 p-3 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Show points only on md+ screens */}
                <div className="flex-1 hidden md:block">
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex gap-3 mb-3 last:mb-0">
                      <span className="text-teal-500 flex-shrink-0">✓</span>
                      <p className="">{point}</p>
                    </div>
                  ))}
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    swiperRef.current?.slideToLoop(index);
                  }}
                  className={`hidden md:flex h-10 w-10 text-3xl rounded-full bg-black/50 justify-center items-center pb-2 mt-4 md:mt-9 md:-mr-6 cursor-pointer transition-transform duration-300 ${
                    activeIndex === index
                      ? "scale-130 translate-x-1 bg-blue-700"
                      : "hover:scale-130 hover:translate-x-1"
                  }`}
                >
                  <button className="text-white">›</button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
            <Swiper
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: ".button-next",
                prevEl: ".button-prev",
              }}
              loop={true}
              className="rounded-xl relative"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="p-2 sm:p-4">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[180px] md:h-[250px] object-cover rounded-xl mb-4 sm:mb-5"
                    />
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 text-center">
                      {slide.title}
                    </h3>
                    <p className=" leading-relaxed mb-6 sm:mb-9 text-sm sm:text-base text-justify">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="button-prev absolute bottom-0 text-3xl left-4 z-10 text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center pb-2 cursor-pointer">
                ‹
              </div>
              <div className="button-next absolute bottom-0 text-3xl right-4 z-10 text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center pb-2 cursor-pointer">
                ›
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
