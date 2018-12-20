import { observable, action, computed } from "mobx";
import config from "./../config";

/**
 * Movies store
 */
class movieStore {
  /** State */
  @observable
  movies = {
    all: [],
    filtered: [],
    favorites: []
  };
  @observable loading = false;
  @observable selectedMovie = {};

  /** Actions */
  @action
  async fetchAll() {
    try {
      await this.startLoader();
      const result = await fetch(config.api.all);
      const movies = await result.json();
      this.stopLoader();
      this.movies.all = movies.results;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async fetchMovieDetails(id) {
    try {
      await this.startLoader();
      const response = await fetch(
        `${config.api.individualMovie}/${id}?api_key=${config.api.apiKey}`
      );
      const movie = await response.json();
      this.stopLoader();
      this.selectedMovie = movie;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  clearSelectedMovie() {
    this.selectedMovie = {};
  }
  @action
  startLoader = () => (this.loading = true);

  stopLoader = () => (this.loading = false);
}

export default new movieStore(this);
