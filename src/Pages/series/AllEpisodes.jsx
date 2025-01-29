import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEpisodes } from "../../SystmeRdx/Slices/seriesSlices/aboutSeasonsAndEpisodesSlice";
import { getSeriesDetails } from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import fakeImg from "../../Photos/avatar-black-and-white-clipart-7.jpg";
import { FaStar } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";

const AllEpisodes = () => {
  const { idseries, season_number } = useParams();

  const { seriesDetails } = useSelector((state) => state.series);

  const { episodes, episodesLoading } = useSelector(
    (state) => state.episodesAndCastCrew
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEpisodes({ idseries, season_number }));
    dispatch(getSeriesDetails(idseries));
  }, []);
  const backAstep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
      {episodesLoading ? (
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
        <div className="w-full">
          <div className=" w-full  bg-[#212529] px-10 pt-5 flex justify-center items-center flex-col md:flex-row md:justify-start ">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.backdrop_path}`}
              alt="logo"
              className="rounded-2xl mb-5 w-[30%] md:w-[12%]"
            />

            <div className="w-full flex  flex-col justify-start   px-0 md:justify-center md:px-10 ">
              <h1 className="text-white font-bold  text-3xl text-center md:text-start">
                {seriesDetails.name}
              </h1>
              <div className="my-5 flex justify-center md:justify-start">
                <Button
                  onClick={backAstep}
                  variant="outlined"
                  className=" border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
                >
                  Back a step
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`container mx-auto flex flex-col justify-center items-center lg:justify-start  gap-x-10 gap-y-10 `}
          >
            {" "}
            <div
              className={`text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold text-center md:text-start ${
                !episodes.length && "mb-[9.5em]"
              }  `}
            >
              All Episodes :{" "}
              <span className="text-white underline">
                {episodes && episodes.length}
              </span>
            </div>
            {seriesDetails &&
              episodes.map((last, key) => (
                <div className="w-[70%] md:w-[90%] lg:w-[100%]" key={key}>
                  <Card className=" md:mx-0  lg:flex-row bg-gray-900 flex flex-col    ">
                    <div className=" m-0   lg:w-1/5   shrink-0 bg-gray-900 w-full flex justify-center items-center  rounded-[3em]">
                      {last.still_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${last.still_path}`}
                          alt="logo"
                          className=" ps-5 pt-5 pb-5 w-[70%] md:w-[80%] md:me-5  lg:w-[70%] rounded-[2em]"
                        />
                      ) : (
                        <img
                          src={fakeImg}
                          alt="logo"
                          className=" ps-5 pt-5 pb-5 w-[70%] md:w-[80%] md:me-5  lg:w-[70%] rounded-[2em]"
                        />
                      )}
                    </div>
                    <CardBody className="w-full   ">
                      <div className=" font-bold text-white flex flex-col gap-y-5    ">
                        <div className="flex flex-col   md:flex-col lg:flex-row lg:gap-x-5 md:gap-y-5 items-center justify-evenly lg:items-start lg:justify-between  text-2xl">
                          <h1 className="text-white">
                            {" "}
                            Episode{" "}
                            <span className="text-[#0DCAF0]">
                              {last.episode_number}
                            </span>
                          </h1>
                          <h1 className="text-white">
                            {" "}
                            Type:{" "}
                            <span className="text-[#0DCAF0]">
                              {last.episode_type}
                            </span>
                          </h1>

                          <div className="flex flex-col">
                            <div className="bg-white text-black flex rounded w-32 my-5 md:my-0  justify-center items-center ">
                              <h1>{last.vote_average}</h1>
                              <FaStar className="me-0 md:me-2" />{" "}
                            </div>
                            <h1 className="text-[#0DCAF0]">{last.air_date}</h1>
                          </div>
                        </div>

                        {last.overview ? (
                          <h1 className="font-bold text-gray-300 mt-10 text-[16px] text-center lg:text-start">
                            {" "}
                            <ShowMoreText
                              width={550}
                              lines={6}
                              more="Show more"
                              less="Show less"
                              className="content-css"
                              anchorClass="show-more-less-clickable"
                              expanded={false}
                              truncatedEndingComponent={"... "}
                            >
                              {last.overview}
                            </ShowMoreText>
                          </h1>
                        ) : (
                          <h1 className="font-bold text-[white] mt-10 text-[16px] text-center lg:text-start">
                            This Season Doesn't Have Overview Yet
                          </h1>
                        )}
                      </div>
                    </CardBody>
                  </Card>
                  <Link
                    className="text-[#0DCAF0] mt-3 hover:underline  text-center lg:text-start flex justify-start items-end"
                    to={`/detailssereis/${idseries}/season/${last.season_number}/episode/${last.episode_number}`}
                  >
                    All Cast & crew
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEpisodes;
