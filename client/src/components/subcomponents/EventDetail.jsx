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
  // function setCoords() {
  //   const coordinates = parseCoordinates(location);
  //   setCoordinates(coordinates);
  // }

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


// EventDetail.propTypes = {
//   event: React.Proptypes.Object.isRequired,
// };
//
//

export default EventDetail;
