import React from 'react';
// import fetch from 'react-fetch';
import { Gmaps, Marker, InfoWindow } from 'react-gmaps';

class Map extends React.Component {

  static onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      rotateControl: true,
    });
  }

  static onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  static onCloseClick() {
    console.log('onCloseClick');
  }

  static onClick(e) {
    console.log('onClick', e);
  }


  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: null,
        longitude: null,
      },
      googleKey: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({ location: location.coords });
    });
  }
  componentWillReceiveProps(nextprops) {
    console.log(this.state,'prior to change')
    if (nextprops.coordinates) {
      const latitude = +nextprops.coordinates.latitude;
      const longitude = +nextprops.coordinates.longitude;
      this.setState({
        location: {
          latitude: latitude,
          longitude: longitude,
        },
      });
    }
    console.log(this.state);
  }
  /**
 *
 * @param {event} form submission event
 * @param this, state, Takes the search position from state object
 *
 * @returns Sets the location of the map for a query, and sets the event form
 *          location parameter to the geolocation's coordinates.
 */
  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}`)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        location: {
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
        },
      });
      if (this.props.geoCode) {
        this.props.geoCode({
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
        });
      }
    });
  }
  componentWillReceiveProps(nextprops) {
    console.log(this.state,'prior to change')
    if (nextprops.coordinates) {
      const latitude = +nextprops.coordinates.latitude;
      const longitude = +nextprops.coordinates.longitude;
      this.setState({
        location: {
          latitude: latitude,
          longitude: longitude,
        },
      });
    }
    console.log(this.state);
  }
  // shouldComponentUpdate(nextprops, nextstate) {
  //   return this.state.longitude === nextstate.longitude;
  // }
  /**
 *
 * @param {event} form submission event
 * @param this, state, Takes the search position from state object
 *
 * @returns Sets the location of the map for a query, and sets the event form
 *          location parameter to the geolocation's coordinates.
 */
  handleSubmit(event) {
    event.preventDefault();
    console.log('submit', this.state.search)
    fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}`)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        location: {
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
        },
      });
    });
    if (this.props.geoCode) {
      this.props.geoCode({ longitude: this.state.location.longitude,
        latitude: this.state.location.latitude,
      });
    }
  }
  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input id="address" name="location" onChange={this.handleChange} type="text" />
          <input type="submit" value="Geocode" />
        </form>
        <Gmaps
          width={'500px'}
          height={'400px'}
          lat={this.state.location.latitude}
          lng={this.state.location.longitude}
          zoom={12}
          loadingMessage={'Be happy'}
          params={{ v: '3.exp', key: 'AIzaSyDr0vzKpPyWUghywsRJI9PXgOtNkVs2u3g' }}
          onMapCreated={this.onMapCreated}
        >
          <Marker
            lat={this.state.location.latitude}
            lng={this.state.location.longitude}
            draggable
            onDragEnd={this.onDragEnd}
          />
          <InfoWindow
            lat={this.state.location.latitude}
            lng={this.state.location.longitude}
            onCloseClick={this.onCloseClick}
          />
        </Gmaps>
      </div>
    );
  }
}
export default Map;
