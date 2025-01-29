import React from "react";
import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div
      className="text-9xl
    "
    >
      <footer className="flex w-full   flex-col  items-center justify-center gap-y-6 gap-x-12 border-t border-white-50 py-6 text-center md:justify-between ">
        <Typography color="white" className="text-[red] text-2xl">
          &copy; 2023 Material Tailwind
        </Typography>
        <ul className="flex  items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className=" transition-colors hover:text-blue-500 text-2xl focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className=" transition-colors hover:text-blue-500 text-2xl focus:text-blue-500"
            >
              Terms Of Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className=" transition-colors hover:text-blue-500 text-2xl focus:text-blue-500"
            >
              Privacy
            </Typography>
          </li>
          <li></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
