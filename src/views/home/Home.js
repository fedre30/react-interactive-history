import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Colors from "../../styles/const";
import singer from '../../img/banniere.jpg';
import Footer from '../../components/footer/Footer';


const HomeCSS = styled.div`
width: 100%;
height: 100vh;
background-color: ${Colors.background};
position: relative;
overflow: hidden;
.title {
  font-weight: 900;
  text-align: center;
  padding: 2rem;
  font-size: 1.8rem;
  color: ${Colors.text};
  margin-bottom: 2rem;

 
}

.image {
  width: 100%;
  height: 20vh;
  margin-bottom: 20vh;
  
  img {
  width: 100%;
  }
}

.play {
margin: 0 auto;
text-align: center;
background-color: ${Colors.secondary};
width: 7rem;
height: 3rem;
border-radius: 0.8rem;
line-height: 3rem;
color: white;
font-size: 2rem;
padding: 0.5rem

}

a {
color: black;
text-decoration: none;
cursor: pointer;
}

`

const Home = () => (
    <HomeCSS>
      <h1 className="title">A Star is born</h1>
      <div className="image">
        <img src={singer} alt="Federica singing"/>
      </div>
      <Link to='/story'>
        <div className="play">
          Play
        </div>
      </Link>
      <Footer/>
    </HomeCSS>
  )
;


export default Home;
