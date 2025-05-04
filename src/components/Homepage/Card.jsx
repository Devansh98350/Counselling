import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative z-10 h-[360px] flex flex-col">
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-[150px] overflow-hidden rounded-lg mb-2.5">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-semibold text-primary mb-2 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-10 after:h-[3px] after:bg-secondary after:transition-all after:duration-300 group-hover:after:w-[60px] text-center">
          {title}
        </h2>
        <p className="text-base leading-relaxed flex-grow text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
