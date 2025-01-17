import React from "react";
import { Award, Users, Clock, ThumbsUp, User } from "lucide-react";

function About() {
  return (
    <div className="bg-gradient-to-tr from-[#1B3A4B] to-[#006466] h-full w-full p-4 font-serif">
      <div className="flex flex-col items-center motion-scale-in-[0.5] motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-blur-in-[20px] motion-linear ">
        <h1 className="text-4xl text-white font-bold mt-20">
          About Our Auto Service
        </h1>
        <p className="text-xl text-white font-semibold mt-2 font-serif2">
          Dedicated to keeping your vehicle in top condition since 1995.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-3 mt-2 md:grid-col-2 lg:grid-col-3 gap-4 motion-blur-in-[20px]">
          <div className="bg-white h-52 w-96 rounded-lg mx-4 hover:cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex">
                <Award className="mr-2 h-10 w-10" />
                <h1 className="font-bold text-3xl">Quality Service</h1>
              </div>
              <p className="font-semibold pl-2 mt-4 text-lg font-serif2">
                We use only high-quality parts and advanced diagnostic tools.
              </p>
            </div>
          </div>
          <div className="bg-white h-52 w-96 rounded-lg mx-4 hover:cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex">
                <Users className="mr-2 h-10 w-10" />
                <h1 className="font-bold text-3xl">Expert Mechanics</h1>
              </div>
              <p className="font-semibold pl-2 mt-4 text-lg font-serif2">
                Our team consists of certified professionals with years of
                experience.
              </p>
            </div>
          </div>
          <div className="bg-white h-52 w-96 rounded-lg mx-4 hover:cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex">
                <Clock className="mr-2 h-10 w-10" />
                <h1 className="font-bold text-3xl">Quick Turnaround</h1>
              </div>
              <p className="font-semibold pl-2 mt-4 text-lg font-serif2">
                We value your time and strive for efficient service delivery.
              </p>
            </div>
          </div>
          <div className="bg-white h-52 w-96 rounded-lg mx-4 hover:cursor-pointer">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex">
                <ThumbsUp className="mr-2 h-10 w-10" />
                <h1 className="font-bold text-3xl">Customer Satisfaction</h1>
              </div>
              <p className="font-semibold pl-2 mt-4 text-lg font-serif2">
                Our top priority is ensuring you're happy with our service.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-4 mt-4">
          <div className="bg-white h-auto w-auto rounded-lg p-4 mt-2" >
            <h1 className="text-4xl text-black font-bold mt-4">Our Story</h1>
            <p className="text-lg text-black font-semibold mt-2">
              Mahindra & Mahindra was founded in 1945 as Mahindra & Mohammed by
              J.C. Mahindra, K.C. Mahindra, and Malik Ghulam Muhammad in
              Ludhiana to trade steel. After Partition in 1947, Muhammad moved
              to Pakistan and became its first finance minister. The company was
              renamed Mahindra & Mahindra in 1948. Initially trading steel,
              Mahindra began producing Willys Jeeps in 1947 and became an
              exporter of vehicles by 1969. During the Licence Raj, it
              diversified, launching a tractor division in 1982 and Tech
              Mahindra in 1986. In 1994, it reorganized into six Strategic
              Business Units, including Automotive, IT, and Farm Equipment.
              Under Anand Mahindra’s leadership, a new logo debuted in 2000, and
              the indigenously designed Mahindra Scorpio launched in 2002. By
              2009, Mahindra ranked among Forbes' top 200 most reputable
              companies globally. In 2011, the company introduced its "Mahindra
              Rise" brand, unifying its global image and emphasizing innovation
              and ambition. Mahindra expressed interest in acquiring Saab in
              2012 but was outbid. Today, it is one of India’s largest and most
              diversified companies, with operations across various industries.
            </p>
          </div>
          <div className="bg-white h-auto w-auto rounded-lg p-4 mt-4" >
            <h1 className="text-4xl text-black font-bold mt-5">Our Mission</h1>
            <p className="text-lg text-balck font-semibold mt-2">
              Tech Mahindra, part of the Mahindra Group, is driven by a mission
              to empower enterprises, employees, and society to rise toward a
              more equitable world, foster future readiness, and create lasting
              value. The company is committed to being agile, customer-focused,
              and purpose-driven, offering world-class technology solutions that
              inspire positive transformation within communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
