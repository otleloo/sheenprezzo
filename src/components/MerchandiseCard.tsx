import React from 'react';
import Image from 'next/image';

interface MerchandiseCardProps {
  imageSrc: string;
  title: string;
  price: string;
  link: string;
}

const MerchandiseCard: React.FC<MerchandiseCardProps> = ({ imageSrc, title, price, link }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        width={300} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-300 text-xl font-bold mb-4">{price}</p>
        <a
          href={`https://wa.me/254743098036?text=I%20want%20to%20buy%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 text-white text-center py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default MerchandiseCard;
