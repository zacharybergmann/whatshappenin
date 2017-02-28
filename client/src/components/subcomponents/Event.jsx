import React from 'react';

/**
*
* @param {coordinate string} will be a set of coordinates
* @returns parsed string, allows the map to be updated with new
* coordinates when the event location is clicked;
*/
const parseCoordinates = function (coordString) {
  const coordinates = coordString.split(' ');
  const coordinateObj = {
    latitude: +coordinates[4],
    longitude: +coordinates[1],
  };
  return coordinateObj;
};
const Event = (props) => {
/* setDetailsBox passed down from Userpage
 * @param {props.event} an event item
 * @returns sets the Event details box to this event
 */
  function setDetailsBox() {
    props.setDetailsBox(props.event);
  }
  /* setCoordinates passed down from event page, from the map page
   * @param {event location} an event item's location
   * @returns sets the coordinates on profile/dashboard, and changes map coordinates
   */

  function setCoordinates() {
    const coordinates = parseCoordinates(props.event.location)
    props.setCoordinates(coordinates);
  }
  function addAttendee() {
    fetch('/addAttendee', { method: 'POST',
      params: { username: localStorage.getItem('email'), event:props.event.title }
    }).then((attended) => {
      if (attended) {
        props.event.attendees++;
      }
    });
  }
  return (
    <article className="eventdetail">
      <div className="eventlistbox">
        <a onClick={setDetailsBox}>{props.event.name}</a>
        <div>EventTime: {props.event.time}.</div>
        <a onClick={setCoordinates}>location:{props.event.location}</a>
        <p>{props.event.description}</p>
        <div>{props.event.tags}</div>
      </div>
    </article>
  );
};

export default Event;
