import React from "react";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import data from '../../helpers/data';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 0,
    }
  }

  nextStory = () => {
    this.setState({
      story: 1,
    })
  };

  render() {
    const { story } = this.state;
    return (
      <div >
        <p scene = {this.state.story}>{data.scene.text}</p>
        <button onClick={this.nextStory}>next</button>
      </div>
    )

  };

}

export default Story;
