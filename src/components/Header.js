import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
`;

const LogoImage = styled.img`
  max-width: 100%;
  width: 50%;
  height: auto;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const Header = ({ siteName, logoSrc }) => {
  return (
    <HeaderContainer>
      <LogoImage src={require("../assets/events-logo.png")} alt={siteName} />
    </HeaderContainer>
  );
};

export default Header;
