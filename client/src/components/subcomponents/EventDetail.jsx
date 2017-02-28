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
  return coordinateObj;
};

const EventDetail = ({ event: { name, time, location, description, tags }, setCoordinates }) => {
  /* setMap passed down from event page, from the map page
   * @param {event location} an event item's location
   * @returns sets the coordinates on profile/dashboard, and changes map coordinates
   */
  function setMap() {
    const coordinates = parseCoordinates(location);
    setCoordinates(coordinates);
  }

  return (
    <article className="eventdetail">
      <img alt="" id="image" className="col-sm-2" />
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
<<<<<<< HEAD

=======
>>>>>>> 3dd3aa720f06089032ed8024f15ae0fb68d829bb
// EventDetail.propTypes = {
//   event: React.PropType.object.isRequired,
// };
export default EventDetail;
