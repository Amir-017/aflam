import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import img from "../../Photos/th.jpeg";
import { getCastCrew } from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";
const AllWorkers = () => {
  const { movieDetails } = useSelector((state) => state.myMovies);
  const dispatch = useDispatch();
  const { idMovie } = useParams();
  useEffect(() => {
    dispatch(getMovieDetails(idMovie));
    dispatch(getCastCrew(idMovie));
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);
  const {
    castAndCrew: { cast, crew },
    castAndCrewLoading,
  } = useSelector((state) => state.AllcastAndCrew);

  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
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
        <div className=" w-full">
          <div className=" w-full  bg-[#212529] px-10 pt-5 flex justify-center  flex-col md:flex-row md:justify-start ">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
              alt="logo"
              className="rounded-2xl mb-5 w-[30%] md:w-[12%]"
            />

            <div className="w-full flex  flex-col justify-start   px-0 md:justify-center md:px-10 ">
              <h1 className="text-white font-bold  text-3xl text-center md:text-start">
                {movieDetails.title}
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
          <div className="flex flex-col md:flex-row gap-10 container mx-auto mt-10">
            {/* Cast */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h1 className="text-3xl text-white py-5 font-bold text-center">
                Cast:{" "}
                <span className="text-[#0DCAF0]">{cast && cast.length}</span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center">
                {cast &&
                  cast.map((actor, i) => (
                    <Link
                      to={`/person/${actor.id}/hisname/${actor.name}`}
                      key={i}
                    >
                      <Card className="w-56 h-[25rem] bg-gradient-to-br from-[#23272f] to-[#181c23] rounded-2xl shadow-lg border border-[#23272f] hover:scale-105 transition-transform duration-200 flex flex-col">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="rounded-t-2xl w-full h-60 overflow-hidden"
                        >
                          {actor.profile_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                              alt={actor.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <img
                              src={img}
                              width="100%"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardBody className="flex flex-col items-center justify-center h-28">
                          <h1 className="text-lg font-bold text-white text-center truncate w-full">
                            {actor.name}
                          </h1>
                          <h2 className="text-yellow-400 text-base text-center mt-1 truncate w-full">
                            {actor.character}
                          </h2>
                        </CardBody>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
            {/* Crew */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <h1 className="text-3xl text-white py-5 font-bold text-center">
                Crew:{" "}
                <span className="text-[#0DCAF0]">{crew && crew.length}</span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center">
                {crew &&
                  crew.map((actor, i) => (
                    <Link
                      to={`/person/${actor.id}/hisname/${actor.name}`}
                      key={i}
                    >
                      <Card className="w-56 h-[25rem] bg-gradient-to-br from-[#23272f] to-[#181c23] rounded-2xl shadow-lg border border-[#23272f] hover:scale-105 transition-transform duration-200 flex flex-col">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="rounded-t-2xl w-full h-60 overflow-hidden"
                        >
                          {actor.profile_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                              alt={actor.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <img
                              src={img}
                              width="100%"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </CardHeader>
                        <CardBody className="flex flex-col items-center justify-center h-28">
                          <h1 className="text-lg font-bold text-white text-center truncate w-full">
                            {actor.name}
                          </h1>
                          <h2 className="text-yellow-400 text-base text-center mt-1 truncate w-full">
                            {actor.job}
                          </h2>
                          <span className="text-xs text-[#0DCAF0] mt-1">
                            {actor.department}
                          </span>
                        </CardBody>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex mb-10 justify-center items-center">
            <Button
              onClick={backAstep}
              variant="outlined"
              className="border-[#0DCAF0] text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-white"
            >
              Back a step
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllWorkers;
