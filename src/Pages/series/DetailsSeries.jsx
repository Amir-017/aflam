import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import img from "../../Photos/th.jpeg";

import {
  aboutRecommend,
  getBackDropsSeries,
  getCastCrewSeries,
  getRecommendSeris,
  getReviewSeries,
  getSeriesDetails,
  getVideoSeries,
} from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { BiAddToQueue } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { CgSmileSad } from "react-icons/cg";
import ShowMoreText from "react-show-more-text";
import { FaStar } from "react-icons/fa";
import fakeImg from "../../Photos/avatar-black-and-white-clipart-7.jpg";
import { Breadcrumbs } from "@material-tailwind/react";

const data = [
  {
    label: "Videos",
    value: "html",
  },
  {
    label: "BackDrops",
    value: "react",
  },
  {
    label: "Posters",
    value: "vue",
  },
];

const DetailsSeries = () => {
  const { idSeries, nameSeries } = useParams();

  const {
    seriesDetails,
    seriesHomeLoading,
    seriesDetails: { genres },
    //
    castAndCrewSeries: { cast, crew },
    castShownSeries,
    castAndCrewSeriesLoading,
    //

    reviewsSeries,
    reviewsSeriesLoading,
    //
    videoSeries,
    videoSeriesLoading,
    //
    backDropsSeries: { backdrops, posters },

    //
    recommendationSeries,
    recommendationLoadingSeries,
    checkRecommendSeries,
  } = useSelector((state) => state.series);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesDetails(idSeries));
    dispatch(getCastCrewSeries(idSeries));
    dispatch(getReviewSeries(idSeries));
    dispatch(getVideoSeries(idSeries));
    dispatch(getBackDropsSeries(idSeries));
    dispatch(getRecommendSeris(idSeries));
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [checkRecommendSeries ? checkRecommendSeries : checkRecommendSeries]);
  const navigate = useNavigate();

  const backAstep = () => {
    navigate(-1);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="">
      <div className="">
        <div className=" w-full ">
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
            <div className="relative w-full min-h-screen">
              {/* Backdrop Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={`https://image.tmdb.org/t/p/w1280${seriesDetails.backdrop_path}`}
                  alt={seriesDetails.name}
                  className="w-full h-full object-cover object-top brightness-50"
                  style={{ minHeight: "100vh" }}
                />
              </div>
              {/* Overlay Content */}
              <div className="relative z-10 w-full h-full bg-black/70 flex flex-col justify-center">
                <div className="container mx-auto px-4 py-10 flex flex-col gap-8">
                  {/* Serie name & Info */}
                  <div className="text-center md:text-left">
                    <h1 className="text-[#0DCAF0] text-3xl font-bold mb-2">
                      Serie Details
                    </h1>
                    <h2 className="text-white text-3xl font-bold mb-4">
                      {seriesDetails.name}
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xl text-light-green-100 font-semibold">
                      <span>
                        {seriesDetails.first_air_date} (
                        {seriesDetails.original_language?.toUpperCase()})
                      </span>
                      {genres &&
                        genres.map((gener, i) => (
                          <span
                            key={i}
                            className="px-2 border-r border-[#0DCAF0] last:border-none"
                          >
                            {gener.name}
                          </span>
                        ))}
                      <span>
                        {seriesDetails.episode_run_time
                          ?.slice(0, 1)
                          .map((time) => (
                            <span key={time} className="ms-2">
                              {time && time + " min"}
                            </span>
                          ))}
                      </span>
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Poster */}
                    <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.poster_path}`}
                        alt={seriesDetails.title}
                        className="rounded-2xl shadow-lg w-60 h-[350px] md:w-72 md:h-[420px] object-cover border-4 border-[#23272f] bg-[#23272f]"
                      />
                    </div>
                    {/* Details */}
                    <div className="flex-1 flex flex-col gap-8">
                      {/* Overview */}
                      <div className="bg-[#23272f] rounded-2xl shadow-lg p-6">
                        <h3 className="text-[#0DCAF0] text-2xl font-bold mb-2">
                          Overview
                        </h3>
                        <p className="text-white text-lg leading-relaxed">
                          {seriesDetails.overview}
                        </p>
                      </div>
                      {/* Casting */}
                      <div className="bg-[#23272f] rounded-2xl shadow-lg p-6">
                        <h3 className="text-[#0DCAF0] text-2xl font-bold mb-4">
                          Casting
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {cast &&
                            cast.slice(0, 4).map((member, i) => (
                              <div
                                key={i}
                                className="flex flex-col items-center"
                              >
                                <span className="text-white font-semibold">
                                  {member.name}
                                </span>
                                <span className="text-yellow-400 text-sm">
                                  {member.character}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                      {/* Crew */}
                      <div className="bg-[#23272f] rounded-2xl shadow-lg p-6">
                        <h3 className="text-[#0DCAF0] text-2xl font-bold mb-4">
                          Crew
                        </h3>
                        <div className="flex flex-wrap gap-4">
                          {crew &&
                            crew.slice(0, 4).map((member, i) => (
                              <div
                                key={i}
                                className="flex flex-col items-center"
                              >
                                <span className="text-white font-semibold">
                                  {member.name}
                                </span>
                                <span className="text-yellow-400 text-sm">
                                  {member.job}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center text-white text-xl">
                        <div className="flex flex-col items-center">
                          <BiAddToQueue className="text-3xl mb-1" />
                          <span>Add To Watch List</span>
                        </div>
                        <span className="hidden md:block text-[#0DCAF0] text-2xl">
                          |
                        </span>
                        <div className="flex flex-col items-center">
                          <IoStarOutline className="text-yellow-400 text-3xl mb-1" />
                          <span>Rate Movie</span>
                        </div>
                        <span className="hidden md:block text-[#0DCAF0] text-2xl">
                          |
                        </span>
                        <div className="">
                          <Button
                            onClick={handleOpen}
                            variant="text"
                            className="text-white text-xl font-medium w-full flex flex-col justify-center items-center"
                          >
                            <FaVideo className="text-red-600 text-3xl mb-1 " />
                            Play Trailer
                          </Button>
                        </div>

                        <Dialog
                          open={open}
                          handler={handleOpen}
                          className="w-[90vw] max-w-2xl"
                        >
                          <DialogBody className="bg-gray-900">
                            {videoSeries && videoSeries[0] ? (
                              <iframe
                                className="rounded-2xl w-full h-[40vh]"
                                src={`https://www.youtube.com/embed/${videoSeries[0].key}?si=zzkbzZD-WPe1M4_g`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              ></iframe>
                            ) : (
                              <div className="text-white text-center py-10 text-xl">
                                No trailer available for this movie.
                              </div>
                            )}
                          </DialogBody>
                          <DialogFooter className="bg-gray-900">
                            <Button
                              variant="text"
                              color="red"
                              onClick={handleOpen}
                              className="mr-1"
                            >
                              <span>Cancel</span>
                            </Button>
                          </DialogFooter>
                        </Dialog>
                      </div>
                      {/* Back Button */}
                      <div className="flex justify-center mt-6">
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
                </div>
              </div>
            </div>
          )}
        </div>
        {/* page two */}
        <h1 className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold ">
          Top Billed Cast
        </h1>
        {castAndCrewSeriesLoading ? (
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
          <div className="flex flex-col md:flex-row gap-8 w-full container mx-auto">
            <div className="w-full md:w-[75%] overflow-x-auto flex gap-6 py-4 px-2">
              {castShownSeries &&
                castShownSeries.map((actor, i) => (
                  <Link
                    to={`/person/${actor.id}/hisname/${actor.name}`}
                    key={i}
                    className="group"
                  >
                    <Card className="w-44 bg-gradient-to-br from-[#23272f] to-[#181c23] rounded-2xl shadow-lg border border-[#23272f] hover:scale-105 transition-transform duration-200">
                      <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-t-2xl w-full h-60 overflow-hidden"
                      >
                        {actor.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                            alt={actor.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                          />
                        ) : (
                          <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt={actor.name}
                          />
                        )}
                      </CardHeader>
                      <CardBody className="flex flex-col items-center justify-center h-28">
                        <h1 className="text-lg font-bold text-white text-center truncate w-full">
                          {actor.name}
                        </h1>
                        <h2 className="text-yellow-400 text-base text-center mt-1 truncate w-full">
                          {actor.character.split(" ").slice(0, 3).join(" ")}
                        </h2>
                      </CardBody>
                    </Card>
                  </Link>
                ))}
            </div>
            <div className="md:w-[25%] hidden md:flex flex-col justify-center items-center bg-[#23272f] rounded-2xl shadow-lg p-6 gap-8">
              <div className="flex gap-x-4 text-[#0DCAF0] text-3xl mb-4">
                <FaFacebook className="hover:text-[#1877f3] cursor-pointer transition" />
                <FaInstagram className="hover:text-[#e1306c] cursor-pointer transition" />
                <FaTwitter className="hover:text-[#1da1f2] cursor-pointer transition" />
              </div>
              <div className="flex flex-col gap-y-5 w-full">
                <div>
                  <h1 className="text-white text-lg">Status</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {seriesDetails.status}
                  </h2>
                </div>
                <div>
                  <h1 className="text-white text-lg">Budget</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {seriesDetails.budget
                      ? seriesDetails.budget.toLocaleString() + " $"
                      : "UNKNOWN"}
                  </h2>
                </div>
                <div>
                  <h1 className="text-white text-lg">Original Language</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {seriesDetails.original_language?.toUpperCase()}
                  </h2>
                </div>
                <div>
                  <h1 className="text-white text-lg">Revenue</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {seriesDetails.revenue
                      ? seriesDetails.revenue.toLocaleString() + " $"
                      : "UNKNOWN"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="container mx-auto mt-2  text-[#0DCAF0]  ">
          <Link
            to={`/Detailsseries/${idSeries}/title/${nameSeries}/cast`}
            className="w-full  text-[#0DCAF0]  py-1 hover:text-[#0DCAF0] text-center md:text-start hover:underline  "
          >
            Full Cast And Crew
          </Link>
        </div>
        {/* season */}
        <div className="container mx-auto">
          <h1 className="text-3xl text-[#0DCAF0] py-5 font-bold text-center md:text-start">
            Last Season
          </h1>
          {seriesDetails &&
            seriesDetails.seasons?.slice(-1).map((last, key) => (
              <div
                key={key}
                className="flex flex-col md:flex-row gap-8 bg-[#181c23] rounded-3xl shadow-2xl p-4 md:p-8 my-8 items-center"
              >
                {/* Poster */}
                <div className="flex-shrink-0 w-full md:w-1/4 flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-[#23272f] p-2 flex justify-center">
                    <img
                      src={
                        last.poster_path
                          ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${last.poster_path}`
                          : fakeImg
                      }
                      alt="season poster"
                      className="rounded-xl w-40 h-60 object-cover"
                    />
                  </div>
                </div>
                {/* Info */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <span className="text-xl md:text-2xl font-bold text-[#0DCAF0]">
                      Season{" "}
                      {seriesDetails.seasons[0].season_number == 0
                        ? last.season_number + 1
                        : last.season_number}{" "}
                    </span>
                    <span className="flex items-center gap-2 bg-[#23272f] text-yellow-400 px-3 py-1 rounded-lg font-semibold shadow">
                      <FaStar className="text-yellow-400" /> {last.vote_average}
                    </span>
                    <span className="text-white text-base md:text-lg">
                      {last.air_date?.slice(0, 4)} | {last.episode_count}{" "}
                      Episodes
                    </span>
                  </div>
                  <div className="mt-2">
                    {last.overview ? (
                      <ShowMoreText
                        width={600}
                        lines={4}
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
                      <h1 className="font-bold text-white mt-4 text-lg text-center">
                        This Season Doesn't Have Overview Yet
                      </h1>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link
                      className="text-[#0DCAF0] hover:underline font-bold text-center sm:text-left transition"
                      to={`/detailssereis/${idSeries}/season/${last.season_number}`}
                    >
                      All Episodes
                    </Link>
                    <Link
                      className="text-[#0DCAF0] hover:underline font-bold text-center sm:text-left transition"
                      to={`/detailssereis/${idSeries}/name/${nameSeries}`}
                    >
                      All Seasons
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* /season */}
        {/* reviews */}
        {reviewsSeriesLoading ? (
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
          <div className=" w-full flex flex-col  text-white container mx-auto">
            <h1 className="text-[#0DCAF0] text-3xl text-center md:text-start mt-5">
              Social
            </h1>
            <h1 className="text-white font-bold  mt-10 text-2xl text-center md:text-start mb-10 md:mb-0">
              REVIEWS{" "}
              <span className="text-[#0DCAF0]">
                {reviewsSeries.results?.length}
              </span>
            </h1>
            <div className="w-full flex justify-start items-center my-10">
              {reviewsSeries.results && reviewsSeries.results.length >= 1 ? (
                <div className="">
                  <div className="w-full max-w-2xl bg-[#23272f] rounded-2xl shadow-lg p-6 flex flex-col gap-4">
                    {reviewsSeries.results?.slice(0, 1).map((review, i) => (
                      <div
                        key={i}
                        className="flex flex-col md:flex-row gap-5 items-start"
                      >
                        {/* Avatar */}
                        <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 rounded-full bg-[#0DCAF0]/10 border-2 border-[#0DCAF0]">
                          <svg
                            className="w-10 h-10 text-[#0DCAF0]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M6 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
                          </svg>
                        </div>
                        {/* Review Content */}
                        <div className="flex-1 flex flex-col gap-2">
                          <h2 className="text-xl font-bold text-[#0DCAF0]">
                            {review.author}
                            <span className="text-sm text-gray-400 font-normal ms-2">
                              {review.created_at
                                ? new Date(
                                    review.created_at
                                  ).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  })
                                : ""}
                            </span>
                          </h2>
                          <div className="text-base text-white leading-relaxed">
                            <ShowMoreText width={550}>
                              {review.content}
                            </ShowMoreText>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {reviewsSeries?.results.length > 1 ? (
                    <Link
                      to={`/Detailsseries/${idSeries}`}
                      className="w-24  text-[#0DCAF0]  py-2 hover:text-[#0DCAF0] text-center md:text-start hover:underline "
                    >
                      All Reviews
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <div className="text-2xl bg-[#23272f] rounded-2xl py-8 px-6 font-bold text-center  flex justify-center items-center text-white">
                  We don't have any reviews for
                  <span className="text-[#0DCAF0] ms-3">
                    {seriesDetails.name}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        {videoSeriesLoading ? (
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
          <div className="  flex flex-col gap-8 text-white   container mx-auto mt-10 ">
            <div className="w-full flex flex-col gap-8">
              <h2 className="text-[#0DCAF0] text-3xl font-bold mb-4 text-center md:text-start">
                Media
              </h2>
              <Tabs value="videos" className="bg-transparent">
                <TabsHeader className="flex flex-col md:flex-row gap-2 bg-[#23272f] rounded-2xl p-2   mx-auto md:mx-0">
                  <Tab
                    value="videos"
                    className="px-4 py-2 rounded-xl font-bold text-[#87cbd9] data-[selected=true]:bg-[#0DCAF0] data-[selected=true]:text-black transition-all"
                  >
                    Videos{" "}
                    <span className="text-[#0DCAF0]">
                      ({videoSeries?.length || 0})
                    </span>
                  </Tab>
                  <Tab
                    value="backdrops"
                    className="px-4 py-2 rounded-xl font-bold text-[#87cbd9] data-[selected=true]:bg-[#0DCAF0] data-[selected=true]:text-black transition-all"
                  >
                    Backdrops{" "}
                    <span className="text-[#0DCAF0]">
                      ({backdrops?.length || 0})
                    </span>
                  </Tab>
                  <Tab
                    value="posters"
                    className="px-4 py-2 rounded-xl font-bold text-[#87cbd9] data-[selected=true]:bg-[#0DCAF0] data-[selected=true]:text-black transition-all"
                  >
                    Posters{" "}
                    <span className="text-[#0DCAF0]">
                      ({posters?.length || 0})
                    </span>
                  </Tab>
                </TabsHeader>
                <TabsBody>
                  <TabPanel value="videos">
                    <div className="flex flex-wrap gap-6 justify-center mt-6">
                      {videoSeries &&
                        videoSeries.slice(0, 6).map((serie, i) => (
                          <div
                            key={i}
                            className="rounded-2xl overflow-hidden shadow-lg bg-black/40"
                          >
                            <iframe
                              width="320"
                              height="200"
                              src={`https://www.youtube.com/embed/${serie.key}`}
                              title="YouTube video player"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allowFullScreen
                              className="rounded-2xl"
                            ></iframe>
                          </div>
                        ))}
                    </div>
                    {videoSeries && videoSeries.length > 6 && (
                      <div className="mt-4 text-center">
                        <Link
                          to={`/Detailsseries/${idSeries}/title/${nameSeries}/vid`}
                          className="text-[#0DCAF0] font-bold underline hover:text-[#0DCAF0]"
                        >
                          All Videos
                        </Link>
                      </div>
                    )}
                  </TabPanel>
                  <TabPanel value="backdrops">
                    <div className="flex flex-wrap gap-6 justify-center mt-6">
                      {backdrops &&
                        backdrops.slice(0, 6).map((drop, i) => (
                          <div
                            key={i}
                            className="rounded-2xl overflow-hidden shadow-lg bg-black/40"
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${drop.file_path}`}
                              alt=""
                              className="rounded-2xl w-[150px]  object-cover"
                            />
                          </div>
                        ))}
                    </div>
                    {backdrops && backdrops.length > 6 && (
                      <div className="mt-4 text-center">
                        <Link
                          to={`/Detailsseries/${idSeries}/title/${nameSeries}/backdrops`}
                          className="text-[#0DCAF0] font-bold underline hover:text-[#0DCAF0]"
                        >
                          All Backdrops
                        </Link>
                      </div>
                    )}
                  </TabPanel>
                  <TabPanel value="posters">
                    <div className="flex flex-wrap gap-6 justify-center mt-6">
                      {posters &&
                        posters.slice(0, 6).map((poster, i) => (
                          <div
                            key={i}
                            className="rounded-2xl overflow-hidden shadow-lg bg-black/40"
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster.file_path}`}
                              alt=""
                              className="rounded-2xl w-[150px]  object-cover"
                            />
                          </div>
                        ))}
                    </div>
                    {posters && posters.length > 6 && (
                      <div className="mt-4 text-center">
                        <Link
                          to={`/Detailsseries/${idSeries}/title/${nameSeries}/posters`}
                          className="text-[#0DCAF0] font-bold underline hover:text-[#0DCAF0]"
                        >
                          All Posters
                        </Link>
                      </div>
                    )}
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </div>
          </div>
        )}
        {/* s__ recommend serie */}
        {recommendationLoadingSeries ? (
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
          <div className="container mx-auto flex flex-col">
            <h1 className="text-2xl font-bold text-[#0DCAF0] my-10 text-center md:text-start">
              RECOMMENDATIONS
            </h1>
            {recommendationSeries.length >= 1 ? (
              <div className="w-full">
                <div className="flex overflow-x-auto gap-7 px-2 md:px-4 pb-4 hide-scrollbar">
                  {recommendationSeries.map((recoSerie, i) => (
                    <Card
                      key={i}
                      className="min-w-[220px] max-w-[220px] bg-gradient-to-br from-[#181c23] to-[#23272f] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col"
                      onClick={() => dispatch(aboutRecommend())}
                    >
                      <Link
                        to={`/series/${recoSerie.id}/title/${recoSerie.original_title}`}
                      >
                        <CardHeader
                          color="white"
                          className="relative h-72 rounded-3xl overflow-hidden"
                        >
                          <img
                            src={
                              recoSerie.poster_path
                                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${recoSerie.poster_path}`
                                : fakeImg
                            }
                            className="w-full h-full object-cover"
                            alt={recoSerie.name}
                          />
                        </CardHeader>
                        <CardBody className="flex flex-col flex-1 justify-between p-4">
                          <h2
                            className="text-lg font-bold text-white truncate mb-2"
                            title={recoSerie.name}
                          >
                            {recoSerie.name}
                          </h2>
                          <div className="flex flex-col gap-1 mb-2">
                            {recoSerie.first_air_date && (
                              <span className="text-[#0DCAF0] text-xs font-semibold">
                                {new Date(
                                  recoSerie.first_air_date
                                ).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            )}
                            <span className="absolute top-2 right-2 bg-[#0DCAF0] text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                              {recoSerie.vote_average
                                ? `⭐ ${recoSerie.vote_average}`
                                : "N/A"}
                            </span>
                          </div>
                        </CardBody>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-white text-2xl my-5 w-full min-h-[80px] bg-gradient-to-br from-[#23272f] to-[#181c23] rounded-2xl flex justify-center items-center shadow-lg">
                Sorry, We Don't Have Any Recommendation For This Series
                <span className="ms-2 text-[#0DCAF0]">
                  <CgSmileSad />
                </span>
              </div>
            )}
          </div>
        )}
        <div className="md:w-[25%] flex md:hidden flex-col justify-center items-center bg-[#23272f] rounded-2xl shadow-lg p-6 gap-8">
          <div className="flex gap-x-4 text-[#0DCAF0] text-3xl mb-4">
            <FaFacebook className="hover:text-[#1877f3] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#e1306c] cursor-pointer transition" />
            <FaTwitter className="hover:text-[#1da1f2] cursor-pointer transition" />
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <div>
              <h1 className="text-white text-lg">Status</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {seriesDetails.status}
              </h2>
            </div>
            <div>
              <h1 className="text-white text-lg">Budget</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {seriesDetails.budget
                  ? seriesDetails.budget.toLocaleString() + " $"
                  : "UNKNOWN"}
              </h2>
            </div>
            <div>
              <h1 className="text-white text-lg">Original Language</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {seriesDetails.original_language?.toUpperCase()}
              </h2>
            </div>
            <div>
              <h1 className="text-white text-lg">Revenue</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {seriesDetails.revenue
                  ? seriesDetails.revenue.toLocaleString() + " $"
                  : "UNKNOWN"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSeries;
