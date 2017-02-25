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
    // fetch('/googlekey')
    // .then(response => response.json())
    // .then((key) => {
    //   this.setState({ googleKey: key });
    // });
  }
  componentWillReceiveProps(nextprops) {
    if (nextprops.coordinates) {
      const latitude = +nextprops.coordinates.latitude;
      const longitude = +nextprops.coordinates.longitude;
      this.setState({
        location: {
          latitude,
          longitude,
        },
      });
    }
  }

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
