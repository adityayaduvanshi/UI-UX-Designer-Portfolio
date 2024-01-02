import React from 'react';
import Image from 'next/image';

const PlainGround = ({ imageSource, imageAlt, title }) => {
  return (
    <div className="bg-white py-10 px-10 shadow-md">
      <div className="flex justify-around">
        <div className="flex justify-center items-center max-w-[380px]">
          <h2 className="text-[35px] font-semibold">{title}</h2>
        </div>
        <div className="relative w-[700px] h-[300px] ">
          <Image
            src={imageSource}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PlainGround;
