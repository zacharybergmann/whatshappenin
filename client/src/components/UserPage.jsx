import React, { Component } from 'react';
import EventList from './subcomponents/eventList.jsx';
import EventForm from './subcomponents/EventForm.jsx';


import EventDetail from './subcomponents/EventDetail.jsx';

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      map: null,
      detailsBox: { name: 'name' },
    };
  }
  componentWillMount() {
    /**
   *
   * @param {events} a list of event objects from query
   * @returns Sets the state eventlist to the array of events
   */
    fetch('/events').then(events => events.json())
    .then((events) => {
     console.log(events, 'eventbox');
      this.setState({ eventList: events });
      this.setState({ detailsBox: events[0] });
      console.log(this.state,'state');
    }).catch(err => console.log(err));
  }
  /**
   *
   * @param {event} the event object a user clicks on
   * @return Sets the state detailbox to the clicked event
   */
  setDetailsBox(detailsBox) {
    this.setState({ detailsBox });
  }

// need to add on mount that calls event list.
// need will change that updates
  render() {
    return (
      <main className="container">
        <div id="userpage">
          <section>
            <EventForm />
          </section>
            <EventDetail event={this.state.detailsBox} />
          <section id="userprofile" className="col-lg-4" />
          <sidebar className="col-lg-4">
            <EventList
              eventlist={this.state.eventList}
              setDetailsBox={this.setDetailsBox.bind(this)}
            />
          </sidebar>
        </div>
      </main>
    );
  }
}

export default UserPage;
