import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import eventsData from "../utils/eventsData";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EventList = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  algin-items: center;
  width: 70%;
`;

const headerLogo = "../assets/events-logo.png";

const LandingPage = ({ setIsClicked, setEventClicked }) => {
  return (
    <LandingPageContainer>
      <Header siteName="Your Site Name" logoSrc="../assets/events-logo.png" />
      <EventList>
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            setIsClicked={setIsClicked}
            setEventClicked={setEventClicked}
          />
        ))}
      </EventList>
    </LandingPageContainer>
  );
};

export default LandingPage;
