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

      <div className="container mx-auto flex flex-col justify-center items-center lg:justify-start  gap-x-10 gap-y-10 ">
        {" "}
        <div className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold text-center md:text-start ">
          All Season :{" "}
          <span className="text-white underline">
            {seriesDetails.seasons && seriesDetails.seasons.length}
          </span>
        </div>
        {seriesDetails &&
          seriesDetails.seasons?.map((last, key) => (
            <div className="w-[70%] md:w-[90%] lg:w-[90%]" key={key}>
              <Card className="cardSe md:mx-0 w-[70%] md:w-[90%] lg:w-[90%] lg:flex-row bg-gray-900 flex flex-col   ">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 rounded-[3rem] lg:w-1/3  shrink-0 bg-gray-900 w-full flex justify-center items-center  "
                >
                  {last.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${last.poster_path}`}
                      alt="logo"
                      className="rounded-[2rem] ps-5 pt-5 pb-5 w-[70%] md:w-[100%] md:me-5  lg:w-[70%] "
                    />
                  ) : (
                    <img
                      src={fakeImg}
                      alt="logo"
                      className=" ps-5 pt-5 pb-5 w-[70%] md:w-[80%] md:me-5  lg:w-[70%] rounded-[2em]"
                    />
                  )}
                </CardHeader>
                <CardBody className="w-full   ">
                  <div className=" font-bold text-white flex flex-col gap-y-5    ">
                    <div className="flex flex-col   md:flex-col lg:flex-row lg:gap-x-5 md:gap-y-5 items-center justify-evenly lg:items-start lg:justify-between  text-2xl">
                      <h1 className="text-white">
                        {" "}
                        Season{" "}
                        <span className="text-[#0DCAF0]">
                          {last.season_number}
                        </span>
                      </h1>
                      <div className="bg-white text-black flex rounded py-2 px-2 my-5 md:my-0 ">
                        <h1>{last.vote_average}</h1>
                        <FaStar className="me-0 md:me-2" />{" "}
                      </div>
                      <h1 className="text-white">
                        <span className="text-[#0DCAF0]">
                          {last.air_date?.slice(0, 4)}
                        </span>{" "}
                        |{" "}
                        <span className="text-[#0DCAF0]">
                          {last.episode_count}
                        </span>{" "}
                        Episodes
                      </h1>
                    </div>
                    <div className="flex flex-col md:flex-row  text-center w-full justify-center lg:justify-start ">
                      <h1>
                        <span className="text-[#0DCAF0] underline  mx-2">
                          {last.name}
                        </span>{" "}
                        premiered on{" "}
                        <span className="text-[#0DCAF0] underline  mx-2">
                          {last.air_date}
                        </span>
                      </h1>
                      <h1></h1>
                      <h1></h1>
                    </div>
                    {last.overview ? (
                      <h1 className="font-bold text-gray-300 mt-10 text-[21px] text-center lg:text-start">
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
                      <h1 className="font-bold text-[white] mt-10 text-[21px] text-center lg:text-start">
                        This Season Doesn't Have Overview Yet
                      </h1>
                    )}
                  </div>
                </CardBody>
              </Card>
              {seriesDetails && (
                <Link
                  className="text-[#0DCAF0] mt-2 hover:underline  text-center lg:text-start flex justify-start items-end"
                  to={`/detailssereis/${idserie}/season/${last.season_number}`}
                >
                  All Episodes
                </Link>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllSeasons;
