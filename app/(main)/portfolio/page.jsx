/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import ColoredGround from '../../../components/Portfolio/ColoredGround';
import PlainGround from '@/components/Portfolio/PlainGroud';
import PlainGround2 from '@/components/Portfolio/PlainGround2';

const page = () => {
  return (
    <div className="w-[100vw] pb-10 overflow-x-hidden">
      <div className="flex  px-40   my-20  overflow-x-hidden">
        {/* <h3 className="  [font-family:'Montserrat',Helvetica] font-thin text-[4rem] text-custom-blue overflow-x-hidden ">
          Design for the user <br /> everything else will follow
        </h3> */}
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
  );
};

export default page;
