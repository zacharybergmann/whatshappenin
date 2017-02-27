import React, { Component } from 'react';
import EventList from './subcomponents/eventList.jsx';
import EventForm from './subcomponents/EventForm.jsx';
import EventDetail from './subcomponents/EventDetail.jsx';

const UserPage = ({
  eventList,
  detBox,
  setDetBox,
  eventDetails,
  eveChange,
  processForm,
  handleTime,
  handleDate,
}) => {
// need to add on mount that calls event list.
// need will change that updates
  return (
    <main className="container">
      <div id="userpage">
        <section>
          <EventForm
            eventDetails={eventDetails}
            eveChange={eveChange}
            processForm={processForm}
            handleTime={handleTime}
            handleDate={handleDate}
          />
        </section>
        <EventDetail event={detBox} />
        <section id="userprofile" className="col-lg-4" />
        <sidebar className="col-lg-4">
          <EventList
            eventlist={eventList}
            setDetailsBox={setDetBox}
          />
        </sidebar>
      </div>
    </main>
  );
};

export default UserPage;
