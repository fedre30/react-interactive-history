import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Colors from "../../styles/const";



const HomeCSS = styled.div`
background-color: ${Colors.background};

`

const Home = () => (
  <HomeCSS>
    <h1>You've got a friend in me</h1>



  </HomeCSS>
);



export default Home;
