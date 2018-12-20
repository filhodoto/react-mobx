import React from "react";
import { CSSTransition } from "react-transition-group";
import "./loader.css";
import "loaders.css/loaders.min.css";

/**
 * Functional Stateless Component
 * Passing props into function -> ({movie}) = (props.movie) using es6 destructuring
 */
const Loader = () => (
  <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
    <div className="loader ball-pulse">
      <div />
      <div />
      <div />
    </div>
  </CSSTransition>
);

/**
 * Export function
 * Notes: FSC need to be exported like this
 * can't use default when defining const
 */
export default Loader;
