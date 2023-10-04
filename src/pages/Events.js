import React from "react";
import EventDetails from "../components/EventDetails";
import { eventsPageData } from "../utils/eventsPageData";

const EventDetailsPage = ({ setIsClicked, eventClicked }) => {
  // const eventDetails = {
  //   headerImageSrc: backyahd,
  //   presenterImageSrc: "event-presenter.jpg",
  //   logoSrc:
  //     "https://ddz5qbrxrbzp.cloudfront.net/uploads/asset/image/9174040506315856973/large_464e948e-608f-4522-82cc-75db9118f1c8.png",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.`,
  //   // Add more event details as needed
  // };

  return (
    <div>
      <EventDetails setIsClicked={setIsClicked} event={eventClicked} />
    </div>
  );
};

export default EventDetailsPage;
