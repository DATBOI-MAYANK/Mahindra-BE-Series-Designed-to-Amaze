import React from "react";
import Body from "../../images/Body1.jpg";
import Charge from "../../images/Charge1.jpg";
import Parking from "../../images/Parking1.jpg";
import Radar from "../../images/Radar1.jpg";
import Scan from "../../images/Scan1.jpg";

function Discover() {
  return (
    <div className="bg-gradient-to-tr from-[#1B3A4B] to-[#006466] h-full  w-full p-10">
      <header className="flex  justify-center">
        <h1 className="text-4xl text-[#ffffff] font-bold mt-10 font-machina motion-scale-in-[0.5] motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-blur-in-[20px] motion-linear">
          More About Our Product
        </h1>
      </header>
      <main className="bg-white h-full w-auto p-10 m-10 rounded-3xl motion-scale-in-[0.5] motion-translate-x-in-[1%] motion-translate-y-in-[109%] motion-blur-in-[100px]">
        <div className="flex m-5">
          <img src={Body} alt="" className="w-1/3 rounded-[2.5em] p-6 " />
          <p className=" pt-8 pl-2 rounded-2xl text-xl font-serif bg-[#144552]">
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
        <div className="flex m-5">
          <img src={Charge} alt="" className="w-1/3 rounded-[2.5em] p-6 " />
          <p className=" pt-10 pl-2 rounded-2xl text-xl font-serif bg-[#144552]">
            Meet our latest electric SUV. It boasts a sleek, modern design
            that's sure to turn heads. The charging port, conveniently located
            here, makes it easy to plug in and power up. We've gone with a
            stylish two-tone color scheme, and these large, multi-spoke wheels
            really complete the look. The interior is spacious and designed with
            the latest technology in mind. This SUV offers the perfect blend of
            style, practicality, and sustainability.
          </p>
        </div>
        <div className="flex m-5">
          <img src={Parking} alt="" className="w-1/3 rounded-[2.5em] p-6 " />
          <p className=" pt-10 pl-2 rounded-2xl text-xl font-serif bg-[#144552]">
            This vehicle is equipped with a comprehensive suite of sensors that
            provide a 360-degree view of its surroundings. Our radar system,
            depicted here, allows the car to "see" long distances, even in
            challenging weather. We also use ultrasonic sensors for close-range
            detection, ideal for parking and maneuvering in tight spaces. And of
            course, cameras provide crucial visual information for features like
            lane keeping assist and adaptive cruise control. This advanced
            sensor technology is designed to keep you safe and aware on the
            road.
          </p>
        </div>
        <div className="flex m-5">
          <img src={Radar} alt="" className="w-1/3 rounded-[2.5em] p-6 " />
          <p className=" pt-10 pl-2 rounded-2xl text-xl font-serif bg-[#144552]">
            Let me show you how our lane keeping assist system works. The car
            uses sensors to monitor the lane markings and detect if you
            unintentionally drift out of your lane. If that happens, the system
            can provide gentle steering input to help you stay on course. It can
            also detect other vehicles in adjacent lanes, alerting you to
            potential hazards. This technology is all about enhancing safety and
            preventing accidents.
          </p>
        </div>
        <div className="flex m-5">
          <img src={Scan} alt="" className="w-1/3 rounded-[2.5em] p-6 " />
          <p className=" pt-10 pl-2 rounded-2xl text-xl font-serif bg-[#144552]">
            This vehicle features a sophisticated driver monitoring system. It
            uses facial recognition technology to identify the driver and track
            their head and eye movements. This allows the system to detect signs
            of drowsiness or distraction, and provide alerts to help keep the
            driver focused on the road. It's an extra layer of safety designed
            to protect both the driver and other road users.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Discover;
