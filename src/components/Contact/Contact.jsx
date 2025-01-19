import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
function Contact() {
  return (
    <div className="bg-gradient-to-tr from-[#1B3A4B] to-[#006466] h-full  w-full p-10  font-serif">
      <header className="flex flex-col items-center motion-scale-in-[0.5] motion-translate-x-in-[0%] motion-translate-y-in-[100%] motion-blur-in-[20px] motion-linear">
        <h1 className="text-4xl text-[#1B3A4B] font-bold mt-10">Contact Us</h1>
        <p className="text-2xl text-white font-semibold mt-2 font-serif">
          We're here to help with all your automotive needs.
        </p>
      </header>
      <div className=" bg-white rounded-lg w-96 h-auto flex shadow-sm justify-center pb-4 mx-auto mt-10 motion-blur-in-[20px]">
        <form className="flex flex-col ">
          <h2 className="text-3xl  font-bold mr-12 mt-2 ">Send Us A Message</h2>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-muted-foreground mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-60 h-10 drop-shadow-xl border-2 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-muted-foreground mb-1"
            >
              your@email.com
            </label>
            <input
              type="text"
              id="email"
              placeholder="email"
              className="w-60 h-10 drop-shadow-xl border-2 rounded-md px-2"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label
              htmlFor="message"
              className="block text-lg font-medium  text-muted-foreground mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="How Can We Help You ?"
              className="drop-shadow-xl border-2 px-2 rounded-lg"
            ></textarea>
          </div>
          <button className="bg-[#1B3A4B] text-white w-24 h-10 rounded-md mt-5">
            Send
          </button>
        </form>
      </div>
      <div className=" bg-white rounded-lg w-96 h-auto flex flex-col shadow-sm justify-center p-4 mx-auto mt-10 motion-blur-in-[20px]">
        <h2 className="text-3xl  font-bold  mb-4 ">Contact Information </h2>
        <div className="flex m-2">
          <MapPin className="mr-2 h-7 w-7" />
          <p>123 Auto Service Lane, Carville, ST 12345</p>
        </div>
        <div className="flex m-2">
          <Phone className="mr-2 h-7 w-7" />
          <p>(123) 456-7890</p>
        </div>
        <div className="flex m-2">
        <Mail  className="mr-2 h-7 w-7" />
        <p>info@autoservice.com</p>
        </div>
        <div className="flex m-2">
        <Clock  className="mr-2 h-7 w-7" />
        <p>Mon-Fri: 8am-6pm, Sat: 9am-3pm, Sun: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
