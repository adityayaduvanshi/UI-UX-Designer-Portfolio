import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const PlainGround2 = ({
  imageSource,
  imageAlt,
  subtitle,
  title,
  link,
  tags,
}) => {
  return (
    <div className="bg-white py-10 px-40 ">
      <div className="flex justify-between">
        <div className="relative w-[700px] h-[400px] ">
          <Image
            src={imageSource}
            alt={imageAlt}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col justify-center max-w-[380px]">
          <div>
            <h2 className="text-[3rem] cursor-pointer  text-[#212B36] font-medium">
              {title}
            </h2>
            <p className=" text-[#637381]  text-2xl ">{subtitle}</p>
          </div>
          <div className="flex mt-4 gap-4 ">
            {tags.map((item) => (
              <div
                key={item}
                className="  rounded-[100px] font-semibold  text-[#919EAB] text-center py-[3px] px-[22px] bg-greyish"
              >
                {item}
              </div>
            ))}
          </div>
          <Link className=" cursor-pointer  mt-8 " href={`/portfolio/${link}`}>
            <h4 className=" text-custom-blue underline text-xl font-semibold ">
              View Case Study
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlainGround2;
