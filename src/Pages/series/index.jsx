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
  }, [checkCountSeries ? checkCountSeries : checkCountSeries]);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center  gap-5 container mx-auto ">
            {series.map((serie, i) => (
              <Card
                className="rounded-2xl w-[19rem] flex justify-center items-center flex-wrap bg-gray-900 "
                key={i}
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0  w-full"
                >
                  {serie.backdrop_path ? (
                    <Link to={`/series/${serie.id}/title/${serie.name}`}>
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${serie.backdrop_path}`}
                        alt="logo"
                        width="100%"
                      />
                    </Link>
                  ) : (
                    <img src={fakeImg} alt="logo" className=" max-w-[250%]" />
                  )}
                </CardHeader>
                <CardBody className="bg-gray-900 w-[19rem] rounded-xl grid gap-y-4">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="text-white font-bold"
                  >
                    TITLE : <span className="text-[#0DCAF0]">{serie.name}</span>
                  </Typography>
                  <div
                    variant="lead"
                    color="gray"
                    className="flex justify-between items-center"
                  >
                    <h1 className="text-white font-medium">
                      RATE :
                      <span className="text-[#0DCAF0] font-semibold ms-2">
                        {serie.vote_average}
                      </span>
                    </h1>
                    <h1 className="">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={"#ffd700"}
                        value={serie.vote_average / 2}
                        edit={false}
                      />{" "}
                    </h1>
                  </div>
                  <div className="flex justify-center ">
                    <Link to={`/series/${serie.id}/title/${serie.name}`}>
                      <Button
                        variant="outlined"
                        className=" border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
                      >
                        Details
                      </Button>
                    </Link>
                  </div>
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
