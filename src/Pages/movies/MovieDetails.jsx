import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import img from "../../Photos/th.jpeg";

import {
  getCastCrew,
  getReviewMovie,
} from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";
import { BiAddToQueue } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import {
  Breadcrumbs,
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
  }, [checkSearchMovie ? checkSearchMovie : checkSearchMovie]);

  useEffect(() => {
    dispatch(getMovieDetails(idMovie));

    dispatch(getCastCrew(idMovie));
    dispatch(getReviewMovie(idMovie));
    dispatch(getVideoMovie(idMovie));
    dispatch(getBackDrops(idMovie));

    dispatch(getRecommendMovie(idMovie));
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
  const go = () => {};

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
            <div
              className="relative  w-full h-full"
              // className={`w-full    bg-no-repeat bg-center bg-cover mb-10 `}
              // style={{
              //   backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.backdrop_path}')`,
              // }}
            >
              <div className="h-[130vh] w-full">
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.backdrop_path}`}
                  alt="image 1"
                  className="h-full w-full bg-cover "
                />
              </div>

              <div className="absolute inset-0  w-full h-full place-items-center bg-black/75 ">
                <div className="w-full pt-5 text-center font-bold grid gap-y-5">
                  <h1 className="text-[#0DCAF0]  text-3xl w-full  ">
                    Movie Details
                  </h1>
                  <h1 className="text-light-green-100 text-3xl">
                    {movieDetails.title}
                  </h1>
                  <div className="w-full flex flex-col md:flex-row  justify-center  text-2xl">
                    <h1 className="text-light-green-100 text-xl font-bold">
                      {movieDetails.release_date} (
                      {movieDetails.original_language})
                    </h1>
                    {genres &&
                      genres.map((gener, i) => (
                        <h1
                          className="text-light-green-100 text-xl font-bold ms-2"
                          key={i}
                        >
                          {gener.name},
                        </h1>
                      ))}
                    <h1 className="text-light-green-100 text-xl font-bold px-5">
                      {isNaN(movieDetails.runtime / 60)
                        ? ""
                        : movieDetails.runtime}{" "}
                      min
                    </h1>
                  </div>
                </div>
                <div className="w-full container mx-auto flex flex-col  lg:flex-row  mt-10 ">
                  <div className="w-full lg:w-[30%] flex justify-center items-center">
                    <div className=" mb-5 w-[60%] h-[60%]  md:w-[70%] md:h-[70%] lg:w-full lg:h-screen flex justify-center rounded-2xl   ">
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
                        className="w-[80%] h-[80%] md:w-[60%] md:h-[50%]  lg:w-full lg:h-[90vh]   rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-[70%] flex flex-col ms-0 lg:ms-10  justify-center md:justify-evenly items-center lg:justify-between ">
                    <div className="mb-10">
                      <h1 className="text-3xl text-[#0DCAF0] font-bold ">
                        OverView :{" "}
                        <span className="font-medium text-xl text-light-green-100 w-full">
                          {movieDetails.overview}
                        </span>
                      </h1>
                    </div>
                    <div className=" ">
                      <h1 className="text-3xl text-[#0DCAF0] font-bold">
                        Casting :
                      </h1>
                    </div>
                    <div className="flex py-10  justify-between items-center w-full">
                      <div className="w-full justify-between text-xl text-light-green-100 text-center">
                        {cast &&
                          cast.map((member, i) => (
                            <div
                              className=" relative flex w-full justify-between"
                              key={i}
                            >
                              <div className="flex flex-col ">
                                {i == 1 && (
                                  <div className="flex justify-between  absolute">
                                    <div className="flex flex-col ">
                                      {member.name}{" "}
                                      <h1 className="text-yellow-800">
                                        Acting
                                      </h1>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-col ">
                                {i == 2 && (
                                  <div>
                                    {member.name}{" "}
                                    <h1 className="text-yellow-800">Acting</h1>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    {/*  */}
                    <div className="w-full  ">
                      <div className="w-full   text-xl text-light-green-100 text-center">
                        {crew &&
                          crew.map((member, i) => (
                            <div
                              className=" relative flex  w-full justify-between"
                              key={i}
                            >
                              <div className="flex flex-col ">
                                {i == 1 && (
                                  <div className="flex justify-between  absolute">
                                    <div className="flex flex-col ">
                                      {member.name}{" "}
                                      <h1 className="text-yellow-800">
                                        Production
                                      </h1>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-col ">
                                {i == 2 && (
                                  <div>
                                    {member.name}{" "}
                                    <h1 className="text-yellow-800">
                                      Direction
                                    </h1>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-evenly items-center text-white text-2xl w-full lg:justify-between mt-20   ">
                      <div className="flex flex-col">
                        <h1 className="flex justify-center items-center text-3xl">
                          <BiAddToQueue />
                        </h1>
                        <h1>Add To Watch List</h1>
                      </div>
                      <h1 className="text-white ">||</h1>

                      <div className="flex flex-col">
                        <h1 className="flex justify-center items-center text-yellow-600 text-3xl">
                          <IoStarOutline />
                        </h1>
                        <h1>Rate Series</h1>
                      </div>
                      <h1 className="text-white ">||</h1>

                      <div className="flex flex-col ">
                        <Button
                          onClick={handleOpen}
                          variant="text"
                          className="text-white text-xl font-medium"
                        >
                          <h1 className="flex justify-center items-center text-[red] text-3xl ">
                            <FaVideo />
                          </h1>
                          play trailer
                        </Button>
                        <Dialog
                          open={open}
                          handler={handleOpen}
                          className="w-[50%]  md:w-[70%]  lg:w-full h-1/2 "
                        >
                          <DialogBody className="bg-gray-900 ">
                            {videoMovie &&
                              videoMovie.map(
                                (movie, i) =>
                                  i == 0 && (
                                    <div className="" key={i}>
                                      <iframe
                                        className="rounded-2xl w-full h-[40vh]"
                                        src={`https://www.youtube.com/embed/${movie.key}?si=zzkbzZD-WPe1M4_g`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                      ></iframe>
                                    </div>
                                  )
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
                    </div>
                    <div className="flex justify-center my-10">
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
              </div>
            </div>
          )}
        </div>

        {/* page two */}
        <h1 className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold ">
          Top Billed Cast
        </h1>
        {castAndCrewLoading ? (
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
          <div className="flex justify-evenly w-full container mx-auto   ">
            <div className="   w-[75%]  overflow-x-auto flex gap-2 container mx-auto">
              {castShown &&
                castShown.map((actor, i) => (
                  <div className="" key={i}>
                    <Link to={`/person/${actor.id}/hisname/${actor.name}`}>
                      <Card className="w-[12rem] h-[26rem] bg-[#212529] rounded shadow-gray-900">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded w-full h-[65%]"
                        >
                          {actor.profile_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                              alt="ui/ux review check"
                            />
                          ) : (
                            <img src={img} className="w-full h-[18rem]" />
                          )}
                        </CardHeader>
                        <CardBody className=" text-1xl h-[35%]">
                          <div
                            variant="h4"
                            className="flex flex-col  text-white gap-y-2"
                          >
                            <h1 className="text-xl font-bold ">
                              {" "}
                              {actor.name}
                            </h1>
                            <h1 className="text-yellow-800 text-xl">
                              {" "}
                              {actor.character.split(" ").slice(0, 3).join(" ")}
                            </h1>
                          </div>
                        </CardBody>
                      </Card>
                    </Link>
                  </div>
                ))}
            </div>
            <div className=" md:w-[25%] hidden md:flex justify-center items-center ">
              <div className="  flex  flex-col ">
                <div className="flex gap-x-3 text-[#0DCAF0] text-3xl  ">
                  <h1 className="hover:text-4xl">
                    <FaFacebook />
                  </h1>
                  <h1 className="hover:text-4xl">
                    <FaInstagram />
                  </h1>
                  <h1 className="hover:text-4xl">
                    <FaTwitter />
                  </h1>
                </div>
                <div className="flex justify-center flex-col gap-y-7">
                  <div className="text-white text-2xl mt-10">
                    <h1>Status</h1>
                    <h1 className="text-[#0DCAF0] mt-2">
                      {movieDetails.status}
                    </h1>
                  </div>
                  <div className="text-white text-2xl">
                    <h1>Budget</h1>
                    <div className="text-[#0DCAF0] mt-2">
                      {movieDetails.budget ? (
                        movieDetails.budget
                      ) : (
                        <h1>UNKOWN</h1>
                      )}
                    </div>
                  </div>
                  <div className="text-white text-2xl">
                    <h1>original_lang</h1>
                    <h1 className="text-[#0DCAF0] mt-2">
                      {movieDetails.original_language?.toUpperCase()}
                    </h1>
                  </div>

                  <div className="text-white text-2xl">
                    <h1>revenue</h1>
                    <div className="text-[#0DCAF0] mt-2">
                      {movieDetails.revenue ? (
                        movieDetails.revenue
                      ) : (
                        <h1>UNKOWN</h1>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto mt-2  text-[#0DCAF0]  ">
          <Link
            to={`/movieDetails/${idMovie}/title/${nameMovie}/cast`}
            className="w-full  text-[#0DCAF0]  py-5 hover:text-[#0DCAF0] text-center md:text-start hover:underline "
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
            {reviews.length >= 1 ? (
              <div className="">
                {reviews.map(
                  (review, i) =>
                    i == 0 && (
                      <div
                        className="flex justify-center items-center md:flex md:justify-start"
                        key={i}
                      >
                        <div className=" w-[75%] bg-[#212529]  rounded-2xl py-5">
                          <div className="container mx-auto w-[70%]  flex flex-col gap-5 mt-5">
                            <h1 className="text-3xl">
                              A Review by{" "}
                              <span className="text-[#0DCAF0]">
                                {review.author}
                              </span>
                            </h1>
                            <h1 className="text-2xl">
                              Written by{" "}
                              <span className="text-[#0DCAF0]">
                                {review.author}
                              </span>{" "}
                              on{" "}
                              <span className="text-[#0DCAF0]">
                                {review.created_at
                                  .split("")
                                  .slice(0, 10)
                                  .join("")}
                              </span>
                              {}
                            </h1>
                            <h1>
                              <span className="text-[#0DCAF0] text-2xl font-bold">
                                Content :-
                              </span>
                              <ShowMoreText width={550}>
                                {review.content}
                              </ShowMoreText>
                            </h1>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div className="text-3xl  bg-[#212529]  rounded-2xl py-5 font-bold text-center my-10 flex justify-center">
                We don't have any reviews for{"  "}
                <span className="text-[#0DCAF0] ms-3">
                  {" "}
                  {movieDetails.title}
                </span>
              </div>
            )}
            {reviews.length >= 1 && (
              <Link
                to={`/movieDetails/${idMovie}`}
                className="w-full  text-[#0DCAF0]  py-2 hover:text-[#0DCAF0] text-center md:text-start hover:underline "
              >
                All Reviews
              </Link>
            )}
          </div>
        )}

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
            <h1 className="text-[#0DCAF0] text-3xl text-center md:text-start">
              Media
            </h1>
            <div className="">
              <Tabs
                value="html"
                className="text-center md:text-start bg-transparent"
              >
                <TabsHeader className="w-[30%] flex flex-col items-center justify-center lg:flex-row lg:w-[40%]  bg-transparent border-2 border-gray-700 rounded-2xl ">
                  {data.map(({ label, value, name }) => (
                    <Tab
                      key={value}
                      value={value}
                      className="flex justify-center md:justify-start bg-transparent"
                    >
                      <Breadcrumbs className=" bg-transparent underline underline-offset-8 decoration-blue-800     ">
                        {value == "html" ? (
                          <h1 className="  text-blue-500  font-bold  focus-visible:ring  ">
                            {label} {videoMovie && videoMovie.length}
                          </h1>
                        ) : value == "react" ? (
                          <h1 className=" font-bold text-blue-500">
                            {label} {backdrops && backdrops.length}
                          </h1>
                        ) : (
                          <h1 className=" font-bold text-blue-500">
                            {label} {posters && posters.length}
                          </h1>
                        )}
                      </Breadcrumbs>
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className=" ">
                  {data.map(
                    ({ value, desc }, i) =>
                      i <= 5 && (
                        <div key={i} className="">
                          <TabPanel value={value}>
                            {value == "html" ? (
                              <div className="w-[75%] flex overflow-auto gap-6">
                                {videoMovie &&
                                  videoMovie.map(
                                    (movie, i) =>
                                      i <= 5 && (
                                        <div className="" key={i}>
                                          <iframe
                                            width="320"
                                            height="320"
                                            src={`https://www.youtube.com/embed/${movie.key}?si=bLuvl3WnAUMERPL9`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                          ></iframe>
                                        </div>
                                      )
                                  )}
                              </div>
                            ) : (
                              ""
                            )}
                          </TabPanel>
                          <TabPanel value={value} className=" ">
                            {value == "react" && (
                              <div className="  flex flex-col  md:flex-row  gap-6  ">
                                {backdrops &&
                                  backdrops.map(
                                    (drop, i) =>
                                      i <= 5 && (
                                        <div
                                          className="flex justify-center rounded-2xl"
                                          key={i}
                                        >
                                          <img
                                            className="rounded-2xl"
                                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${drop.file_path}`}
                                            alt=""
                                            width={200}
                                            height={200}
                                          />
                                        </div>
                                      )
                                  )}
                              </div>
                            )}
                          </TabPanel>

                          <TabPanel value={value}>
                            {value == "vue" && (
                              <div className=" flex  gap-6  flex-col  md:flex-row ">
                                {posters &&
                                  posters.map(
                                    (poster, i) =>
                                      i <= 5 && (
                                        <div
                                          className="flex justify-center rounded-2xl"
                                          key={i}
                                        >
                                          <img
                                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster.file_path}`}
                                            alt=""
                                            className="rounded-2xl"
                                            width={200}
                                            height={200}
                                          />
                                        </div>
                                      )
                                  )}
                              </div>
                            )}
                            <div className="">
                              {value == "html"
                                ? videoMovie &&
                                  videoMovie.length > 2 && (
                                    <Link
                                      to={`/movieDetails/${idMovie}/title/${nameMovie}/vid`}
                                      className="w-full  text-[#0DCAF0]   hover:text-[#0DCAF0] text-center md:text-start hover:underline  "
                                    >
                                      All Videos
                                    </Link>
                                  )
                                : value == "react"
                                ? backdrops &&
                                  backdrops.length > 6 && (
                                    <Link
                                      to={`/movieDetails/${idMovie}/title/${nameMovie}/backdrops`}
                                      className="w-full  text-[#0DCAF0]   hover:text-[#0DCAF0] text-center md:text-start hover:underline "
                                    >
                                      All BackDrops
                                    </Link>
                                  )
                                : value == "vue"
                                ? posters &&
                                  posters.length > 6 && (
                                    <Link
                                      to={`/movieDetails/${idMovie}/title/${nameMovie}/posters`}
                                      className="w-full  text-[#0DCAF0]  py-5 hover:text-[#0DCAF0] text-center md:text-start hover:underline  mt-10"
                                    >
                                      All Posters
                                    </Link>
                                  )
                                : ""}
                            </div>
                          </TabPanel>
                        </div>
                      )
                  )}
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
          <div className=" container mx-auto flex flex-col">
            <h1 className="text-2xl font-bold text-[#0DCAF0] my-10 text-center md:text-start">
              RECOMMENDATIONS
            </h1>
            {recommendationMovie.length >= 1 ? (
              <div className="w-full flex justify-center md:justify-start">
                <div className="w-[75%] flex overflow-auto gap-6  ">
                  {recommendationMovie.map((recomovie, i) => (
                    <div className="" key={i}>
                      <Card
                        className="mt-6 w-60 md:w-96 bg-gray-900  font-bold "
                        onClick={() => dispatch(aboutRecommend())}
                      >
                        <Link
                          to={`/movies/${recomovie.id}/title/${recomovie.original_title}`}
                        >
                          <CardHeader color="white" className="relative h-96">
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${recomovie.poster_path}`}
                              className="w-[150%] h-[100%] "
                              alt="card-image"
                            />
                          </CardHeader>
                          <CardBody>
                            <Typography
                              variant="h5"
                              color="white"
                              className="mb-2"
                            >
                              {recomovie.title}
                            </Typography>
                          </CardBody>
                        </Link>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-white text-2xl my-5  w-[75%] h-20 bg-gray-900 rounded-2xl flex justify-center items-center">
                Sorry We Don't Have Any Recommendation For This Movie
                <div className="ms-2 text-[#0DCAF0]">
                  <CgSmileSad />
                </div>
              </div>
            )}
          </div>
        )}
        <div className=" md:w-[25%] flex md:hidden justify-center items-center mt-5 md:mt-0 ">
          <div className="  flex  flex-col ">
            <div className="flex gap-x-3 text-[#0DCAF0] text-3xl  ">
              <h1 className="hover:text-4xl">
                <FaFacebook />
              </h1>
              <h1 className="hover:text-4xl">
                <FaInstagram />
              </h1>
              <h1 className="hover:text-4xl">
                <FaTwitter />
              </h1>
            </div>
            <div className="flex justify-center flex-col gap-y-7">
              <div className="text-white text-2xl mt-10">
                <h1>Status</h1>
                <h1 className="text-[#0DCAF0] mt-2">{movieDetails.status}</h1>
              </div>
              <div className="text-white text-2xl">
                <h1>Budget</h1>
                <div className="text-[#0DCAF0] mt-2">
                  {movieDetails.budget ? movieDetails.budget : <h1>UNKOWN</h1>}
                </div>
              </div>
              <div className="text-white text-2xl">
                <h1>original_lang</h1>
                <h1 className="text-[#0DCAF0] mt-2">
                  {movieDetails.original_language?.toUpperCase()}
                </h1>
              </div>

              <div className="text-white text-2xl">
                <h1>revenue</h1>
                <div className="text-[#0DCAF0] mt-2">
                  {movieDetails.revenue ? (
                    movieDetails.revenue
                  ) : (
                    <h1>UNKOWN</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
