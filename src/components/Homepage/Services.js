import React from "react";
import ServiceCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Course Counselling",
      description:
        "Our experienced counselors & advanced psychometric tests will help you to find the suitable course and the best career options for you. Here, You get the best career counselling in India.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "College Counselling",
      description:
        'Find a suitable college for your chosen course and career expectations. Also, Get "Hassle-Free" admission to the recognized colleges in India.',
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Professional Guidance",
      description:
        "Make your Journey easier with the help of the Industry's leading professionals (IITs, NITs, and MNC Professionals).",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Internship Program",
      description:
        "Get an opportunity to work as an intern in a reputed organization. An internship program will provide you skill-based training and industry exposure.",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Off Campus Placement",
      description:
        "We assure you to get you a job in a reputed organization in case Your College fails to place you.",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "5 Years Job Assistance",
      description:
        "Get Job assistance from our HR consultancy for 5 years after completing your course. This service will help you to find rewarding career opportunities in your chosen industry.",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/13087568/pexels-photo-13087568.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Find Top Colleges",
      description:
        "Find everything about your dream college on our website and Explore some other options as well. Our website contains some very useful information about the best colleges in India.",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/5474292/pexels-photo-5474292.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Find Best Courses",
      description:
        "Get information about the latest and trending course options offering the best career prospects.",
    },
  ];

  return (
    <section className="relative py-0 md:py-2 px-4 overflow-hidden">
      <header className="text-center py-4 px-4  mx-auto">
        <h1 className="text-4xl md:text-5xl text-blue-700 font-bold mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl mb-0 md:px-8 leading-relaxed text-justify md:text-center">
          We feel extremely proud that we provide the{" "}
          <strong className="font-semibold text-primary">
            Best Career Guidance in India
          </strong>
          . At IIT Academy, we aim to build great careers for young individuals
          by using advanced career guidance tools and resources.
        </p>
      </header>
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      {/* Mobile Carousel */}
      <div className="md:hidden max-w-7xl mx-5 relative z-10">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
          <div className="services-button-prev text-white text-3xl pb-2 bg-black/30 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
            ‹
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
          <div className="services-button-next text-white text-3xl pb-2 bg-black/30 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer">
            ›
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".services-button-next",
            prevEl: ".services-button-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          loop={true}
          spaceBetween={20}
          className="pb-12"
        >
          {servicesData.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto relative z-10 mr-[2%] ml-[2%]">
        {servicesData.map((service, id) => (
          <div
            key={id}
            className="relative group pt-5 pb-5 p-4 rounded-2xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            {/* Decorative Top-Left Dots */}
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <svg
                width="60"
                height="60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {Array.from({ length: 4 }).map((_, row) =>
                  Array.from({ length: 5 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={col * 12 + 5}
                      cy={row * 12 + 5}
                      r="2"
                      fill="#D1D5DB"
                    />
                  ))
                )}
              </svg>
            </div>
            {/* Main Content */}
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />

            {/* Decorative Bottom-Right Shape */}
            <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="80"
                  height="80"
                  rx="20"
                  ry="20"
                  fill="#1E3A8A"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
