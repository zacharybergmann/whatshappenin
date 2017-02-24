import React, { Component } from 'react';
import EventList from './subcomponents/eventList.jsx';
import EventForm from './subcomponents/EventForm.jsx';

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      eventList: ['userevent1', 'userevent2', 'userevent3', 'userevent4', 'userevent5'],
      map: null,
      detailsBox: null,
    };
  }
  /**
   * Returns the sum of a and b
   * @param {event} the event object a user clicks on
   * @return Sets the state detailbox to the clicked event
   */
  setDetailsBox(detailsBox) {
    console.warn(detailsBox, 'event');
    this.setState({ detailsBox });
  }

  /**
 * Returns the sum of a and b
 * @param {events} a list of event objects from query
 * @returns Sets the state eventlist to the array of events
 */
  setEventList(events) {
    this.setState({ eventList: events });
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
