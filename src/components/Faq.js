import React, { useState } from "react";
import { Data } from "../utils/faqData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const Container = styled.div`
  top: 3%;
  margin: 0px 100px;
  width: 70%;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

const RoundedWrap = styled.div`
  background: #fff;
  colour: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 20px 20px 20px 20px;

  h1 {
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 1.8rem;
      font-size: 0.9rem;
    }

    span {
      margin-right: 0rem;
    }
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Wrap = styled.div`
  background: #fff;
  colour: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 20px 20px 0px 0px;

  h1 {
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    h1 {
      padding: 1.8rem;
      font-size: 0.9rem;
    }
    span {
      margin-right: 0rem;
    }
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  color: #fff;
  font-size: 35px;
`;

const Footer = styled.div`
  text-align: center;
  color: white;
  font-size: 25px;
  margin-top: 40px;
`;

const Faq = ({ bgcolor, dropdown }) => {
  const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    background: #${bgcolor}; // prop
    padding: 40px 0px;
    font-family: EB Garamond;
  `;

  const Dropdown = styled.div`
    background: #${dropdown}; // prop
    color: #fff;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 20px 20px;

    p {
      font-size: 1.2rem;
      padding: 20px;
    }

    @media screen and (max-width: 768px) {
      p {
        font-size: 0.7rem;
        padding: 20px;
      }
    }
  `;

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "000", size: "25px" }}>
      <FaqSection>
        <Header>
          <strong>Frequently Asked Questions</strong>
        </Header>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                {clicked === index ? (
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1 class="black-text">{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                ) : (
                  <RoundedWrap onClick={() => toggle(index)} key={index}>
                    <h1 class="black-text">{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </RoundedWrap>
                )}
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
        <Footer>Other questions? - Email us at events@thefriedegg.com</Footer>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default Faq;
