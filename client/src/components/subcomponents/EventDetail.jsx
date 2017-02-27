import React from 'react';

const EventDetail = props =>
  <article className="eventdetail">
    <img alt="" id="image" className="col-sm-2" />
    <section className="eventdescription">
      <div className="col-md-3">
        <a>{props.event.name}</a>
        <div>eventTime: {props.event.time}.</div>
        <a>location:{props.event.location}</a>
        <p>{props.event.description}</p>
        <div>{props.event.tags}</div>
      </div>
    </section>
  </article>;

// EventDetail.propTypes = {
//   event: React.Proptypes.Object.isRequired,
// };
//
//

// createdAt: Date, // In the format of "2/16/2017, 8:28:03 PM"
// tags: Array,
// businessName: String,
// picLink: String, // Link to hosted picture
// busLink: String, // url to business' homepage
// description: String,
// });
export default EventDetail;
