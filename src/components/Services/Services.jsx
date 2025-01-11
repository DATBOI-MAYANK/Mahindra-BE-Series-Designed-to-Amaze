import React from "react";
import {
  Wrench,
  FuelIcon as Oil,
  Car,
  Battery,
  Gauge,
  PhoneCall,
} from "lucide-react";

function Services() {
  return (
    <div className="bg-[#03071e] h-full w-full p-5">
      <div
        class="Title"
        className=" flex flex-col items-center justify-center h-60 motion-scale-in-[0.5] motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-blur-in-[20px] motion-linear"
      >
        <h1 className="font-bold text-4xl text-[#545883]">Our Car Services</h1>
        <p className="font-semibold text-xl text-[#ffffff]">
          Professional care for your vehicle, ensuring peak performance and
          longevity.
        </p>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 motion-blur-in-[20px]">
          <div class="bg-[#EDF2F4] h-52 w-96 rounded-lg mx-4  hover:cursor-pointer">
            <div class="flex flex-col items-center justify-center h-full  ">
              <div className="flex ">
                <Car className="mr-2 h-10 w-10" />
                <h1 class="font-bold text-3xl">Break Service</h1>
              </div>
              <p class="font-semibold pl-2 text-lg">
                Inspection and replacement of brake pads, rotors, and brake
                fluid.
              </p>
            </div>
          </div>
          <div class="bg-[#EDF2F4] h-52 w-96 rounded-lg mx-4  hover:cursor-pointer">
            <div class="flex flex-col items-center justify-center h-full">
              <div className="flex items-center">
                <Oil className="mr-2 h-10 w-10" />
                <h1 class="font-bold text-3xl">Oil Change</h1>
              </div>
              <p class="font-semibold pl-2 text-lg">
              Regular oil changes to keep your engine running smoothly.
              </p>
            </div>
          </div>
          <div class="bg-[#EDF2F4] h-52 w-96 rounded-lg mx-4  hover:cursor-pointer">
            <div class="flex flex-col items-center justify-center h-full">
              <div className="flex items-center">
                <Battery className="mr-2 h-10 w-10" />
                <h1 class="font-bold text-3xl">Battery Replacement</h1>
              </div>
              <p class="font-semibold pl-2 text-lg">
              Testing and replacement of car batteries.
              </p>
            </div>
          </div>
          <div class="bg-[#EDF2F4] h-52 w-96 rounded-lg mx-4  hover:cursor-pointer">
            <div class="flex flex-col items-center justify-center h-full">
              <div className="flex items-center">
                <Gauge className="mr-2 h-10 w-10" />
                <h1 class="font-bold text-3xl">Tire Service</h1>
              </div>
              <p class="font-semibold pl-2 text-lg">
              Rotation, balancing, and replacement of tires.
              </p>
            </div>
          </div>
          <div class="bg-[#EDF2F4] h-52 w-96 rounded-lg mx-4  hover:cursor-pointer">
            <div class="flex flex-col items-center justify-center h-full">
              <div className="flex items-center">
                <Wrench className="mr-2 h-10 w-10" />
                <h1 class="font-bold text-3xl">General Maintenance</h1>
              </div>
              <p class="font-semibold pl-2 text-lg">
              Comprehensive vehicle check-ups and preventive maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-24  text-[#4f58b8]" >
        <h1 className="font-bold text-4xl">Need Our Services ?</h1>
        <p className="font-semibold text-xl" >Our team of expert mechanics is ready to help you with any car service you need.</p>
        
      </div>
      <div className="flex justify-center items-center pt-5 hover:cursor-pointer text-[#7275b8] " >
        <PhoneCall className="mr-4 h-8 w-8" />
        <p className="font-semibold text-xl" >Call us at +91 1234567890</p>
      </div>
    </div>
  );
}

export default Services;
