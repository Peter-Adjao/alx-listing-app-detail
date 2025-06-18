import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/interfaces';
import Button from '@/components/common/Button';

const Card: React.FC<CardProps> = ({ title, description, image, rating }) => {
  return (
    <div className=" overflow-hidden bg-white">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-xl font-semibold">{title}</h2>

          <div className="flex items-center">
            <Image src="/assets/star.png" alt="Star" width={20} height={20} />
            <p className="font-medium text-[17px] ml-2">{rating}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2">{description}</p>

        {/*  Buttons for actions */}
        <div className="mt-4 flex gap-2">
          <Button label="Book Now" onClick={() => alert(`Booking ${title}`)} />
          <Button label="Details" onClick={() => alert(`Viewing details for ${title}`)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
