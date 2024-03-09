import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesCreditAsync,
  fetchMoviesDetailsAsync,
} from "../redux/slice/movieSlices";
import { Casts } from "../components/Casts";
import { MovieImage } from "../components/MovieImage";
import { MovieRecommend } from "../components/MovieRecommend";
import { setOpen } from "../redux/slice/watchTrailer";
import Trailer from "../components/Trailer";
import { setBookMark } from "../redux/slice/userSlice";
import { addToBookMark } from "../redux/slice/bookMarkSlice";

export const MovieDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const detailMovie = useSelector((state) => state.movie.movieDetails);

  useEffect(() => {
    dispatch(fetchMoviesDetailsAsync(params.id));
  }, [params.id]);



  return (
    <>
      <Navbar />
      <div className="h-full md:h-[80vh]">
        <div
          className="w-full h-full bg-cover bg-center relative"
          style={{
            backgroundImage: detailMovie
              ? `url(https://image.tmdb.org/t/p/original${detailMovie.backdrop_path})`
              : "none",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />

          <div className="absolute top-40 pl-5 w-full flex flex-col md:flex-row">
            <img
              className="w-60 h-full"
              src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
              alt=""
            />
            <div className="w-full ml-5 flex flex-col gap-3">
              <h1 className="text-2xl">{detailMovie.title}</h1>
              <p>{detailMovie.release_date}</p>

              <div className="flex flex-row gap-4">
                {detailMovie.genres &&
                  detailMovie.genres.map((genre) => {
                    return <p key={genre.id}>{genre.name},</p>;
                  })}
              </div>
              <div className="flex gap-10 items-center">
                <i 
                  className=" cursor-pointer fa-solid fa-bookmark text-2xl" 
                  onClick={() => dispatch(addToBookMark(detailMovie))}
                  
                ></i>
                <p className="bg-lime-400 w-40 h-10 text-center">
                  <Trailer />
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-gray-400">{detailMovie.tagline}</p>
                <div className="pr-5">
                  <span className="font-bold text-2xl mb-2">Overview</span>
                  <p className="pr-3">{detailMovie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Casts />
        <MovieImage />
        <MovieRecommend />
      </div>
    </>
  );
};
