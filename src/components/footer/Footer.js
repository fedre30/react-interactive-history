import React, {Component} from "react";
import styled from "styled-components";

const FooterCSS = styled.div`
width: 100%;
height: 100vh;
text-align: center;
position: absolute;
top: 95vh;

`
class Footer extends Component {
  render() {
    return (
      <FooterCSS>
        <p> © Federica Alfano - {(new Date()).getFullYear()}</p>
      </FooterCSS>
    );
  }
}

export default Footer;
