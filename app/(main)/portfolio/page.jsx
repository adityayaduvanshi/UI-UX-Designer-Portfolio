/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import ColoredGround from '../../../components/Portfolio/ColoredGround';
import PlainGround from '@/components/Portfolio/PlainGroud';

const page = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <div className="flex   justify-center my-20 mr-40 overflow-x-hidden">
        <h2 className="   font-bold text-[4rem] text-custom-pink overflow-x-hidden ">
          Design for the user <br /> everything else will follow
        </h2>
      </div>
      <ColoredGround
        imageSource="/assets/portfolio-1.png"
        imageAlt="Metrics"
        title="Startup Metrics
        Visualization"
      />
      <PlainGround
        imageSource="/assets/portfolio-2.png"
        imageAlt="HRMS"
        title="Comprehensive HRMS
        Solution"
      />
      <ColoredGround
        imageSource="/assets/portfolio-3.png"
        imageAlt="Future Of Construction 
        eCommerce"
        title="Future Of Construction 
        eCommerce"
      />
      <PlainGround
        imageSource="/assets/portfolio-4.png"
        imageAlt="Comprehensive HRMS
        Solution"
        title="Comprehensive HRMS
        Solution"
      />
    </div>
  );
};

export default page;
