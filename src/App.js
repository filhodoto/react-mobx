import React from "react";
import DevTools from "mobx-react-devtools";
import { inject, observer } from "mobx-react";
import Header from "./components/Header/Header";
import Loader from "./components/ui/Loader/Loader";
// Styles
import "./styles/app.css";

// Routing
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

@inject("store")
@observer
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <DevTools />
          <Header />
          {this.props.store.loading && <Loader />}
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}
