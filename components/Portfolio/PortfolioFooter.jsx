'use client';

import React, { useState } from 'react';

const PortfolioFooter = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[#FFF2F3] py-10">
      <div className=" flex flex-col items-center gap-6 justify-center">
        <p className="text-[#637381] leading-10   text-xl text-left [font-family:'Public Sans',Helvetica]">
          Let's explore new opportunities and collaborate on exciting projects.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="103"
          viewBox="0 0 43 103"
          fill="none"
        >
          <path
            d="M2 3.00477C13.5611 -0.694784 25.5756 6.19307 28.7896 17.5762C30.4663 23.5144 30.4013 30.7317 25.745 35.4182C22.9041 38.2776 17.3077 41.3608 13.2742 39.0079C10.8599 37.5995 9.37248 34.5906 10.4025 31.8684C11.4188 29.1825 15.1963 28.1743 17.6616 27.6539C26.406 25.8078 34.9839 29.9382 38.987 37.9443C41.4566 42.8835 41.7516 48.2957 41.2471 53.7123C40.9411 56.9979 40.0754 60.1911 38.5615 63.1252C36.9414 66.2652 34.5271 69.2183 33.3631 72.5647C31.4055 78.1928 30.5856 84.576 31.6215 90.4599C32.2056 93.7777 32.6319 97.3934 32.6319 100.764C32.6319 101.553 31.558 99.3662 31.5151 99.2879C30.502 97.4363 29.1251 96.1533 27.6595 94.6878C27.2733 94.3015 26.6363 93.6654 26.4231 93.1322C25.993 92.057 27.9095 94.9087 28.6434 95.8046C29.6153 96.9911 30.3598 98.342 31.4353 99.4474C32.4315 100.471 32.8945 99.9119 33.7354 98.7827C35.3594 96.6018 36.9879 94.4398 38.6945 92.3212C38.8753 92.0968 39.8112 90.9241 39.8112 91.0715"
            stroke="#C85A74"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>

        <button className=" text-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
          >
            <circle cx="70" cy="70" r="70" fill="#C85A74" />
          </svg>
          <p className="text-[#E6E6E6] w-[1.8rem] leading-8 font-bold text-[20px] absolute top-[16%] left-[30%]">
            Get In Touch
          </p>
        </button>

        <button
          className="mt-6 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="140"
            viewBox="0 0 140 140"
            // fill="none"
            fill={isHovered ? '#C85A74' : 'none'} // Conditional fill based on hover state
          >
            <circle cx="70" cy="70" r="68.5" stroke="#C85A74" strokeWidth="3" />
          </svg>
          <p
            className={` ${
              isHovered ? 'text-[#E6E6E6]' : 'text-[#C85A74]'
            }  leading-8 font-bold text-[20px] absolute top-[26%] transition-all `}
          >
            View more projects
          </p>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="72"
          height="24"
          viewBox="0 0 72 24"
          fill="none"
        >
          <path
            d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM71.0607 13.0607C71.6464 12.4749 71.6464 11.5251 71.0607 10.9393L61.5147 1.3934C60.9289 0.807611 59.9792 0.807611 59.3934 1.3934C58.8076 1.97919 58.8076 2.92893 59.3934 3.51472L67.8787 12L59.3934 20.4853C58.8076 21.0711 58.8076 22.0208 59.3934 22.6066C59.9792 23.1924 60.9289 23.1924 61.5147 22.6066L71.0607 13.0607ZM2 13.5H70V10.5H2V13.5Z"
            fill="#C85A74"
          />
        </svg>
      </div>
    </div>
  );
};

export default PortfolioFooter;
