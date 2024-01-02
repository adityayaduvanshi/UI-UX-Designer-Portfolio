/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const ColoredGround = ({
  backgroundImage,
  imageSource,
  imageAlt,
  title,
  bgColor,
  py,
  px,
}) => {
  return (
    <div className={`bg-sky-100 py-10 px-10  drop-shadow-lg`}>
      <div className="flex justify-around">
        <div className="relative w-[700px] h-[300px] ">
          <Image
            src={imageSource}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex justify-center items-center max-w-[380px]">
          <h2 className="text-[35px] font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ColoredGround;
