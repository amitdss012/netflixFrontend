// import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchSearchMovies } from '../redux/slice/movieSlices';

// export const Search = () => {
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
//   const searchResults = useSelector(state => state.movie.searchResults);
//   console.log(searchResults)

//   const handleSearch = (e) => {
//     e.preventDefault();
//     try {
//         dispatch(fetchSearchMovies(query));
//         console.log("click hua")
//     } catch (error) {
//         console.log(error)
//     }
//   }

//   return (
    
//     <div className='mt-[100px]'>
//     <Navbar />
//         <div className='w-full flex justify-center'>
//             <form action="" className='flex gap-5' onSubmit={handleSearch}>
//                 <input type="text" placeholder='Search Movies' className='w-[60vw] h-10 rounded-lg border-none outline-none p-3' onChange={(e) => setQuery(e.target.value)}/>

//                 <button type="submit" className='text-white bg-red-500 h-10 w-20 rounded-md'>Search</button>
//             </form>
//         </div>

        
//       <div className="relative flex items-center group">
//         <i
//           className="fa-solid fa-circle-left absolute left-2 bg-white opacity-80 text-4xl z-50 rounded-[100%] text-black cursor-pointer hidden md:group-hover:block"
//           onClick={() => slider(-500)}
//         ></i>

//         <div
//           className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
//         >
//           {searchResults.length > 0 ? (
//             searchResults.map((movie) => (
//               <div
//                 key={movie.id}
//                 className="relative w-[180px] h-[110px] inline-block rounded-lg bg-cover overflow-hidden cursor-auto m-2"
//               >
//                 <img
//                   src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
//                   className="w-full h-40 block  origin-top"
//                   alt={movie.title}
//                 />
//                 <div className="backDrop absolute top-0 left-0 w-full h-[110px] bg-black/80 opacity-0 hover:opacity-100 cursor-pointer flex justify-center items-center">
//                   <p className="text-white">{movie.title}</p>
//                   <button
//                     className="absolute top-2 left-2"
//                   >
//                       <i className="fa-solid fa-heart text-white text-3xl"></i>
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No movie found</p>
//           )}
//         </div>
//         <i
//           className="fa-solid fa-circle-right absolute right-2 bg-white opacity-80 text-4xl z-50 rounded-[100%] text-black cursor-pointer hidden md:group-hover:block"
//           onClick={() => slider(500)}
//         ></i>
//       </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchMovies } from '../redux/slice/movieSlices';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResults = useSelector(state => state.movie.searchResults);
  const isLoading = useSelector(state => state.movie.isLoading)
  console.log(isLoading)
  console.log(searchResults);

  const handleSearch = (e) => {
    e.preventDefault();
    try {
      dispatch(fetchSearchMovies(query));
      setSearched(true);
      console.log("click hua");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mt-[100px] h-screen'>
      <Navbar />
      <div className='w-full flex justify-center fixed'>
        <form action="" className='flex gap-5' onSubmit={handleSearch}>
          <input type="text" placeholder='Search Movies' className='w-[60vw] h-10 rounded-lg border-none outline-none p-3 text-black' onChange={(e) => setQuery(e.target.value)}/>
          <button type="submit" className='text-white bg-red-500 h-10 w-20 rounded-md'>Search</button>
        </form>
      </div>

      <div className="relative flex items-center group">
        {searched ? (
          searchResults.length > 0 ? (
            <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mt-20 fixed top-20">
              {searchResults.map((movie) => (
                <div key={movie.id} onClick={() => navigate(`/details/${movie.id}`)} className="relative w-[180px] h-[110px] inline-block rounded-lg bg-cover overflow-hidden cursor-auto m-2">
                  <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} className="w-full h-40 block  origin-top" alt={movie.title}/>
                  <div className="backDrop absolute top-0 left-0 w-full h-[110px] bg-black/80 opacity-0 hover:opacity-100 cursor-pointer flex justify-center items-center">
                    <p className="text-white">{movie.title}</p>
                    <button className="absolute top-2 left-2">
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='ml-5'>No movie found</p>
          )
        ) : (
          <p className='ml-5'></p>
        )}
      </div>
    </div>
  );
}
