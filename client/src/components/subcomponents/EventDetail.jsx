import React from 'react';

const EventDetail = props =>
  <article className="eventdetail">
    <img alt="" src="http://www.ufunk.net/wp-content/uploads/2013/03/thumbs-and-ammo-9.jpg" className="col-sm-2" />
    <section className="eventdescription">
      <div className="col-md-3">
        <h3>Event name</h3>
        <div>username: {props.event},</div>
        <div>eventTime: Date,</div>
        <a>location: String, link to map</a>
        <p> full event description</p>
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
