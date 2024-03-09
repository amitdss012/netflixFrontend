import axios from "axios"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "../redux/slice/movieSlice";

const useMovie = (url) => {

    const [movieLoading, setMovieLoading] = useState([])
    const [movieError, setMovieError] = useState([])

    const dispatch = useDispatch();

    const fetchMovie = async () => {
        try {
            const response = await axios.get(url);
            setMovieLoading(false);
            dispatch(setMovie(response.data))
        } catch (error) {
            console.log(error)
            setMovieLoading(false)
            setMovieError(true)
        }
    }


    useEffect(() => {
        fetchMovie();
    },[url])

    return {movieLoading, movieError}
}


export default useMovie;