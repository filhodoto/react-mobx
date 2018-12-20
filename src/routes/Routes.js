import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MoviesList from "./../components/MoviesList/MoviesList";
import MovieDetail from "./../components/MovieDetail/MovieDetail";

export default class Router extends React.Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div>
            <TransitionGroup exit={false}>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={30000}
              >
                <Switch location={location}>
                  <Route exact path="/" component={MoviesList} />
                  <Route path="/:id" component={MovieDetail} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    );
  }
}
