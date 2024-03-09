import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMoviesAsync, fetchTrendingMoviesAsync, fetchUpcomingMoviesAsync, fetchComedyMoviesAsync, fetchTopRatedMoviesAsync } from "../redux/slice/movieSlices";
import { useNavigate } from 'react-router-dom';

const MovieSection = ({ movieSectionName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movieData = useSelector((state) => state.movie[movieSectionName]);

  useEffect(() => {
    switch (movieSectionName) {
      case 'popular':
        dispatch(fetchPopularMoviesAsync());
        break;
      case 'trending':
        dispatch(fetchTrendingMoviesAsync());
        break;
      case 'upcoming':
        dispatch(fetchUpcomingMoviesAsync());
        break;
      case 'comedy':
        dispatch(fetchComedyMoviesAsync());
        break;
      case 'topRated':
        dispatch(fetchTopRatedMoviesAsync());
        break;
      default:
        break;
    }
  }, [dispatch]);


  const slider = (offSet) => {
    const slide = document.getElementById(movieSectionName);
    slide.scrollLeft = slide.scrollLeft + offSet;
  };

  return (
    <>
    <h2 className="text-white mt-2 ml-2 text-xl">{movieSectionName}</h2>
      <div className="relative flex items-center group">
        <i
          className="fa-solid fa-circle-left absolute left-2 bg-white opacity-80 text-4xl z-50 rounded-[100%] text-black cursor-pointer hidden md:group-hover:block"
          onClick={() => slider(-500)}
        ></i>

        <div
          id={movieSectionName}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movieData.map((movie) => (
            <div
              key={movie.id}
              onClick={() => navigate(`/details/${movie.id}`)}
              className="relative w-[180px] h-[110px] inline-block rounded-lg bg-cover overflow-hidden cursor-auto m-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                className="w-full h-40 block  origin-top"
                alt={movie.title}
              />
              <div className="backDrop absolute top-0 left-0 w-full h-[110px] bg-black/80 opacity-0 hover:opacity-100 cursor-pointer flex justify-center items-center">
                <p className="text-white">{movie.title}</p>
                <button
                  className="absolute top-2 left-2"
                >
                </button>
              </div>
            </div>
          ))}
        </div>
        <i
          className="fa-solid fa-circle-right absolute right-2 bg-white opacity-80 text-4xl z-50 rounded-[100%] text-black cursor-pointer hidden md:group-hover:block"
          onClick={() => slider(500)}
        ></i>
      </div>
    
  </>
  );
};

export default MovieSection;

