import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import img from "../../Photos/th.jpeg";
import fakeImg from "../../Photos/avatar-black-and-white-clipart-7.jpg";
import {
  getCastCrew,
  getReviewMovie,
} from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";
import { BiAddToQueue } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import ShowMoreText from "react-show-more-text";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  getBackDrops,
  getVideoMovie,
  ////
  getRecommendMovie,
  aboutRecommend,
  ////
} from "./../../SystmeRdx/Slices/moviesSlices/mediaSlice";

import { CgSmileSad } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const MovieDetails = () => {
  const { idMovie, nameMovie } = useParams();

  const dispatch = useDispatch();
  ////////////////

  const {
    movieDetails,
    movieDetails: { genres },
    movieDetailsLoading,
  } = useSelector((state) => state.myMovies);
  const {
    videoMovie,
    videoLoading,
    checkRecommend,
    recommendationMovie,
    recommendationLoading,

    backDrops: { backdrops, posters },
  } = useSelector((state) => state.myMediaMovie);
  const {
    castAndCrew: { cast, crew },
    castShown,
    reviews,
    castAndCrewLoading,
    reviewsLoading,
  } = useSelector((state) => state.AllcastAndCrew);

  const { checkSearchMovie } = useSelector((state) => state.aboutSearchMovie);

  useEffect(() => {
    dispatch(getMovieDetails(idMovie));

    dispatch(getCastCrew(idMovie));
    dispatch(getReviewMovie(idMovie));
    dispatch(getVideoMovie(idMovie));
    dispatch(getBackDrops(idMovie));

    dispatch(getRecommendMovie(idMovie));
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [checkSearchMovie ? checkSearchMovie : checkSearchMovie]);

  useEffect(() => {
    dispatch(getMovieDetails(idMovie));

    dispatch(getCastCrew(idMovie));
    dispatch(getReviewMovie(idMovie));
    dispatch(getVideoMovie(idMovie));
    dispatch(getBackDrops(idMovie));

    dispatch(getRecommendMovie(idMovie));
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [checkRecommend ? checkRecommend : checkRecommend]);

  ////////////////////
  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
  };
  //tabs
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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  // console.log(movieDetails.runtime);

  return (
    <div className="">
      <div className="">
        <div className=" w-full ">
          {movieDetailsLoading ? (
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
                  src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
                  alt={movieDetails.title}
                  className="w-full h-full object-cover object-top brightness-50"
                  style={{ minHeight: "100vh" }}
                />
              </div>
              {/* Overlay Content */}
              <div className="relative z-10 w-full h-full bg-black/70 flex flex-col justify-center">
                <div className="container mx-auto px-4 py-10 flex flex-col gap-8">
                  {/* Movie Title & Info */}
                  <div className="text-center md:text-left">
                    <h1 className="text-[#0DCAF0] text-3xl font-bold mb-2">
                      Movie Details
                    </h1>
                    <h2 className="text-white text-3xl font-bold mb-4">
                      {movieDetails.title}
                    </h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xl text-light-green-100 font-semibold">
                      <span>
                        {movieDetails.release_date} (
                        {movieDetails.original_language?.toUpperCase()})
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
                        {movieDetails.runtime
                          ? `${movieDetails.runtime} min`
                          : ""}
                      </span>
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex flex-col lg:flex-row gap-10 items-start">
                    {/* Poster */}
                    <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
                        alt={movieDetails.title}
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
                          {movieDetails.overview}
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
                            {videoMovie && videoMovie[0] ? (
                              <iframe
                                className="rounded-2xl w-full h-[40vh]"
                                src={`https://www.youtube.com/embed/${videoMovie[0].key}?si=zzkbzZD-WPe1M4_g`}
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

        {/* TOp Billed cast */}
        <h1 className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold tracking-wide drop-shadow-lg">
          Top Billed Cast
        </h1>
        {castAndCrewLoading ? (
          <div className="grid min-h-[140px] w-full place-items-center rounded-lg p-6 h-screen justify-items-center items-center bg-[#181c23]/80">
            <svg
              className="w-16 h-16 animate-spin text-[#0DCAF0]"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              {/* ...svg paths... */}
            </svg>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 w-full container mx-auto">
            <div className="w-full md:w-[75%] overflow-x-auto flex gap-6 py-4 px-2">
              {castShown &&
                castShown.map((actor, i) => (
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
                    {movieDetails.status}
                  </h2>
                </div>
                <div>
                  <h1 className="text-white text-lg">Budget</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {movieDetails.budget
                      ? movieDetails.budget.toLocaleString() + " $"
                      : "UNKNOWN"}
                  </h2>
                </div>
                <div>
                  <h1 className="text-white text-lg">Original Language</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {movieDetails.original_language?.toUpperCase()}
                  </h2>
                </div>
                <div>
                  <h1 className="text-white text-lg">Revenue</h1>
                  <h2 className="text-[#0DCAF0] mt-1 text-base">
                    {movieDetails.revenue
                      ? movieDetails.revenue.toLocaleString() + " $"
                      : "UNKNOWN"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto mt-4">
          <Link
            to={`/movieDetails/${idMovie}/title/${nameMovie}/cast`}
            className="block w-44 text-[#0DCAF0] py-3 text-center md:text-left hover:underline font-semibold tracking-wide transition"
          >
            Full Cast And Crew
          </Link>
        </div>
        {/* reviews */}
        {reviewsLoading ? (
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
              REVIEWS <span className="text-[#0DCAF0]">{reviews.length}</span>
            </h1>
            <div className="w-full flex justify-start items-center my-10">
              {reviews.length >= 1 ? (
                <div className="">
                  <div className="w-full max-w-2xl bg-[#23272f] rounded-2xl shadow-lg p-6 flex flex-col gap-4">
                    {reviews.slice(0, 1).map((review, i) => (
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
                  {/* Link to all reviews */}
                  {reviews?.length > 1 ? (
                    <Link
                      to={`/movieDetails/${idMovie}`}
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
                    {movieDetails.title}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Media */}
        {videoLoading ? (
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
                <TabsHeader className="flex flex-col md:flex-row gap-2 bg-[#23272f] rounded-2xl p-2  mx-auto md:mx-0">
                  <Tab
                    value="videos"
                    className="px-4 py-2 rounded-xl font-bold text-[#87cbd9] data-[selected=true]:bg-[#0DCAF0] data-[selected=true]:text-black transition-all"
                  >
                    Videos{" "}
                    <span className="text-[#0DCAF0]">
                      ({videoMovie?.length || 0})
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
                      {videoMovie &&
                        videoMovie.slice(0, 6).map((movie, i) => (
                          <div
                            key={i}
                            className="rounded-2xl overflow-hidden shadow-lg bg-black/40"
                          >
                            <iframe
                              width="320"
                              height="200"
                              src={`https://www.youtube.com/embed/${movie.key}`}
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
                    {videoMovie && videoMovie.length > 6 && (
                      <div className="mt-4 text-center">
                        <Link
                          to={`/movieDetails/${idMovie}/title/${nameMovie}/vid`}
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
                              className="rounded-2xl w-[200px] h-[120px] object-cover"
                            />
                          </div>
                        ))}
                    </div>
                    {backdrops && backdrops.length > 6 && (
                      <div className="mt-4 text-center">
                        <Link
                          to={`/movieDetails/${idMovie}/title/${nameMovie}/backdrops`}
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
                              className="rounded-2xl w-[200px] h-[300px] object-cover"
                            />
                          </div>
                        ))}
                    </div>
                    {posters && posters.length > 6 && (
                      <div className="mt-4 text-center">
                        <Link
                          to={`/movieDetails/${idMovie}/title/${nameMovie}/posters`}
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

        {/* s__ recommend movie */}
        {recommendationLoading ? (
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
            {recommendationMovie.length >= 1 ? (
              <div className="w-full">
                <div className="flex overflow-x-auto gap-7 px-2 md:px-4 pb-4 hide-scrollbar">
                  {recommendationMovie.map((recomovie, i) => (
                    <Card
                      key={i}
                      className="min-w-[220px] max-w-[220px] bg-gradient-to-br from-[#181c23] to-[#23272f] rounded-3xl shadow-xl hover:scale-105 transition-transform duration-200 flex flex-col"
                      onClick={() => dispatch(aboutRecommend())}
                    >
                      <Link
                        to={`/movies/${recomovie.id}/title/${recomovie.original_title}`}
                      >
                        <CardHeader
                          color="white"
                          className="relative h-72 rounded-t-3xl overflow-hidden"
                        >
                          <img
                            src={
                              recomovie.poster_path
                                ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${recomovie.poster_path}`
                                : fakeImg
                            }
                            className="w-full h-full object-cover"
                            alt={recomovie.title}
                          />
                        </CardHeader>
                        <CardBody className="flex flex-col flex-1 justify-between p-4">
                          <h2
                            className="text-lg font-bold text-white truncate mb-2"
                            title={recomovie.title}
                          >
                            {recomovie.title}
                          </h2>
                          <div className="flex flex-col gap-1 mb-2">
                            {recomovie.release_date && (
                              <span className="text-[#0DCAF0] text-xs font-semibold">
                                {new Date(
                                  recomovie.release_date
                                ).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </span>
                            )}
                            <span className="absolute top-2 right-2 bg-[#0DCAF0] text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                              {recomovie.vote_average
                                ? `⭐ ${recomovie.vote_average}`
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
        <div className=" flex md:hidden w-full  flex-col justify-center items-center bg-[#23272f] rounded-2xl shadow-lg p-6 gap-8">
          <div className="flex gap-x-4 text-[#0DCAF0] text-3xl mb-4">
            <FaFacebook className="hover:text-[#1877f3] cursor-pointer transition" />
            <FaInstagram className="hover:text-[#e1306c] cursor-pointer transition" />
            <FaTwitter className="hover:text-[#1da1f2] cursor-pointer transition" />
          </div>
          <div className="flex flex-col gap-y-5 w-full justify-center items-center">
            <div>
              <h1 className="text-white text-lg text-center">Status</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {movieDetails.status}
              </h2>
            </div>
            <div>
              <h1 className="text-white text-lg text-center">Budget</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {movieDetails.budget
                  ? movieDetails.budget.toLocaleString() + " $"
                  : "UNKNOWN"}
              </h2>
            </div>
            <div>
              <h1 className="text-white text-lg">Original Language</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-center">
                {movieDetails.original_language?.toUpperCase()}
              </h2>
            </div>
            <div>
              <h1 className="text-white text-lg text-center">Revenue</h1>
              <h2 className="text-[#0DCAF0] mt-1 text-base">
                {movieDetails.revenue
                  ? movieDetails.revenue.toLocaleString() + " $"
                  : "UNKNOWN"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
