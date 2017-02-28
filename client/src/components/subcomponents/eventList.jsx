import React from 'react';
import Event from './Event.jsx';

const EventList = ({ eventlist, setDetailsBox, setCoordinates }) =>
  <div>
    {eventlist.map(event =>
      <Event
        key={event._id}
        setCoordinates={setCoordinates}
        setDetailsBox={setDetailsBox}
        event={event}
      />,
    )}
  </div>;

EventList.propTypes = {
  eventlist: React.PropTypes.array.isRequired,
  setDetailsBox: React.PropTypes.func.isRequired,
  setCoordinates: React.PropTypes.func.isRequired,
};
export default EventList;
