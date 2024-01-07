/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PlainGround from '@/components/Portfolio/PlainGroud';
import PlainGround2 from '@/components/Portfolio/PlainGround2';
import Preloader from '@/components/Preloader';
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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="w-[100vw] pb-10 overflow-x-hidden">
        <div className="flex  px-40   my-20  overflow-x-hidden">
          <h3 className=" font-normal leading-[96px] text-[4rem] text-custom-blue ">
            Design for the user <br /> everything else will follow...
          </h3>
        </div>

        <PlainGround
          subtitle="Revolutionizing Construction Commerce"
          link="ebazar"
          imageSource="/assets/portfolio-2.png"
          imageAlt="eBuildBazaar"
          title="eBuildBazaar"
          tags={['Website', 'Revamp']}
        />
        <PlainGround2
          subtitle="Simplifying HR Management with Innovative Solutions"
          link="hrms"
          imageSource="/assets/portfolio-3.png"
          imageAlt="Texla Culture"
          title="Texla Culture"
          tags={['UX Research', 'Mobile Design']}
        />
        <PlainGround
          link=""
          imageSource="/assets/panthion.png"
          imageAlt="Panthion"
          subtitle="Startup Metrics Visualization"
          tags={['Dashboard', 'Product Design']}
          title="Panthion"
        />
      </div>
    </>
  );
};

export default page;
