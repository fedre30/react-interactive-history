import React from "react";
import data from '../../helpers/data';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 'story1',
      id: 1,
    }
  }

  nextScene = (nextScene) => {
    this.setState({
      story: nextScene,
    });
    console.log(nextScene);
  };

  render() {
    const scene = this.state.story;
    return (
      <div>
        <p>{data[scene].text}</p>
        {data[scene].choices ? (
          <div>
            {console.log('div')}
            {data[scene].choices.map(choice =>
              <button onClick={() => {this.nextScene(choice.nextScene)}} key={choice.text}>{choice.text}</button>
            )}
          </div>
        ) : (
          <button onClick={ () => {this.nextScene(data[scene].nextScene)}}>next</button>
        )}

      </div>
    )

  };


}

export default Story;
