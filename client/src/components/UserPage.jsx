import React, { Component } from 'react';
import EventList from './subcomponents/eventList.jsx';
import EventForm from './subcomponents/EventForm.jsx';
<<<<<<< HEAD
import Map from './subcomponents/Map.jsx';
=======
// import Map from './subcomponents/Map.jsx';
>>>>>>> (feature) Add google geolocating
import EventDetail from './subcomponents/EventDetail.jsx';

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      eventList: [],
      detailsBox: { name: 'name' },
<<<<<<< HEAD
      location: {
        longitude: null,
        latitude: null,
      }
    };
    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.setCoordinates = this.setCoordinates.bind(this);
  }
  componentWillMount() {
=======
    }
    this.geocodeAddress = this.geocodeAddress;
    this.initMap = this.initMap;
  }
  componentWillMount() {
    this.initMap();
>>>>>>> (feature) Add google geolocating
    /**
   *
   * @param {events} a list of event objects from query
   * @returns Sets the state eventlist to the array of events
   */
    fetch('/events').then(events => events.json())
    .then((events) => {
<<<<<<< HEAD
=======
     console.log(events, 'eventbox');
>>>>>>> (feature) Add google geolocating
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
<<<<<<< HEAD

  /**
 *
 * @param {location} will be a set of coordinates
 * @returns Sets the state coordinates, and loads the eventform
 * with the given location
 */
  setCoordinates(location) {
    this.setState({ location });
  }

=======
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
>>>>>>> (feature) Add google geolocating
  render() {
    return (
      <main className="container">
        <div id="userpage">
          <section>
            <EventForm location={this.state.location} />
<<<<<<< HEAD
            <Map coordinates={this.state.location} geoCode={this.setCoordinates} />
=======
            <div id="floating-panel">
              <input id="address" type="textbox" value="Sydney, NSW" />
              <input id="submit" type="button" value="Geocode" />
            </div>
            <div id="map" />
>>>>>>> (feature) Add google geolocating
            <EventDetail event={this.state.detailsBox} />
          </section>
          <section id="userprofile" className="col-lg-4" />
          <sidebar className="col-lg-4">
            <EventList
<<<<<<< HEAD
              setCoordinates={this.setCoordinates}
              eventlist={this.state.eventList}
              setDetailsBox={this.setDetailsBox}
=======
              eventlist={this.state.eventList}
              setDetailsBox={this.setDetailsBox.bind(this)}
>>>>>>> (feature) Add google geolocating
            />
          </sidebar>
        </div>
      </main>
    );
  }
}

export default UserPage;
