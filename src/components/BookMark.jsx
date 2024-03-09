import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBookMark } from "../redux/slice/bookMarkSlice";
// import { removeBookMark } from "../redux/slice/bookMarkSlice";

export const BookMark = () => {
  
//   };

const dispatch = useDispatch();

const bookMark = useSelector((state) => state.bookMark.bookMarks)
console.log(bookMark)

  const slider = (offSet) => {
    const slide = document.getElementById("MovieSectionName");
    slide.scrollLeft = slide.scrollLeft + offSet;
  };

  return (
    <>
      {/* movie Rows */}
      <h3 className="font-bold mt-3 ml-2 text-red-600 text-2xl">
        Your favorite Movies & Shows
      </h3>
      {bookMark?.length > 0 ? (
        <div className="relative flex items-center group">
          <i
            className="fa-solid fa-circle-left absolute left-2 bg-white opacity-80 text-4xl z-50 rounded-[100%] text-black cursor-pointer hidden md:group-hover:block"
            onClick={() => slider(-500)}
          ></i>

          <div
            id="MovieSectionName"
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
          >
            {bookMark.map((movie) => (
              <div
                key={movie.id}
                className="relative w-[160px] inline-block rounded-lg overflow-hidden cursor-auto m-2"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  className="w-full h-40 block object-cover origin-top"
                  alt={movie.title}
                />
                <div className="backDrop absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 cursor-pointer">
                  <p className="text-white h-full flex justify-center items-center">
                    {movie.title}
                  </p>
                  <button
                    className="absolute top-0 right-2"
                  >
                    <i
                      className="fa-solid fa-xmark text-white text-2xl"
                      onClick={() => dispatch(removeFromBookMark(movie.id))}
                    ></i>
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
      ) : (
        <p className="pl-2">you have not saved any movie to BookMarkr</p>
      )}
    </>
  );
};
