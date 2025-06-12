import React, { useEffect } from "react";
import { CgSmileSad } from "react-icons/cg";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getInfoActor,
  getWorkActor,
} from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";

const AboutActor = () => {
  const { idactor } = useParams();

  const { infoActor, actorsWork, infoActorLoading } = useSelector(
    (state) => state.AllcastAndCrew
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoActor(idactor));
    dispatch(getWorkActor(idactor));
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
      {infoActorLoading ? (
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
        <div className="w-full px-2 py-8">
          <div className="flex flex-col lg:flex-row gap-10 w-full">
            {/* Sidebar: Actor Info */}
            <div className="w-full h-[38em] lg:w-[28%] flex flex-col items-center bg-[#23272f] rounded-2xl shadow-lg p-6">
              <img
                className="rounded-2xl w-40 h-56 object-cover mb-6 shadow-md"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${infoActor.profile_path}`}
                alt={infoActor.name}
              />
              <h1 className="text-white font-bold text-2xl text-center mb-4">
                {infoActor.name}
              </h1>
              <div className="w-full">
                <h2 className="text-[#0DCAF0] text-xl font-bold mb-2">
                  Personal Info
                </h2>
                <div className="mb-2">
                  <span className="text-white font-semibold">Known For: </span>
                  <span className="text-[#0DCAF0]">
                    {infoActor.known_for_department}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-white font-semibold">Gender: </span>
                  <span className="text-[#0DCAF0]">
                    {infoActor.gender === 1
                      ? "Female"
                      : infoActor.gender === 2
                      ? "Male"
                      : "Other"}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-white font-semibold">Birthday: </span>
                  <span className="text-[#0DCAF0]">
                    {infoActor.birthday || "Unknown"}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-white font-semibold">
                    Place of Birth:{" "}
                  </span>
                  <span className="text-[#0DCAF0]">
                    {infoActor.place_of_birth || "Unknown"}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-white font-semibold">
                    Also Known As:
                  </span>
                  <ul className="list-disc list-inside mt-1 ">
                    {infoActor.also_known_as &&
                      infoActor.also_known_as.slice(0, 3).map((name, i) => (
                        <li key={i} className="text-[#0DCAF0] text-sm ">
                          {name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Main Content: Bio & Works */}
            <div className="w-full lg:w-[72%] flex flex-col gap-8">
              <div className="bg-[#23272f] rounded-2xl shadow-lg p-6">
                <h2 className="text-[#0DCAF0] text-2xl font-bold mb-3">
                  Biography
                </h2>
                {infoActor.biography ? (
                  <p className="text-white leading-relaxed">
                    {infoActor.biography}
                  </p>
                ) : (
                  <p className="text-gray-400">
                    There's no Bio Belongs To This Actor
                  </p>
                )}
              </div>
              <div>
                <h2 className="text-[#0DCAF0] text-2xl font-bold mb-10">
                  Known For
                </h2>
                {actorsWork.length >= 1 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 me-2">
                    {actorsWork.map((movie, i) => (
                      <div key={i}>
                        {movie.media_type === "movie" ? (
                          <Link
                            to={`/movies/${movie.id}/title/${movie.original_title}`}
                          >
                            <Card className="bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
                              <CardHeader
                                color="white"
                                className="relative h-64 overflow-hidden rounded-t-2xl"
                              >
                                <img
                                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                                  className="object-cover w-full h-full"
                                  alt={movie.title}
                                />
                              </CardHeader>
                              <CardBody>
                                <div className="text-white text-lg font-bold truncate">
                                  {movie.title}
                                </div>
                              </CardBody>
                            </Card>
                          </Link>
                        ) : movie.media_type === "tv" ? (
                          <Link to={`/series/${movie.id}/title/${movie.name}`}>
                            <Card className="bg-gray-900 rounded-2xl shadow-md hover:scale-105 transition-transform duration-200">
                              <CardHeader
                                color="white"
                                className="relative h-64 overflow-hidden rounded-t-2xl"
                              >
                                <img
                                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                                  className="object-cover w-full h-full"
                                  alt={movie.name}
                                />
                              </CardHeader>
                              <CardBody>
                                <div className="text-white text-lg font-bold truncate">
                                  {movie.name}
                                </div>
                              </CardBody>
                            </Card>
                          </Link>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-2xl my-5 w-full bg-gray-900 rounded-2xl flex justify-center items-center text-[#0DCAF0] h-20">
                    Sorry, we don't have any actor's work for this person
                    <span className="ms-2">
                      <CgSmileSad />
                    </span>
                  </div>
                )}
                <Button
                  onClick={backAstep}
                  variant="outlined"
                  className="mt-10 border-[#0DCAF0] text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
                >
                  Back a step
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutActor;
