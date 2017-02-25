import React from 'react';

const parseCoordinates = function (coordString) {
  const coordinates = coordString.split(' ');
  const coordinateObj = {
    latitude: +coordinates[4],
    longitude: +coordinates[1],
  };
  return coordinateObj;
};
const Event = (props) => {
/* setDetailsBox passed down from mappage
 * @param {props.event} an event item
 * @returns sets the Event details box to this event
 */
  function setDetailsBox() {
    props.setDetailsBox(props.event);
  }
  function setCoordinates() {
    const coordinates = parseCoordinates(props.event.location)
    props.setCoordinates(coordinates);
  }
  return (
    <article className="eventdetail">
      <div className="eventlistbox">
        <a onClick={setDetailsBox}>{props.event.title}</a>
        <div>eventTime: {props.event.time}.</div>
        <a onClick={setCoordinates}>location:{props.event.location}</a>
        <p>{props.event.description}</p>
        <div>{props.event.tags}</div>
      </div>
    </article>
  );
};
export default Event;
