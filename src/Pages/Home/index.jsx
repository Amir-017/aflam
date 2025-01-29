import React, { useEffect } from "react";
import HomeHeader from "./components/HomeHeader";
import HomeMovies from "./components/HomeMovies";
import HomeSeries from "./components/HomeSeries";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../SystmeRdx/Slices/moviesSlices/homeMoviesSlice";
import { getSeries } from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";

const Home = () => {
  const { moviesHome, topMovies, moviesHomeLoading } = useSelector(
    (state) => state.movies
  );
  const { series, topSeries } = useSelector((state) => state.series);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getSeries());
  }, []);

  return (
    <div className=" bg-black ">
      <HomeHeader />

      <HomeMovies
        data={moviesHome}
        items={topMovies}
        moviesHomeLoading={moviesHomeLoading}
      />

      <HomeSeries items={topSeries} data={series} />
    </div>
  );
};

export default Home;
