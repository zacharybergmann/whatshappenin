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
      location: {
        longitude: 'longitude',
        latitude: 'latitude',
      }
    };
    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
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

  /**
 *
 * @param {location} will be a set of coordinates
 * @returns Sets the state coordinates, and loads the eventform
 * with the given location
 */
  setCoordinates(location) {
    this.setState({ location });
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
            <Map coordinates={this.state.location} geoCode={this.setCoordinates} />
            <EventDetail event={this.state.detailsBox} />
          </section>
          <section id="userprofile" className="col-lg-4" />
          <sidebar className="col-lg-4">
            <EventList
              setCoordinates={this.setCoordinates}
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
