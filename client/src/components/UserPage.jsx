import React, { Component } from 'react';
import EventList from './subcomponents/eventList.jsx';
import EventForm from './subcomponents/EventForm.jsx';
import Map from './subcomponents/Map.jsx';
import EventDetail from './subcomponents/EventDetail.jsx';

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      detailsBox: { name: 'name' },
    };
    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.geoCode = this.geoCode.bind(this);
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
  geoCode(location) {
    this.setState({ location });
  }
  render() {
    return (
      <main className="container">
        <div id="userpage">
          <section>
            <EventForm location={this.state.location} />
            <Map />
            <EventDetail event={this.state.detailsBox} />
          </section>
          <section id="userprofile" className="col-lg-4" />
          <sidebar className="col-lg-4">
            <EventList
              eventlist={this.state.eventList}
              setDetailsBox={this.setDetailsBox}
            />
          </sidebar>
        </div>
      </main>
    );
  }
}

export default UserPage;
