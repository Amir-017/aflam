import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Slider from "react-slick";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import fakeImg from "../../../Photos/1483382.jpg";

const HomeSeries = ({ items, data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 50,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 50,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 50,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 50,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h1 className=" text-4xl ps-9 text-blue-500 mb-5 text-center  md:text-start">
        {" "}
        Series
      </h1>

      <Slider {...settings} className="w-full  ">
        {data.map((item, i) => (
          <div className=" px-10  handlediv" key={i}>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
              alt=""
              className="rounded-2xl "
            />
          </div>
        ))}
      </Slider>
      <h1 className=" text-4xl ps-9 text-blue-500 mb-5 mt-10 text-center  md:text-start">
        Top Series
      </h1>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-2 md:px-6 mt-10 mb-10">
        {items.map((item, i) => (
          <Card
            className="bg-gray-900 rounded-2xl shadow-lg flex flex-col justify-between hover:scale-[1.025] transition-transform duration-200"
            key={i}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-t-2xl w-full overflow-hidden h-[25rem] flex items-center justify-center bg-gray-800"
            >
              {item.backdrop_path ? (
                <Link to={`/series/${item.id}/title/${item.name}`}>
                  <img
                    src={`https://media.themoviedb.org/t/p/w500${item.backdrop_path}`}
                    alt={item.name}
                    className="object-cover w-full h-[25rem]"
                  />
                </Link>
              ) : (
                <img
                  src={fakeImg}
                  alt="logo"
                  className="object-cover w-full h-[20rem]"
                />
              )}
            </CardHeader>
            <CardBody className="bg-gray-900 rounded-b-2xl flex flex-col gap-2 p-4">
              <Typography
                variant="h5"
                className="text-[#0DCAF0] font-bold truncate text-lg mb-1"
                title={item.name}
              >
                {item.name}
              </Typography>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#0DCAF0"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 7V3M16 7V3M4 11H20M5 21H19A2 2 0 0021 19V7A2 2 0 0019 5H5A2 2 0 003 7V19A2 2 0 005 21Z" />
                  </svg>
                  {item.first_air_date
                    ? new Date(item.first_air_date).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )
                    : "N/A"}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#aaa"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {item.original_language?.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-white font-medium">
                  <svg className="w-4 h-4" fill="#0DCAF0" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  {item.vote_average}
                </span>
                <ReactStars
                  count={5}
                  size={20}
                  color2={"#ffd700"}
                  value={item.vote_average / 2}
                  edit={false}
                />
              </div>
              <Link
                to={`/series/${item.id}/title/${item.name}`}
                className="mt-3"
              >
                <Button
                  variant="outlined"
                  className="w-full border-[#0DCAF0] text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black transition-all"
                >
                  Details
                </Button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeSeries;
