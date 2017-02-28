import React from 'react';

const EventDetail = ({ event: { name, time, location, description, tags } }) =>
  <article className="eventdetail">
    <img alt="" id="image" className="col-sm-2" />
    <section className="eventdescription">
      <div className="col-md-3">
        <a>{name}</a>
        <div>eventTime: {time}.</div>
        <a>location:{location}</a>
        <p>{description}</p>
        <div>{tags}</div>
      </div>
    </section>
  </article>


export default EventDetail;
