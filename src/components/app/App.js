import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import HomeContainer from "../../views/home/HomeContainer";
import StoryContainer from "../../views/story/StoryContainer";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route path="/story" component={StoryContainer}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
