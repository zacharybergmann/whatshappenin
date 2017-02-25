import React from 'react';
import Event from './Event.jsx';

const EventList = ({ eventlist, setDetailsBox, setCoordinates }) =>
  <div>
    {eventlist.map(event =>
      <Event
        key={event.id}
        setCoordinates={setCoordinates}
        setDetailsBox={setDetailsBox}
        event={event}
      />,
    )}
  </div>;

// EventList.propTypes = {
//   eventlist: React.Proptypes.Array.isRequired,
//   setDetailsBox: React.Proptypes.isRequired,
// };
export default EventList;
