import { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { BiMoviePlay } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  aboutMovie,
  aboutSearch,
  aboutSeries,
  delButSearch,
  getSearchMovies,
  getSearchSeries,
} from "../SystmeRdx/Slices/moviesSlices/searchMovies";
import { getMoviesPage } from "../SystmeRdx/Slices/moviesSlices/moviesSlice";

const Head = () => {
  const [openNav, setOpenNav] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { moviesSearch, changeButtonMovieToSeries, seriesSearch } = useSelector(
    (state) => state.aboutSearchMovie
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesPage());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(getSearchMovies(e.target.value));
    dispatch(getSearchSeries(e.target.value));
  };

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-8 justify-center items-center text-center w-full">
      <li>
        <Link
          to="/"
          className="text-gray-300 hover:text-[#0DCAF0] px-3 py-2 rounded-lg font-semibold transition block"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/movies"
          className="text-gray-300 hover:text-[#0DCAF0] px-3 py-2 rounded-lg font-semibold transition block"
        >
          Movies
        </Link>
      </li>
      <li>
        <Link
          to="/series"
          className="text-gray-300 hover:text-[#0DCAF0] px-3 py-2 rounded-lg font-semibold transition block"
        >
          Series
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="md:sticky top-0 z-50 bg-transparent ">
      {/* Search & Switch Buttons OUTSIDE Navbar */}
      <div className="container mx-auto flex flex-col items-center justify-center py-4">
        <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-[600px]">
          <div className="relative w-full">
            <input
              className={`w-full py-2 pl-10 pr-3 rounded-xl bg-[#23272f] text-white border-2 ${
                changeButtonMovieToSeries === "serie"
                  ? "border-green-700"
                  : "border-[#0DCAF0]"
              } focus:outline-none focus:ring-2 focus:ring-[#0DCAF0] transition`}
              placeholder={
                changeButtonMovieToSeries === "serie"
                  ? "Search Series ..."
                  : "Search Movies ..."
              }
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              name="search"
              autoComplete="off"
            />
            <FaSearch
              className={`absolute left-3 top-3 ${
                changeButtonMovieToSeries === "serie"
                  ? "text-green-700"
                  : "text-[#0DCAF0]"
              } text-lg`}
            />
          </div>
          <div className="flex gap-2 mt-2 md:mt-0">
            <Button
              size="sm"
              className={`rounded bg-[#0DCAF0] text-black font-bold px-4 py-2 hover:bg-[#0bb8d8] transition ${
                changeButtonMovieToSeries !== "serie"
                  ? "ring-2 ring-[#0DCAF0]"
                  : ""
              }`}
              onClick={() => dispatch(aboutMovie())}
            >
              Movies
            </Button>
            <Button
              size="sm"
              className={`rounded bg-green-700 text-white font-bold px-4 py-2 hover:bg-green-800 transition ${
                changeButtonMovieToSeries === "serie"
                  ? "ring-2 ring-green-700"
                  : ""
              }`}
              onClick={() => dispatch(aboutSeries())}
            >
              Series
            </Button>
            {searchValue && (
              <Button
                size="sm"
                variant="text"
                className="text-red-500 font-bold px-4 py-2"
                onClick={() => {
                  setSearchValue("");
                  dispatch(delButSearch());
                }}
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Navbar className="bg-[#23272f] border border-[#0DCAF0] rounded-2xl shadow-lg px-0 py-0 w-full max-w-2xl flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-center py-3 px-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-extrabold tracking-wider text-white justify-center"
            >
              <span className="text-[#0DCAF0] text-4xl">
                <BiMoviePlay />
              </span>
              <span>
                WATCH<span className="text-[#0DCAF0]">WORLD</span>
              </span>
            </Link>

            <div className="w-full flex justify-center items-center mt-2">
              <div className="hidden lg:flex w-full justify-center">
                {navList}
              </div>
            </div>
          </div>
          {/* Mobile Nav */}
          <Collapse open={openNav}>
            <div className="block lg:hidden bg-[#23272f] px-4 py-4 rounded-b-2xl">
              {navList}
            </div>
          </Collapse>
        </Navbar>
      </div>
      {/* Search Results Dropdown */}
      {searchValue && (
        <div className="absolute z-40 w-full max-w-lg left-1/2 -translate-x-1/2 mt-2">
          <div className="rounded-2xl bg-[#23272f] shadow-lg p-4 max-h-96 overflow-auto border border-[#0DCAF0]/30">
            {(changeButtonMovieToSeries === "serie"
              ? seriesSearch
              : moviesSearch
            )?.length > 0 ? (
              (changeButtonMovieToSeries === "serie"
                ? seriesSearch
                : moviesSearch
              ).map((item, i) => (
                <Link
                  key={i}
                  to={
                    changeButtonMovieToSeries === "serie"
                      ? `/series/${item.id}/title/${item.name}`
                      : `/movies/${item.id}/title/${item.title}`
                  }
                  className="flex items-center gap-3 hover:bg-[#0DCAF0]/10 rounded-lg p-2 transition"
                  onClick={() => {
                    dispatch(aboutSearch());
                    setSearchValue("");
                  }}
                >
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item?.poster_path}`}
                    alt="avatar"
                    className="w-10 h-14"
                  />
                  <div>
                    <div className="font-bold text-white">
                      {changeButtonMovieToSeries === "serie"
                        ? item?.name
                        : item?.title}
                    </div>
                    <div className="text-xs text-[#0DCAF0]">
                      {item?.release_date || item?.first_air_date
                        ? new Date(
                            item?.release_date || item?.first_air_date
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : ""}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item?.original_language?.toUpperCase()}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-gray-400 text-center py-6">
                No results found.
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Head;
