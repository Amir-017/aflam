import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBackDrops } from "../../SystmeRdx/Slices/moviesSlices/mediaSlice";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import { Button } from "@material-tailwind/react";

const BackDropsMovie = () => {
  const { idMovie } = useParams();
  const dispatch = useDispatch();
  const {
    backDrops: { posters, backDropsLoading },
  } = useSelector((state) => state.myMediaMovie);
  const { movieDetails } = useSelector((state) => state.myMovies);
  useEffect(() => {
    dispatch(getBackDrops(idMovie));
    dispatch(getMovieDetails(idMovie));
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
      {backDropsLoading ? (
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
        <div className="my-10">
          {/* Header Card */}
          <div className="w-full bg-gradient-to-br from-[#181c23] to-[#23272f] px-6 md:px-10 pt-6 pb-6 flex !items-center flex-col md:flex-row  md:items-start gap-6 rounded-3xl shadow-2xl">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
              alt="logo"
              className="rounded-2xl mb-4 md:mb-0 w-[60%] max-w-[220px] md:w-[140px] shadow-lg object-cover border-4 border-[#23272f] bg-[#23272f]"
            />
            <div className="flex-1 flex flex-col  md:justify-start">
              <h1 className="text-white font-bold text-3xl text-center md:text-start mb-2">
                {movieDetails.title}
              </h1>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4 animate-bounce">
                <span className="bg-[#0DCAF0] text-black px-3 py-1 rounded-full font-semibold text-sm shadow">
                  {movieDetails.release_date?.slice(0, 4)}
                </span>
                <span className="bg-[#23272f] text-[#0DCAF0] px-3 py-1 rounded-full font-semibold text-sm shadow border border-[#0DCAF0]">
                  {movieDetails.original_language?.toUpperCase()}
                </span>
                <span className="bg-[#23272f] text-white px-3 py-1 rounded-full font-semibold text-sm shadow border border-[#23272f]">
                  {movieDetails.vote_average
                    ? `⭐ ${movieDetails.vote_average}`
                    : "N/A"}
                </span>
              </div>
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

          {/* Title */}
          <div className="text-white text-4xl container mx-auto my-10 text-center lg:text-start font-bold flex flex-col gap-2">
            <span>
              All Posters :
              <span className="underline text-[#0DCAF0] ms-2">
                {posters?.length}
              </span>
            </span>
            <span className="text-lg text-[#87cbd9] font-medium">
              Click any image to view in full size
            </span>
          </div>

          {/* posters  */}
          <div className="w-full grid justify-items-center grid-cols-1 gap-10 container mx-auto md:grid-cols-2 lg:grid-cols-3">
            {posters &&
              posters.map((imgBack, i) => (
                <a
                  href={`https://image.tmdb.org/t/p/original${imgBack.file_path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex flex-col items-center"
                  key={i}
                >
                  <div className="relative w-full flex justify-center">
                    <img
                      className="rounded-2xl shadow-lg border-4 border-[#23272f] group-hover:border-[#0DCAF0] bg-[#23272f] max-h-[320px] object-cover"
                      alt=""
                      src={`https://image.tmdb.org/t/p/w780${imgBack.file_path}`}
                      width={350}
                      height={200}
                      loading="lazy"
                    />
                    <span className="absolute right-23 md:top-2 md:right-2 bg-[#0DCAF0] text-black text-xs font-bold px-3 py-1 rounded-full shadow">
                      {i + 1}
                    </span>
                  </div>
                  <span className="mt-2 text-[#0DCAF0] text-sm font-semibold group-hover:underline">
                    View Full Size
                  </span>
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackDropsMovie;
