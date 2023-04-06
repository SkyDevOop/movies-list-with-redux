import React from 'react'
import { Row } from 'react-bootstrap'
import Card from './Card'
import MoviesPaginate from './MoviesPaginate'
import NotFound from './NotFound'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import {getAllMovies} from '../Redux/action/MoviesAction'
const MovieList = () => {
  // Start Get All Movies By Axios
  const [movies, setMovies] = useState([]);
  const dispatchMovies = useDispatch();
  useEffect(() => {  
    dispatchMovies(getAllMovies())
  }, []);
  const dataMovies = useSelector((state) => state.movies)
  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies]);
  // End Get All Movies By Axios
  return (
<div>
      <Row>{
        movies.length >=1
      ? (movies.map((ele )=> {
        return(
            <Card key={ele.id} mov={ele}/>
          )
        })) 
      : ( <NotFound />)
      
      }</Row>
      {
        movies.length >=1
      ?(<MoviesPaginate/>)
      :null}
</div>
  )
}

export default MovieList