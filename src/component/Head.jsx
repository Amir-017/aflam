import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
  Avatar,
  Badge,
} from "@material-tailwind/react";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  aboutMovie,
  aboutSearch,
  aboutSeries,
  del,
  getSearchMovies,
  getSearchSeries,
} from "../SystmeRdx/Slices/moviesSlices/searchMovies";
import { getMoviesPage } from "../SystmeRdx/Slices/moviesSlices/moviesSlice";
import { aboutRecommend } from "../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";

const Head = () => {
  const [openNav, setOpenNav] = useState(false);
  const [checkKeyUp, setMyCheckKeyUp] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 660 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as={Link} to="/" className="font-medium">
        <div className="text-gray-500 hover:bg-transparent   hover:text-white  flex items-center gap-2 py-2 pr-4  ">
          Home
        </div>
      </Typography>
      <Typography as={Link} to="/movies" className="font-medium ">
        <div className="hover:bg-transparent  text-gray-500 hover:bg-black hover:text-white flex items-center gap-2 py-2 pr-4 ">
          Movies
        </div>
      </Typography>
      <Typography as={Link} to="/series" className="font-medium">
        <div className="hover:bg-transparent text-gray-500 hover:bg-black hover:text-white  flex items-center gap-2 py-2 pr-4 ">
          Series
        </div>
      </Typography>
    </ul>
  );

  const { moviesSearch, searchLength, changeOneToAnother, seriesSearch } =
    useSelector((state) => state.aboutSearchMovie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesPage());
  }, []);

  const searchAll = (e) => {
    dispatch(getSearchMovies(e.target.value));
    dispatch(getSearchSeries(e.target.value));
    setMyCheckKeyUp(e.target.value);
    // console.log(checkKeyUp);
  };

  return (
    <div className="container mx-auto  sticky top-0 z-10 w-full h-max  rounded-2xl px-4 py-2 lg:px-8 lg:py-4 flex justify-center items-center   ">
      <div className="relative w-full ">
        <Navbar className="bg-transparent border-[#0DCAF0] border-solid border-2 ">
          <div className="container mx-auto flex flex-wrap items-center justify-between ">
            <Typography
              as={Link}
              to="/"
              variant="h6"
              className="mr-4 text-2xl cursor-pointer py-1.5 lg:ml-2 flex  "
            >
              <em>Redux Movies</em>
              <span className=" text-3xl ms-1 text-[#0DCAF0]">
                <BiMoviePlay />
              </span>
            </Typography>
            <div className="hidden lg:block">{navList}</div>
            <div className="hidden items-center gap-x-2 lg:flex lg:w-full lg:justify-center lg:items-center xl:w-[53%] xl:justify-start xl:items-start    ">
              <div className="relative flex w-full gap-2 md:w-max ">
                <input
                  className={`placeholder:italic placeholder:text-slate-400 block bg-transparent  border ${
                    changeOneToAnother == "serie"
                      ? "border-green-900"
                      : "border-red-900"
                  }  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm `}
                  placeholder={
                    changeOneToAnother == "serie"
                      ? "Search Series ..."
                      : "Search Movies ..."
                  }
                  type="text"
                  name="search"
                  onKeyUp={(e) => searchAll(e)}
                />
                <div className="!absolute left-3 top-[13px]">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                      fill="#CFD8DC"
                    />
                    <path
                      d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                      stroke="#CFD8DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="">
                <Button
                  size="md"
                  className="rounded-lg bg-transparent border-red-900 border-2 hover:shadow-red-900 "
                  onClick={() => dispatch(aboutMovie())}
                >
                  Search Movie
                </Button>{" "}
                <Button
                  size="md"
                  className="rounded-lg bg-transparent border-green-900 border-2 hover:shadow-green-900"
                  onClick={() => dispatch(aboutSeries())}
                >
                  Search Series
                </Button>
              </div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <div className="container mx-auto">
              {navList}
              <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
                <div className="relative w-full gap-2 md:w-max flex">
                  <input
                    className={`placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm ${
                      changeOneToAnother == "serie"
                        ? "border-green-900"
                        : "border-red-900"
                    }`}
                    placeholder={
                      changeOneToAnother == "serie"
                        ? "Search Series ..."
                        : "Search Movies ..."
                    }
                    type="text"
                    name="search"
                    onKeyUp={(e) => searchAll(e)}
                  />
                  <div className="!absolute left-3 top-[13px]">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                        fill="#CFD8DC"
                      />
                      <path
                        d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                        stroke="#CFD8DC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <Button
                  size="md"
                  className="mt-5 rounded-lg sm:mt-0 bg-transparent border-red-900 border-2 hover:shadow-red-900 w-40   "
                  onClick={() => dispatch(aboutMovie())}
                >
                  Search Movies
                </Button>
                <Button
                  size="md"
                  className="mt-3 rounded-lg sm:mt-0 bg-transparent border-green-900 border-2 hover:shadow-green-900 w-40 "
                  onClick={() => dispatch(aboutSeries())}
                >
                  Search Series
                </Button>
              </div>
            </div>
          </Collapse>
        </Navbar>
        {changeOneToAnother == "serie" ? (
          <div className="relative">
            {!searchLength ? (
              <div
                className={` overflow-auto ${
                  checkKeyUp ? "w-80  md:w-96 h-96" : ""
                } absolute  left-5 md:left-0 lg:left-32 xl:left-[27em]  `}
              >
                <Badge
                  onClick={() => dispatch(del())}
                  content="Del"
                  className="absolute right-[9em] top-[4em] text-xl font-bold cursor-pointer"
                >
                  <div className=" mt-5 rounded-2xl   grid gap-y-6 bg-gray-900  ">
                    {seriesSearch &&
                      seriesSearch.map((serie, i) => (
                        <div className="group hover:bg-[#0DCAF0] " key={i}>
                          <Link
                            to={`/series/${serie.id}/title/${serie.name}`}
                            className=" relative rounded-2xl  text-2xl   group-hover:text-3xl "
                          >
                            <Button
                              onClick={() => dispatch(aboutRecommend())}
                              className="bg-transparent group-hover:text-black w-full text-start"
                            >
                              {serie?.name}
                            </Button>
                            <Avatar
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${serie?.poster_path}`}
                              alt="avatar"
                              className="absolute right-3"
                            />

                            <hr className="mt-4" />
                          </Link>
                        </div>
                      ))}
                  </div>
                </Badge>
              </div>
            ) : (
              <div className="w-0"></div>
            )}
          </div>
        ) : (
          <div className="relative">
            {!searchLength ? (
              <div
                className={` overflow-auto ${
                  checkKeyUp ? "w-80  md:w-96 h-96" : ""
                } absolute  left-5 md:left-0 lg:left-32 xl:left-[27em]  `}
              >
                <Badge
                  onClick={() => dispatch(del())}
                  content="Del"
                  className="dell abolute right-[9em] top-[4em] text-xl font-bold "
                >
                  <div className=" mt-5 rounded-2xl   grid gap-y-6 bg-gray-900  ">
                    {moviesSearch &&
                      moviesSearch.map((movie, i) => (
                        <div className="group hover:bg-[#0DCAF0] " key={i}>
                          <Link
                            to={`/movies/${movie.id}/title/${movie.name}`}
                            className=" relative rounded-2xl  text-2xl   group-hover:text-3xl "
                          >
                            <Button
                              onClick={() => dispatch(aboutSearch())}
                              className="bg-transparent group-hover:text-black w-full text-start"
                            >
                              {movie?.title}
                            </Button>
                            <Avatar
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
                              alt="avatar"
                              className="absolute right-3"
                            />

                            <hr className="mt-4" />
                          </Link>
                        </div>
                      ))}
                  </div>
                </Badge>
              </div>
            ) : (
              <div className="w-0"></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
// };

export default Head;
