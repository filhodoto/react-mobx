import React from "react";
import { inject, observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";
import config from "./../../config";
import "./movie-detail.css";

@inject("store")
@observer
export default class MovieDetail extends React.Component {
  async componentWillMount() {
    const movieId = this.props.match.params.id; // Access movie id from match inide props
    this.props.store.fetchMovieDetails(movieId);
  }

  componentWillUnmount() {
    // Clear selected movie
    this.props.store.clearSelectedMovie();
  }

  render() {
    const movie = this.props.store.selectedMovie;
    return (
      <div
        className="details-wrapper"
        style={{
          background: `url(${config.api.backdropPath}/${
            movie.backdrop_path
          }) no-repeat`
        }}
      >
        <div className="details-content">
          <CSSTransition
            in={true}
            appear={true}
            timeout={3000}
            classNames="fade"
          >
            <img
              className="poster"
              src={`${config.api.posterPath}${movie.poster_path}`}
              alt={movie.title}
            />
          </CSSTransition>{" "}
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}
