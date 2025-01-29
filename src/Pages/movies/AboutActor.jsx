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
  }, []);

  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
  };
  // console.log(actorsWork);

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
        <div className="w-full ">
          <div className=" flex gap-x-10  flex-col lg:flex-row w-full">
            <div className=" w-full md:w-full md:mt-10  lg:w-[30%]  flex justify-center">
              <img
                className="rounded-2xl w-[50%] md:w-[40%]  lg:w-[80%]   "
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${infoActor.profile_path}`}
                alt=""
              />
            </div>
            <div className="w-full  lg:w-[70%] ">
              <h1 className="text-white mt-5 font-bold text-3xl text-center w-full lg:text-start ">
                {infoActor.name}
              </h1>
              <div className="text-white my-10">
                <h1 className="font-bold  text-2xl mb-5 text-[#0DCAF0] text-center md:text-start">
                  Piography
                </h1>
                {infoActor.biography ? (
                  <p>{infoActor.biography}</p>
                ) : (
                  <p className="text-center md:text-start">
                    There's no Bio Belongs To This Actor
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className=" flex grid-cols-5 w-full flex-col md:flex-row   ">
            <div className="col-span-1 grid gap-y-5  justify-items-center items-center md:w-[25%] md:justify-items-start ms-5 ">
              <h1 className="text-white text-3xl mb-5 font-bold">
                Personal Info
              </h1>
              <div className="text-white text-center md:text-start">
                <h1 className="text-2xl font-bold ">Known For </h1>
                <h1 className="text-[#0DCAF0] text-xl">
                  {infoActor.known_for_department}
                </h1>
              </div>
              <div className="text-white text-center md:text-start">
                <h1 className="text-2xl font-bold">Gender</h1>
                <h1 className="text-[#0DCAF0] text-xl">{infoActor.gender}</h1>
              </div>
              <div className="text-white ">
                <h1 className="text-2xl font-bold">Birthday</h1>
                <h1 className="text-[#0DCAF0] text-xl">{infoActor.birthday}</h1>
              </div>
              <div className="text-white text-center md:text-start">
                <h1 className="text-2xl font-bold">Place_Of_Birth</h1>
                <h1 className="text-[#0DCAF0] text-xl">
                  {infoActor.place_of_birth}
                </h1>
              </div>

              <div className="text-white flex justify-center items-center md:justify-start md:items-start flex-col">
                <h1 className="text-2xl font-bold">Also_Known_As</h1>
                {infoActor.also_known_as &&
                  infoActor.also_known_as.map((name, i) => (
                    <h1 key={i} className="text-[#0DCAF0] text-xl">
                      {name}
                    </h1>
                  ))}
              </div>
            </div>
            <div className="py-10    col-span-4  grid justify-items-center  ">
              {actorsWork.length >= 1 ? (
                <div className="w-[75%] flex overflow-auto gap-6 ">
                  {actorsWork.map((movie, i) => (
                    <div className="" key={i}>
                      {movie.media_type == "movie" ? (
                        <Link
                          to={`/movies/${movie.id}/title/${movie.original_title}`}
                        >
                          <Card className="mt-10 w-96 bg-gray-900  font-bold ">
                            <CardHeader color="white" className="relative h-96">
                              <img
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                                className="w-[150%] h-[100%] "
                                alt="card-image"
                              />
                            </CardHeader>
                            <CardBody>
                              <div
                                variant="h5"
                                className="mb-2 text-white text-2xl"
                              >
                                {movie.media_type == "movie" && movie.title}
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ) : movie.media_type == "tv" ? (
                        <Link
                          to={`/series/${movie.id}/title/${movie.original_title}`}
                        >
                          <Card className="mt-10 w-96 bg-gray-900  font-bold ">
                            <CardHeader color="white" className="relative h-96">
                              <img
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                                className="w-[150%] h-[100%] "
                                alt="card-image"
                              />
                            </CardHeader>
                            <CardBody>
                              <div
                                variant="h5"
                                className="mb-2 text-white text-2xl"
                              >
                                {movie.media_type == "tv" && movie.name}
                              </div>
                            </CardBody>
                          </Card>
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className=" text-2xl my-5  w-[75%] h-20 bg-gray-900 rounded-2xl flex justify-center items-center text-[#0DCAF0]">
                  Sorry We Don't Have Any Actor's Work For This Movie
                  <div className="ms-2">
                    <CgSmileSad />
                  </div>
                </div>
              )}
              <Button
                onClick={backAstep}
                variant="outlined"
                className=" mt-10 border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
              >
                Back a step
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutActor;
