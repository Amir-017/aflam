import React, { useEffect } from "react";
import { getSeriesDetails } from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";
import fakeImg from "../../Photos/avatar-black-and-white-clipart-7.jpg";

const AllSeasons = () => {
  const {
    seriesDetails,
    seriesDetails: { genres },
    //
    castAndCrewSeries: { cast, crew },
  } = useSelector((state) => state.series);

  const dispatch = useDispatch();
  const { idserie, nameserie } = useParams();
  useEffect(() => {
    dispatch(getSeriesDetails(idserie));
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const backAstep = () => {
    navigate(-1);
  };

  return (
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

      <div className="container mx-auto flex flex-col gap-y-10 py-8">
        <div className="text-3xl text-[#0DCAF0] font-bold text-center md:text-start">
          All Seasons:{" "}
          <span className="text-white underline">
            {seriesDetails.seasons && seriesDetails.seasons.length}
          </span>
        </div>
        <div className="flex flex-col gap-10">
          {seriesDetails &&
            seriesDetails.seasons?.map((last, key) => (
              <Card
                key={key}
                className="flex flex-col md:flex-row bg-gradient-to-br from-[#181c23] to-[#23272f] rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="md:w-1/4 flex justify-center items-center bg-[#23272f]">
                  <img
                    src={
                      last.poster_path
                        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${last.poster_path}`
                        : fakeImg
                    }
                    alt="season"
                    className="w-40 h-56 md:w-44 md:h-64 object-cover rounded-2xl m-4 shadow"
                  />
                </div>
                <CardBody className="flex-1 flex flex-col gap-4 p-4 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col md:flex-row md:gap-8 gap-2">
                      <span className="text-xl font-bold text-[#0DCAF0]">
                        Season {key + 1}{" "}
                      </span>
                      <span className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-lg font-semibold shadow">
                        {last.vote_average}
                        <FaStar className="text-yellow-500" />
                      </span>
                      <span className="text-white text-base">
                        {last.air_date?.slice(0, 4)} |{" "}
                        <span className="text-[#0DCAF0]">
                          {last.episode_count}
                        </span>{" "}
                        Episodes
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row text-center w-full justify-center md:justify-start">
                    <span>
                      <span className="text-[#0DCAF0] underline mx-2">
                        {last.name}
                      </span>
                      premiered on
                      <span className="text-[#0DCAF0] underline mx-2">
                        {last.air_date}
                      </span>
                    </span>
                  </div>
                  <div className="mt-2">
                    {last.overview ? (
                      <ShowMoreText
                        width={550}
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
                      to={`/detailssereis/${idserie}/season/${last.season_number}`}
                    >
                      All Episodes
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllSeasons;
