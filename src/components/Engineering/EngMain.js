import React, { useEffect } from "react";
import Layout from "../Layout";

import iitMadras from "../../assests/Engineering/IITs/IIT_Madras.png";
import iitDelhi from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitBombay from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitKanpur from "../../assests/Engineering/IITs/IIT_Kanpur.png"; // Replace with the actual path
import iitRoorkee from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitKharagpur from "../../assests/Engineering/IITs/IIT_Kharagpur.png";
import iitGuwahati from "../../assests/Engineering/IITs/IIT_Guwahati.png";
import iitHyderabad from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitBHU from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitISMDhanbad from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitIndore from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitRopar from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitMandi from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitGandhinagar from "../../assests/Engineering/IITs/IIT_Gandhinagar.png";
import iitJodhpur from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitPatna from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitBhubaneshwar from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitTirupati from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitPalakkad from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitJammu from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitDharwad from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitBhilai from "../../assests/Engineering/IITs/IIT_Bhilai.png";
import iitGoa from "../../assests/Engineering/IITs/IIT_Bhilai.png";

const iits = [
  {
    id: 1,
    name: "IIT Madras",
    ranking: 1,
    year: 1959,
    imageSrc: iitMadras,
    href: "/iits-details/madras",
  },
  {
    id: 2,
    name: "IIT Delhi",
    ranking: 2,
    year: 1963,
    imageSrc: iitDelhi,
    href: "/iits-details/delhi",
  },
  {
    id: 3,
    name: "IIT Bombay",
    ranking: 3,
    year: 1958,
    imageSrc: iitBombay,
    href: "/iits-details/bombay",
  },
  {
    id: 4,
    name: "IIT Kanpur",
    href: "/iits-details/kanpur",
    imageSrc: iitKanpur,
    imageAlt: "IIT Kanpur",
    ranking: 4,
    year: 1959,
  },
  {
    id: 5,
    name: "IIT Roorkee",
    href: "/iits-details/roorkee",
    imageSrc: iitRoorkee,
    imageAlt: "IIT Roorkee",
    ranking: 5,
    year: 1951,
  },
  {
    id: 6,
    name: "IIT Kharagpur",
    href: "/iits-details/kharagpur",
    imageSrc: iitKharagpur,
    imageAlt: "IIT Kharagpur",
    year: 1951,
    ranking: 6,
  },
  {
    id: 7,
    name: "IIT Guwahati",
    href: "/iits-details/guwahati",
    imageSrc: iitGuwahati,
    imageAlt: "IIT Guwahati",
    year: 1994,
    ranking: 7,
  },
  {
    id: 8,
    name: "IIT Hyderabad",
    href: "/iits-details/hyderabad",
    imageSrc: iitHyderabad,
    imageAlt: "IIT Hyderabad",
    ranking: 8,
    year: 2008,
  },
  {
    id: 9,
    name: "IIT BHU",
    href: "/iits-details/bhu",
    imageSrc: iitBHU,
    imageAlt: "IIT BHU",
    ranking: 15,
    year: 1926,
  },
  {
    id: 10,
    name: "IIT ISM Dhanbad",
    href: "/iits-details/ism-dhanbad",
    imageSrc: iitISMDhanbad,
    imageAlt: "IIT ISM Dhanbad",
    ranking: 17,
    year: 2009,
  },
  {
    id: 11,
    name: "IIT Indore",
    ranking: 14,
    establishmentYear: 2008,
    href: "/iits-details/indore",
    imageSrc: iitIndore,
    imageAlt: "IIT Indore",
    year: 2008,
  },
  {
    id: 12,
    name: "IIT Ropar",
    ranking: 22,
    establishmentYear: 2008,
    href: "/iits-details/ropar",
    imageSrc: iitRopar,
    imageAlt: "IIT Ropar",
    year: 2008,
  },
  {
    id: 13,
    name: "IIT Mandi",
    ranking: 33,
    year: 2008,
    href: "/iits-details/mandi",
    imageSrc: iitMandi,
    imageAlt: "IIT Mandi",
  },
  {
    id: 14,
    name: "IIT Gandhinagar",
    ranking: 18,
    year: 2008,
    href: "/iits-details/gandhinagar",
    imageSrc: iitGandhinagar,
    imageAlt: "IIT Gandhinagar",
  },
  {
    id: 15,
    name: "IIT Jodhpur",
    ranking: 30,
    year: 2009,
    href: "/iits-details/jodhpur",
    imageSrc: iitJodhpur,
    imageAlt: "IIT Jodhpur",
  },
  {
    id: 16,
    name: "IIT Patna",
    ranking: 41,
    year: 2008,
    href: "/iits-details/patna",
    imageSrc: iitPatna,
    imageAlt: "IIT Patna",
  },
  {
    id: 17,
    name: "IIT Bhubaneshwar",
    ranking: 27,
    year: 2015,
    href: "/iits-details/bhubaneshwar",
    imageSrc: iitBhubaneshwar,
    imageAlt: "IIT Bhubaneshwar",
  },
  {
    id: 18,
    name: "IIT Tirupati",
    ranking: 59,
    year: 2016,
    href: "/iits-details/tirupati",
    imageSrc: iitTirupati,
    imageAlt: "IIT Tirupati",
  },
  {
    id: 19,
    name: "IIT Palakkad",
    ranking: 69,
    year: 2016,
    href: "/iits-details/palakkad",
    imageSrc: iitPalakkad,
    imageAlt: "IIT Palakkad",
  },
  {
    id: 20,
    name: "IIT Jammu",
    ranking: 67,
    year: 2016,
    href: "/iits-details/jammu",
    imageSrc: iitJammu,
    imageAlt: "IIT Jammu",
  },
  {
    id: 21,
    name: "IIT Dharwad",
    ranking: 93,
    year: 2016,
    href: "/iits-details/dharwad",
    imageSrc: iitDharwad,
    imageAlt: "IIT Dharwad",
  },
  {
    id: 22,
    name: "IIT Bhilai",
    ranking: 81,
    year: 2015,
    href: "/iits-details/bhilai",
    imageSrc: iitBhilai,
    imageAlt: "IIT Bhilai",
  },
  {
    id: 23,
    name: "IIT Goa",
    ranking: 90,
    year: 2016,
    href: "/iits-details/goa",
    imageSrc: iitGoa,
    imageAlt: "IIT Goa",
  },
];

const EngMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="IITs Details">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {iits.map((product) => (
              <div
                key={product.id}
                className="group relative border-4 border-orange-500"
              >
                <div className="border-b-4 border-orange-500 aspect-h-16 aspect-w-25 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-100 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-gray-900 block">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-lg text-gray-900 block">
                    <strong>Foundation Year:</strong> {product.year}
                  </p>
                  <p className="mt-1 text-lg text-gray-900 block">
                    <strong>NIRF Ranking (2023):</strong> {product.ranking}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EngMain;
