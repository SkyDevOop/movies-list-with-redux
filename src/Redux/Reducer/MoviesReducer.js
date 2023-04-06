import { allMovies } from '../types/TypesMovies'
const initialValue = { movies: [], pageCount: 0,search:""}

export const MoviesReducer = (state = initialValue, action) => {
   switch(action.type){
    case allMovies:
      return{ movies:action.data, pageCount:action.pages}
    default:
      return state;  
   }
}
console.log(initialValue.movies);