import React from "react";
import styled from "styled-components";
import presented from "../assets/presented.png";
import Faq from "./Faq";

const EventDetailsContainer = styled.div`
  margin: 0;
`;

const HeaderImage = styled.img`
  max-width: 100%;
  display: block;
  margin: auto;
  height: 150px;
  width: auto;
`;

const PresenterSection = styled.div`
  background-color: #feee53;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const PresenterImage = styled.img`
  max-width: 100%;
  width: 35%;
  height: auto;
`;

const EventLogo = styled.img`
  max-width: 300px;
  background-color: #fff;
  border-radius: 20px;
  border: 9px solid #edca4a; // maybe prop
  padding: 20px;
  flex: 1;
  margin: 80px 80px 40px 0px;
`;

const EventDescription = styled.div`
  margin-left: 80px;
  text-align: left;
  padding-top: 40px;
`;

const EventText = styled.p`
  margin: 10px 0;
  color: white;
  font-family: EB Garamond;
  font-size: 24px;
`;

const InfoContainer = styled.div`
  background-color: #f5f5f5;
  color: black;
  font-family: EB Garamond;
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoTitle = styled.div`
  font-size: 35px;
`;

const InfoList = styled.div`
  padding-top: 15px;
  text-align: left;
  width: 30%;
  font-size: 20px;
`;

const InfoNote = styled.div`
  padding-top: 30px;
  font-size: 22px;
`;

const FixedButton = styled.button`
  font-family: EB Garamond;
  font-size: 20px;
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #fff; /* Change to your desired button color */
  color: #000; /* Text color */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 999; /* Ensure it sits above other elements */

  &:hover {
    background-color: #feee53;
    color: #fff;
    transition: ease-in-out 0.2s;
  }
`;

const EventDetails = ({ event, setIsClicked }) => {
  const HeaderSection = styled.div`
    background-color: #${event.base_color}; // prop
    text-align: center;
    padding: 20px;
  `;

  const EventInfoSection = styled.div`
    background-color: #${event.base_color}; // prop
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const RegisterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0px;
    background-color: #${event.base_color}; // prop
  `;

  const RegisterButton = styled.div`
    background-color: #${event.faq_color}; // prop
    padding: 10px 40px;
    border-radius: 10px;
    color: #fff;
    font-size: 30px;
    font-family: EB Garamond;

    &:hover {
      background-color: #${event.register_button_hover}; // prop
      transition: ease-in-out 0.2s;
      cursor: pointer;
    }
  `;

  const { headerImageSrc, logoSrc } = event;

  return (
    <EventDetailsContainer>
      <FixedButton
        onClick={() => {
          setIsClicked(false);
          window.scrollTo(0, 0);
        }}
      >
        Back
      </FixedButton>
      <HeaderSection>
        <HeaderImage src={headerImageSrc} alt="Event Hell" />
      </HeaderSection>
      <PresenterSection>
        <PresenterImage src={presented} alt="Presented By" />
      </PresenterSection>
      <EventInfoSection>
        <EventLogo src={logoSrc} alt="Event Logo" />
        <EventDescription>
          <EventText>{event.date}</EventText>
          <EventText>{event.location}</EventText>
          <EventText>
            36 Hole Team Event (18 Best Ball & 18 Alt. Shot)
          </EventText>
          <br />
          <EventText>
            <strong>Entry Fees:</strong>
          </EventText>
          <EventText>Single: $850</EventText>
          <EventText>Two-Person Team: $1700</EventText>
        </EventDescription>
      </EventInfoSection>
      <RegisterSection>
        <RegisterButton>
          <a href={event.register_link ? event.register_link : null}>
            REGISTER
          </a>
        </RegisterButton>
      </RegisterSection>
      <InfoContainer>
        <InfoTitle>
          <strong>Information required at registration</strong>
        </InfoTitle>
        <InfoList>
          <p>• Name</p>
          <p>• Email Address</p>
          <p>• Billing Information</p>
          <p>• Shirt Size</p>
          <p>• GHIN and/or Handicap Information</p>
        </InfoList>
        <InfoNote>
          **If you're registering a team, have all information for both players
        </InfoNote>
      </InfoContainer>
      <Faq bgcolor={event.faq_color} dropdown={event.base_color} />
    </EventDetailsContainer>
  );
};

export default EventDetails;
