  import React, { PropTypes } from 'react';

/**
*
* @param {coordinate string} will be a set of coordinates
* @returns parsed string, allows the map to be updated with new
* coordinates when the event location is clicked;
*/
  const parseCoordinates = function parseCoordinates(coordString) {
    console.log(coordString,'coordinates')
    let coordinates = coordString.split('longitude');
    const coordinateObj = {
      address: coordinates[0]
    };
    coordinates = coordinates[1].split(' ');
    coordinateObj.latitude = +coordinates[coordinates.length - 1];
    coordinateObj.longitude = +coordinates[1];

    return coordinateObj;
  };
  const Event = (props) => {
  /* setDetailsBox passed down from Userpage
   * @param {props.event} an event item
   * @returns sets the Event details box to this event
   */
    const setDetailsBox = function setDetailsBox() {
      props.setDetailsBox(props.event);
    };
    /* setCoordinates passed down from event page, from the map page
     * @param {event location} an event item's location
     * @returns sets the coordinates on profile/dashboard, and changes map coordinates
     */

    function setCoordinates() {
      const coordinates = parseCoordinates(props.event.location);
      props.setCoordinates(coordinates);
    }

    const addAttendee = function addAttendee() {
      fetch('/addAttendee', { method: 'POST',
        params: { username: localStorage.getItem('email'), event: props.event.title }
      }).then((attended) => {
        if (attended) {
          props.event.attendees += 1;
        }
      });
    };
    return (
      <article className="eventdetail">
        <div className="eventlistbox">
          <button type="button" >Display: {props.event.title} </button>
          <div>EventTime: {props.event.time}.</div>
          <button type="button" onClick={setCoordinates}>location:{props.event.location}</button>
          <p>{props.event.description}</p>
          <div>{props.event.tags}</div>
        </div>
      </article>
    );
  };
  Event.propTypes = {
    event: PropTypes.object.isRequired,
  };
  export default Event;
