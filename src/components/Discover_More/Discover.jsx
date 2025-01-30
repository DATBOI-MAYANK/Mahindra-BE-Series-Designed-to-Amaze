import React from "react";
import Body from "../../images/Body1.jpg";

function Discover() {
  return (
    <div className="bg-gradient-to-tr from-[#1B3A4B] to-[#006466] h-screen  w-full p-10">
      <header className="flex  justify-center">
        <h1 className="text-4xl text-[#ffffff] font-bold mt-10 font-serif">
          More About Our Product
        </h1>
      </header>
      <main>
        <div className="flex ">
          <img src={Body} alt="" className="w-1/3 rounded-lg p-6 " />
          <p className="" >
            This is our cutting-edge electric vehicle platform. Notice the
            integrated battery pack right here in the center – it's the heart of
            the system, providing power to the motors. We've got electric motors
            on both axles, making this a true all-wheel-drive vehicle for
            enhanced performance and traction. The bright blue components you
            see are part of the advanced suspension system, designed for a
            smooth and comfortable ride. And of course, you can see the robust
            chassis itself, providing a solid foundation for the entire vehicle.
            This platform represents the future of electric mobility.
          </p>
        </div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </main>
    </div>
  );
}

export default Discover;
