import React from 'react';

import OurServicesImg from "../../../assets/banner/homePage-Services.png"

const OurServices = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-20 mt-20 ">
      <div className="flex flex-col sm:flex-row px-5">
        {/* 1st div */}
        <div>
          <img className="w-full h-full" src={OurServicesImg} alt="" />
        </div>
        {/* 2nd div  */}
        <div>
          <h3>Our Services</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;