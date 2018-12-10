import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const HomeCSS = styled.div`
background:red;
`

const Home = () => (
  <HomeCSS>
    <h1>Homepage</h1>

    <li><Link to='/instrument' >
      instrument
    </Link></li>
    <li><Link to='/map' >
      map
    </Link></li>
    <li><Link to='/studio' >
      studio
    </Link></li>

  </HomeCSS>
);



export default Home;
