import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const PlainGround = ({ imageSource, imageAlt, title, link }) => {
  return (
    <div className="bg-white py-10 px-10 shadow-md">
      <div className="flex justify-around">
        <div className="flex justify-center items-center max-w-[380px]">
          <Link href={`/portfolio/${link}`}>
            <h2 className="text-[35px] cursor-pointer  font-semibold ">
              {title}
            </h2>
          </Link>
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
