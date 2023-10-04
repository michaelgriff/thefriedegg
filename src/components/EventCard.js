import React from "react";
import styled from "styled-components";
import { FaArrowCircleRight } from "react-icons/fa";

const Listing = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: EB Garamond;
`;

const EventCardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 40px 20px 20px;
  display: flex;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EventTextContainer = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 40px;
`;

const EventSubtextContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;

const EventLogo = styled.img`
  max-width: 100px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  padding-right: 20px;
  width: 100px;
  height: auto;
`;

const EventName = styled.h2`
  text-align: left;
  margin: 0;
`;

const EventDate = styled.p`
  margin: 0 0;
`;

const EventLocation = styled.p`
  margin: 0;
`;

const EventButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;

  &:hover {
    transition: ease-in-out 0.2s;
    color: #fdd035;
  }
`;

const EventStatusOpen = styled.div`
  margin-top: 10px;
  background-color: #24bd6b;
  border-radius: 10px;
  padding: 10px;
  width: 80px;
  color: #fff;
`;

const EventStatusClosed = styled.div`
  margin-top: 10px;
  background-color: #434343;
  border-radius: 10px;
  padding: 10px;
  width: 80px;
  color: #fff;
`;

const EventCard = ({ event, setIsClicked, setEventClicked }) => {
  const { logoSrc, name, date, location, isOpen } = event;

  return (
    <Listing>
      <EventCardContainer>
        <EventLogo src={logoSrc} alt={name} />
        <EventTextContainer>
          <EventName>{name}</EventName>
          <EventSubtextContainer>
            <EventDate>{date}</EventDate>
            <EventLocation>{location}</EventLocation>
          </EventSubtextContainer>
        </EventTextContainer>
      </EventCardContainer>
      <ButtonContainer>
        <EventButton>
          <FaArrowCircleRight
            size={30}
            onClick={() => {
              setIsClicked(true);
              setEventClicked(event);
              window.scrollTo(0, 0);
            }}
          />
        </EventButton>

        {isOpen ? (
          <EventStatusOpen>OPEN</EventStatusOpen>
        ) : (
          <EventStatusClosed>CLOSED</EventStatusClosed>
        )}
      </ButtonContainer>
    </Listing>
  );
};

export default EventCard;
