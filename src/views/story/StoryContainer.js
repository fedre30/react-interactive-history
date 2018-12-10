import React from "react";
import { withRouter } from "react-router-dom";
import Story from "./Story";
import API from '../../helpers/api'

class StoryContainer extends React.Component {
  state = {

  }
  componentDidMount(){



  }
  render() {

    return <Story />;
  }
}
export default withRouter(StoryContainer);
