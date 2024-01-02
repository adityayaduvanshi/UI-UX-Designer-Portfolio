import React from 'react';
import Header from '@/components/Header/index';

const MainLayout = ({ children }) => {
  return (
    <div className="h-[100vh] bg-[#FFFFFF] text-[#000000] w-[100vw] flex pt-24">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
