import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./component/Footer";
import Movies from "./Pages/movies";
import Series from "./Pages/series";
import MovieDetails from "./Pages/movies/MovieDetails";
import NotFound from "./Pages/NotFound/NotFound";
import AllWorkers from "./Pages/movies/AllWorkers";
import ReviewMovie from "./Pages/movies/ReviewMovie";
import VideoMovies from "./Pages/movies/VideoMovies";
import BackDropsMovie from "./Pages/movies/BackDropsMovie";
import PostersMovie from "./Pages/movies/PostersMovie";
import AboutActor from "./Pages/movies/AboutActor";
import SeriesWorker from "./Pages/series/SeriesWorker";
import ReviewSeries from "./Pages/series/ReviewSeries";
import VideoSeries from "./Pages/series/VideoSeries";
import BackDropsSeries from "./Pages/series/BackDropsSeries";
import PostersSeries from "./Pages/series/PostersSeries";
import Head from "./component/Head";
import DetailsSeries from "./Pages/series/DetailsSeries";
import AllSeasons from "./Pages/series/AllSeasons";
import AllEpisodes from "./Pages/series/AllEpisodes";
import CastAndCrewEpisode from "./Pages/series/CastAndCrewEpisode";

const App = () => {
  return (
    <div className="w-full bg-black">
      <Head />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:idMovie/title/:nameMovie"
          element={<MovieDetails />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/cast"
          element={<AllWorkers />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/vid"
          element={<VideoMovies />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/backdrops"
          element={<BackDropsMovie />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/posters"
          element={<PostersMovie />}
        />
        <Route
          path="/person/:idactor/hisname/:nameactor"
          element={<AboutActor />}
        />
        <Route path="/movieDetails/:idMovie" element={<ReviewMovie />} />
        <Route path="/" element={<Home />} />
        {/* ///////////////////////////////////// */}
        {/* //////////////////////////////////// */}
        <Route path="/series" element={<Series />} />
        <Route
          path="/series/:idSeries/title/:nameSeries"
          element={<DetailsSeries />}
        />
        <Route
          path="/Detailsseries/:idseries/title/:nameSeries/cast"
          element={<SeriesWorker />}
        />
        <Route path="/Detailsseries/:idseries" element={<ReviewSeries />} />
        <Route
          path="/Detailsseries/:idseries/title/:nameseries/vid"
          element={<VideoSeries />}
        />
        <Route
          path="/Detailsseries/:idseries/title/:nameseries/backdrops"
          element={<BackDropsSeries />}
        />
        <Route
          path="/Detailsseries/:idseries/title/:nameseries/posters"
          element={<PostersSeries />}
        />
        <Route
          path="/detailssereis/:idserie/name/:nameserie"
          element={<AllSeasons />}
        />{" "}
        <Route
          path="/detailssereis/:idseries/season/:season_number"
          element={<AllEpisodes />}
        />{" "}
        <Route
          path="/detailssereis/:idseries/season/:season_number/episode/:episodenum"
          element={<CastAndCrewEpisode />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
