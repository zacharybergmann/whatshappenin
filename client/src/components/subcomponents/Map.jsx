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

  static handleSubmit(event, search) {
    event.preventDefault();

    fetch(`http://maps.googleapis.com/maps/api/geocode/json?address=${search.value}`)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        location: {
          latitude: json.results[0].geometry.location.lat,
          longitude: json.results[0].geometry.location.lng,
        },
      });
    });
  }
  constructor() {
    super();
    this.state = {
      location: {
        latitude: null,
        longitude: null,
      },
      googleKey: null,
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({ location: location.coords });
    });
    fetch('/googlekey')
    .then((response) => response.json())
    .then(key=>{
      this.setState({googleKey:key});
    });
  }

  render() {
    console.log(this.state);
    return (
      <Gmaps
        width={'500px'}
        height={'400px'}
        lat={this.state.location.latitude}
        lng={this.state.location.longitude}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{ v: '3.exp', key: this.state.googleKey }}
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
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick}
        />
      </Gmaps>
    );
  }
}
export default Map;
