import { Typography } from "@material-tailwind/react";
const Footer = () => {
  return (
    <div
      className="text-9xl
    "
    >
      <footer className="flex w-full   flex-col  items-center justify-center gap-y-6 gap-x-12 border-t border-white-50 py-6 text-center md:justify-between ">
        <Typography color="white" className="text-[red] text-2xl">
          &copy; 2025 WATCH WORLD
        </Typography>
        <ul className="flex  items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              color="white"
              className=" transition-colors hover:text-blue-500 text-2xl focus:text-blue-500 cursor-pointer"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              color="white"
              className=" transition-colors hover:text-blue-500 text-2xl focus:text-blue-500 cursor-pointer"
            >
              Terms Of Us
            </Typography>
          </li>
          <li>
            <Typography
              color="white"
              className=" transition-colors hover:text-blue-500 text-2xl focus:text-blue-500 cursor-pointer"
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
