import React from 'react';


const parseCoordinates = (coordString) => {
  const coordinates = coordString.split(' ');
  const coordinateObj = {
    latitude: +coordinates[4],
    longitude: +coordinates[1],
  };
  return coordinateObj;
};


const EventDetail = ({
  event: {
    title,
    eventTime,
    eventDate,
    location,
    description,
    tags,
    picLink,
  },
  setCoordinates,
}) => {
  function setCoords() {
    const coordinates = parseCoordinates(location);
    setCoordinates(coordinates);
  }

  return (
    <article className="eventdetail">

      <section className="eventdescription">
        <div className="col-md-3">
          <img src={picLink}></img>
          <br />
          <a>{title}</a>

          <div>Event Time: {eventTime}</div>

          <div>Event Date: {eventDate}</div>

          <a onClick={setCoords}>Show Location on Map</a>
          <p>{description}</p>
          <div>{tags}</div>
        </div>
      </section>
    </article>
  );
};


export default EventDetail;
