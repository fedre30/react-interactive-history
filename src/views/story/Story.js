import React from "react";
import data from '../../helpers/data';
import styled from "styled-components";
import Colors from "../../styles/const";


const StoryCSS = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.secondary};
position: relative;
overflow: hidden;


.image {
  width: 100%;
  height: 20vh;
  margin-bottom: 45vh;
  
  img {
  width: 100%;
  }
}

.text {
  text-align: center;
  color: white;
  margin-bottom: 3rem;
}

.buttons-container {
  margin: 0 auto;
  text-align: center;
}
.button {
  margin: 2rem auto;
  text-align: center;
  background-color: ${Colors.primary};
  width: 7rem;
  height: 3rem;
  line-height: 3rem;
  color: white;
  border-radius: 0.7rem;
  font-weight: 600;
 
}


`

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
  };

  render() {
    const scene = this.state.story;
    return (
      <StoryCSS>
        <div className="image">
          <img src={data[scene].img} alt="LOL"/>
        </div>
        <p className="text">{data[scene].text}</p>
        {data[scene].choices ? (
          <div>
            {console.log('div')}
            {data[scene].choices.map(choice =>
              <div className="buttons-container">
                <div className="button" onClick={() => {
                  this.nextScene(choice.nextScene)
                }} key={choice.text}>{choice.text}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="buttons-container">
          <div className="button" onClick={() => {
            this.nextScene(data[scene].nextScene)
          }}>Suivant</div>
          </div>
        )}

      </StoryCSS>
    )

  };


}

export default Story;
