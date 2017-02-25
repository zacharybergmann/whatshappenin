import React, { Component } from 'react';
import EventList from './subcomponents/eventList.jsx';
import EventForm from './subcomponents/EventForm.jsx';
// import Map from './subcomponents/Map.jsx';
import EventDetail from './subcomponents/EventDetail.jsx';

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      detailsBox: { name: 'name' },
    }
    this.geocodeAddress = this.geocodeAddress;
    this.initMap = this.initMap;
  }
  componentWillMount() {
    this.initMap();
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
  initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', () => {
      this.geocodeAddress(geocoder, map);
    });
  }

  geocodeAddress( geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        this.setState({location:results[0].geometry.location});
        console.log(this.state.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  render() {
    return (
      <main className="container">
        <div id="userpage">
          <section>
            <EventForm location={this.state.location} />
            <div id="floating-panel">
              <input id="address" type="textbox" value="Sydney, NSW" />
              <input id="submit" type="button" value="Geocode" />
            </div>
            <div id="map" />
            <EventDetail event={this.state.detailsBox} />
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
