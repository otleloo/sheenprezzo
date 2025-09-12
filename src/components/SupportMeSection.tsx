import React from "react";
import MerchandiseCard from "./MerchandiseCard";

const merchandiseData = [
  {
    imageSrc: "/tSBM.webp",
    title: "Exclusive Black Sheen Prezzo T-Shirt",
    price: "Kes 2000.00",
    link: "#",
  },
  {
    imageSrc: "/tSY.webp",
    title: "Super Fan Yellow T-Shirt",
    price: "Kes 2500.00",
    link: "#",
  },
  {
    imageSrc: "/Cap.webp",
    title: "Cozy Sheen Prezzo Cap",
    price: "Kes 700.00",
    link: "#",
  },
  {
    imageSrc: "/hoodB.webp",
    title: "Signed Hoodie",
    price: "kes 4000.00",
    link: "#",
  },
];

const SupportMeSection = () => {
  return (
    <section id="support" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          SUPPORT ME
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {merchandiseData.map((item, index) => (
            <MerchandiseCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              price={item.price}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportMeSection;
