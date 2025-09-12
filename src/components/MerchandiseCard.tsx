import React from "react";
import Image from "next/image";

interface MerchandiseCardProps {
  imageSrc: string;
  title: string;
  price: string;
  link: string;
}

const MerchandiseCard: React.FC<MerchandiseCardProps> = ({
  imageSrc,
  title,
  price,
  link,
}) => {
  return (
    <div className="transform overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mb-4 text-xl font-bold text-gray-300">{price}</p>
        <a
          href={`https://wa.me/254743098036?text=I%20want%20to%20buy%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-md bg-green-600 py-2 text-center font-medium text-white transition-colors hover:bg-green-700"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default MerchandiseCard;
