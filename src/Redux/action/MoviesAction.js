import { allMovies, moviesApi } from '../types/TypesMovies';
import axios from "axios";

// ##########################
export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(moviesApi)
    console.log('getAllMovies');
    dispatch({ type: allMovies, data: res.data.results, pages:res.data.total_pages })
  }
}
// ##########################
export const getMoviesBySearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=e470a4f5d6939a271ac0882e89e0bffc&language=en-US&query=${word}`
    );
    console.log('objgetMoviesBySearchect');
    dispatch({ type: allMovies, data: res.data.results, pages:res.data.total_pages })
  }
}
// ##########################
export const getMoviesByPage = (page,numberPages) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e470a4f5d6939a271ac0882e89e0bffc&language=en-US&page=${page}`
    );
    console.log('getMoviesByPage');
    dispatch({ type: allMovies, data: res.data.results, pages:numberPages })
  }
}