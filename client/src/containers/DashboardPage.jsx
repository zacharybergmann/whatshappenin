import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

/* global localStorage, XMLHttpRequest */

class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      eventList: [],
      detailsBox: {
        name,
      },
    };
    /**
   *
   * @param {events} a list of event objects from query
   * @returns Sets the state eventlist to the array of events
   */
    fetch('/events').then(events => events.json())
    .then((events) => {
      this.setState({
        eventList: events,
        detailsBox: events[0]
      });
    }).catch(err => console.log(err));
<<<<<<< HEAD
=======

>>>>>>> (feature) Add component update controllers to map, allows event clicks to position map to even location
    this.setCoordinates = this.setCoordinates.bind(this);
    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.setEventList = this.setEventList.bind(this);
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    fetch('/api/dashboard', {
      method: 'GET',
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
        authorization: `bearer ${(Auth.getToken())}`
      })
    }).then(res => res.json())
    .then((data) => {
      this.setState({
        secretData: data.message,
      });
    })
    .catch(err => `Whoops: ${err}`);
  }


  /**
   * Returns the sum of a and b
   * @param {event} the event object a user clicks on
   * @return Sets the state detailbox to the clicked event
   */
  setDetailsBox(detailsBox) {
    this.setState({ detailsBox });
  }

  /**
 * Returns the sum of a and b
 * @param {events} a list of event objects from query
 * @returns Sets the state eventlist to the array of events
 */
  setEventList(eventList) {
    this.setState({ eventList });
  }
<<<<<<< HEAD


  setCoordinates(location) {
    this.setState({ location });
  }

=======
  setCoordinates(location) {
    this.setState({ location });
  }
>>>>>>> (feature) Add component update controllers to map, allows event clicks to position map to even location
  /**
   * Render the component.
   */
  render() {
    return (<Dashboard
      coordinates={this.state.location}
      setCoordinates={this.setCoordinates}
      setDetBox={this.setDetailsBox}
      setEveList={this.setEventList}
      data={this.state}
    />);
  }

}

export default DashboardPage;
