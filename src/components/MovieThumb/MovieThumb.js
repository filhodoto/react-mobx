import React from "react";
import { Link } from "react-router-dom";
import "./movie-thumb.css";

import config from "./../../config";
/**
 * Functional Stateless Component
 * Passing props into function -> ({movie}) = (props.movie) using es6 destructuring
 * Note: need to import React for these to work
 */
const MovieThumb = ({ movie }) => (
  <div className="movie-thumb">
    <Link to={`/${movie.id}`}>
      <img
        src={`${config.api.posterPath}${movie.poster_path}`}
        alt={movie.title}
      />
    </Link>
  </div>
);

/**
 * Export function
 * Notes: FSC need to be exported like this
 * can't use default when defining const
 */
export default MovieThumb;
