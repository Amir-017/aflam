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
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
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
          <div className="w-full bg-[#212529] px-4 md:px-10 pt-5 flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-b-3xl shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.backdrop_path}`}
              alt="logo"
              className="rounded-2xl mb-4 md:mb-0 w-[60%] max-w-[220px] md:w-[140px] shadow-lg object-cover"
            />
            <div className="flex-1 flex flex-col justify-center md:justify-start">
              <h1 className="text-white font-bold text-3xl text-center md:text-start mb-2">
                {seriesDetails.name}
              </h1>
              <div className="flex justify-center md:justify-start">
                <Button
                  onClick={backAstep}
                  variant="outlined"
                  className="border-[#0DCAF0] text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
                >
                  Back a step
                </Button>
              </div>
            </div>
          </div>

          <div className="container mx-auto flex flex-col gap-y-10 py-8">
            <div
              className={`text-3xl text-[#0DCAF0] font-bold text-center md:text-start`}
            >
              All Episodes:{" "}
              <span className="text-white underline">
                {episodes && episodes.length}
              </span>
            </div>
            <div className="flex flex-col gap-8">
              {seriesDetails &&
                episodes.map((last, key) => (
                  <Card
                    key={key}
                    className="flex flex-col md:flex-row bg-gradient-to-br from-[#181c23] to-[#23272f] rounded-3xl shadow-2xl overflow-hidden"
                  >
                    <div className="md:w-1/4 flex justify-center items-center bg-[#23272f]">
                      <img
                        src={
                          last.still_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${last.still_path}`
                            : fakeImg
                        }
                        alt="episode"
                        className="w-40 h-40 md:w-44 md:h-56 object-cover rounded-2xl m-4 shadow"
                      />
                    </div>
                    <CardBody className="flex-1 flex flex-col gap-4 p-4 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex flex-col md:flex-row md:gap-8 gap-2">
                          <span className="text-xl font-bold text-[#0DCAF0]">
                            Episode {last.episode_number}
                          </span>
                          <span className="text-white text-lg">
                            Type:{" "}
                            <span className="text-[#0DCAF0]">
                              {last.episode_type}
                            </span>
                          </span>
                          <span className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-lg font-semibold shadow">
                            {last.vote_average}
                            <FaStar className="text-yellow-500" />
                          </span>
                          <span className="text-[#0DCAF0] text-base">
                            {last.air_date}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        {last.overview ? (
                          <ShowMoreText
                            width={600}
                            lines={5}
                            more="Show more"
                            less="Show less"
                            className="content-css text-gray-300 text-base md:text-lg"
                            anchorClass="show-more-less-clickable"
                            expanded={false}
                            truncatedEndingComponent={"... "}
                          >
                            {last.overview}
                          </ShowMoreText>
                        ) : (
                          <h1 className="font-bold text-white mt-4 text-base text-center md:text-start">
                            This Season Doesn't Have Overview Yet
                          </h1>
                        )}
                      </div>
                      <div className="flex justify-start mt-4">
                        <Link
                          className="text-[#0DCAF0] hover:underline font-bold transition"
                          to={`/detailssereis/${idseries}/season/${last.season_number}/episode/${last.episode_number}`}
                        >
                          All Cast & Crew
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEpisodes;
