/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Gallery from '@/components/Gallery';
const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <div className="mt-4 block  w-[100vw]   ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white flex flex-row gap-20 mt-20  mx-20 justify-center items-center w-[100vw] px-10"
        >
          <div className="flex relative">
            <div className=" absolute top-0 right-60 [font-family:'Montserrat-Bold',Helvetica] font-bold text-[#c85a74] text-[115px] tracking-[0] leading-[138.0px]">
              About
              <br />
              Me
            </div>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-[446px] h-[595px] object-cover"
              alt="Photo"
              src="/assets/about-me.png"
            />
          </div>
          <div className="">
            <p className=" w-[706px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#212b36]  text-lg tracking-[0] leading-2">
              Hey there! <br />I m a passionate UI/UX designer with a knack for
              creating intuitive and delightful digital experiences. I
              kick-started my journey during my final year of engineering at
              college when I landed an internship at AUDI, where I had the
              privilege to hone my skills in crafting user-centric designs for
              automotive interfaces. Fast forward to today, with over 2 years of
              experience in the field, Ive dived deep into the world of
              SAAS-based products, crafting seamless interactions that make
              users lives easier. My journey began by designing and developing
              websites and apps for friends and family, and from there, I
              launched into the world of freelancing, constantly seeking fresh
              challenges and innovative solutions to make every users experience
              extraordinary.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties
          transition={{ duration: 0.6 }}
          className=" py-10  bg-[#fff2f3]"
        >
          <motion.div
            initial={{ opacity: 0 }} // Initial animation properties for child element
            animate={{ opacity: 1 }} // Animation properties for child element
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-8 flex-col justify-center"
          >
            <div>
              <h4 className=" [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#c85a74] text-[40px] text-center tracking-[0] leading-[48.0px] ">
                Life Beyond Design
              </h4>
              <div className="flex mt-4 w-full justify-center">
                <div className="border-t-2  border-gray-200 w-[30%] h-0"></div>
              </div>
            </div>
            <div className="flex  justify-center">
              <div className=" w-[50%]  text-center  font-light text-[#637381] text-[14px]  ">
                Outside the world of design, I'm a big fan of yoga and running
                they keep me grounded and energized. When I'm not chasing pixels
                or perfecting user experiences, I'm chasing shuttlecocks on the
                badminton court. Traveling is my ultimate escape, and I've been
                a travel freak since my childhood, exploring new places,
                cultures, and cuisines. I'm also an artist at heart, turning
                real-life moments into sketches, both on paper and digitally.
                Clicking sunrises and sunsets is my therapy, and I love
                capturing life's candid moments through my lens.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Gallery />
    </>
  );
};

export default page;
