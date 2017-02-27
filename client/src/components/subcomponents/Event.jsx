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
/* setDetailsBox passed down from mappage
 * @param {props.event} an event item
 * @returns sets the Event details box to this event
 */
  function setDetailsBox() {
    props.setDetailsBox(props.event);
  }

  function setCoordinates() {
    const coordinates = parseCoordinates(props.event.location);
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
        <a onClick={setDetailsBox}>{props.event.title}</a>
        <div>EventTime: {props.event.time}.</div>
        <a onClick={setCoordinates}>location:{props.event.location}</a>
        <p>{props.event.description}</p>
        <div>{props.event.tags}</div>
        <span>
          <a onClick={addAttendee}>I'm Going!</a>
          <div>attendees: {props.event.attendees}</div>
        </span>
      </div>
    </article>
  );
};
//
// Event.propTypes = {
//   event: React.Proptypes.String.isRequired,
//   setDetailsBox: React.Proptypes.Function.isRequired,
// };

export default Event;
/*
TODO: put in all pieces for below schema
Even schema for reference
// username: String,
// eventTime: Date,
// location: String,
// createdAt: Date, // In the format of "2/16/2017, 8:28:03 PM"
// tags: Array,
// businessName: String,
// picLink: String, // Link to hosted picture
// busLink: String, // url to business' homepage
// description: String,
export default Event;
*/
