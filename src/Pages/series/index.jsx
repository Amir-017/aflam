import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getSeries,
  increment,
} from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import ReactStars from "react-stars";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import fakeImg from "../../Photos/1483382.jpg";

const Series = () => {
  const { series, checkCountSeries, counter, seriesHomeLoading } = useSelector(
    (state) => state.series
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeries(counter));
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [checkCountSeries ? checkCountSeries : checkCountSeries]);

  return (
    <div>
      {seriesHomeLoading ? (
        <div className=" grid min-h-[140px] w-full place-items-center  overflow-x-scroll rounded-lg p-6 lg:overflow-visible h-screen justify-items-center items-center">
          <svg
            className="w-16 h-16 animate-spin text-white"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="">
          <h1 className=" text-[#0DCAF0] font-bold text-4xl container mx-auto my-5 text-center md:text-center lg:text-start">
            series
          </h1>
          <h1 className=" text-white w-full text-center   font-bold text-4xl container mx-auto my-10">
            Page{" "}
            <span className="text-[#0DCAF0] underline mx-2">{counter}</span>
            From <span className="text-[#0DCAF0] underline mx-2">500</span>
          </h1>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-2 md:px-6 mt-10 mb-10">
            {series &&
              series.map((serie, i) => (
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
                    {serie.backdrop_path ? (
                      <Link to={`/series/${serie.id}/title/${serie.name}`}>
                        <img
                          src={`https://media.themoviedb.org/t/p/w500${serie.backdrop_path}`}
                          alt={serie.title}
                          className="object-cover w-full h-[25rem]"
                        />
                      </Link>
                    ) : (
                      <img
                        src={fakeImg}
                        alt="logo"
                        className="object-center w-full h-[25rem] "
                      />
                    )}
                  </CardHeader>
                  <CardBody className="bg-gray-900 rounded-b-2xl flex flex-col gap-2 p-4">
                    <Typography
                      variant="h5"
                      className="text-[#0DCAF0] font-bold truncate text-lg mb-1"
                      title={serie.name}
                    >
                      {serie.name}
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
                        {serie.first_air_date
                          ? new Date(serie.first_air_date).toLocaleDateString(
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
                        {serie.original_language?.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-white font-medium">
                        <svg
                          className="w-4 h-4"
                          fill="#0DCAF0"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                        {serie.vote_average}
                      </span>
                      <ReactStars
                        count={5}
                        size={20}
                        color2={"#ffd700"}
                        value={serie.vote_average / 2}
                        edit={false}
                      />
                    </div>
                    <Link
                      to={`/series/${serie.id}/title/${serie.name}`}
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
          <div className="flex items-center gap-8 justify-center py-10 ">
            <IconButton
              size="sm"
              variant="outlined"
              onClick={() => dispatch(decrement())}
              disabled={counter === 1}
              className="bg-white"
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="white" className="font-normal">
              Page <strong className="text-light-green-100">{counter}</strong>{" "}
              of <strong className="text-light-green-100">500</strong>
            </Typography>
            <IconButton
              size="sm"
              variant="outlined"
              onClick={() => dispatch(increment())}
              disabled={counter === 500}
              className="bg-white"
            >
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Series;
