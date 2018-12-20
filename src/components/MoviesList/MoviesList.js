import React from "react";
import { inject, observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";
import MovieThumb from "./../MovieThumb/MovieThumb";
import "./movies-list.css";

@inject("store")
@observer
export default class MoviesList extends React.Component {
  componentDidMount() {
    // Get movies
    if (this.props.store.movies.all.length === 0) this.props.store.fetchAll();
  }

  render() {
    return (
      <ul className="movies-list">
        {this.props.store.movies.all.map((movie, index) => (
          <CSSTransition
            key={movie.id}
            in={true}
            appear={true}
            timeout={3000}
            classNames="fade"
          >
            <MovieThumb movie={movie} />
          </CSSTransition>
        ))}
      </ul>
    );
  }
}
