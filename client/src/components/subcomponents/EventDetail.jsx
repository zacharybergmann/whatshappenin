import React from 'react';
/**
*
* @param {coordinate string} will be a set of coordinates
* @returns parsed string, allows the map to be updated with new
* coordinates when the event location is clicked;
*/
const parseCoordinates = function parseCoordinates(coordString) {
  let coordinates = coordString.split('longitude');
  const coordinateObj = {
    address: coordinates[0]
  };
  coordinates = coordinates[1].split(' ');
  coordinateObj.latitude = +coordinates[coordinates.length - 1];
  coordinateObj.longitude = +coordinates[1];
};


const EventDetail = ({
  event: {
    picLink,
    title,
    eventTime,
    eventDate,
    businessName,
    busLink,
    description,
    tags,
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
          <button type="button" onClick={setCoords}>Show Location on Map</button>
          {businessName !== '' && <div>Business: {businessName}</div>}
          {busLink !== '' && <a target="_blank" rel="noreferrer noopener" href={busLink}>Website</a>}
          <br />
          {/* <a onClick={setCoords}>Show Location on Map</a> */}
          <p>{description}</p>
          <div>{tags}</div>
        </div>
      </section>
    </article>
  );
};

export default EventDetail;
