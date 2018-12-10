import React from "react";
import { withRouter } from "react-router-dom";
import Home from "./Home";
import "./home.scss";


class HomeContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {
    return <Home />;
  }
}
export default withRouter(HomeContainer);
