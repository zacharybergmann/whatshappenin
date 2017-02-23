import React from 'react';
import Event from './Event.jsx';

const EventList = ({ eventlist, setDetailsBox }) =>
  <div>
    {eventlist.map(event =>
      <Event setDetailsBox={setDetailsBox} event={event} />,
    )}
  </div>;

// EventList.propTypes = {
//   eventlist: React.Proptypes.Array.isRequired,
//   setDetailsBox: React.Proptypes.isRequired,
// };
export default EventList;
