import React from 'react';
import { CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import UserPage from '../components/UserPage.jsx';


/* global localStorage, XMLHttpRequest */

class ProfilePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      detailsBox: {
        name,
      },
      eventDetails: {
        username: '',
        name: '',
        eventTime: '',
        eventDate: '',
        tags: '',
        businessName: '',
        picLink: '',
        busLink: '',
        description: '',
      },
      successMessage: null,
    };

    this.setDetailsBox = this.setDetailsBox.bind(this);
    this.changeEvent = this.changeEvent.bind(this);
    this.processEventForm = this.processEventForm.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleDate = this.handleDate.bind(this);
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

  /**
   * Change the eventDetails object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeEvent(event) {
    console.log(event);
    const field = event.target.name;
    const ev = this.state.eventDetails;
    ev[field] = event.target.value;

    this.setState({
      event: ev,
    });
  }

  /**
   * Handles the TimePicker input from eventForm
   *
   * @param {object} event - the JavaScript event object
   * @param {string} - the time selected through the TimePicker
   */
  handleTime(event, time) {
    const ev = this.state.eventDetails;
    ev.eventTime = time;
    this.setState({
      event: ev,
    });
  }

  /**
   * Handles the TimePicker input from eventForm
   *
   * @param {object} event - the JavaScript event object
   * @param {string} - the date selected through the DatePicker
   */
  handleDate(event, date) {
    const ev = this.state.eventDetails;
    ev.eventDate = date;
    this.setState({
      event: ev,
    });
  }

  /**
   * Processes the information submitted through the eventForm and posts to database
   * @param {event} the event object a user clicks on
   * @return Sets the state successMessage to the returned message if successful
   */
  processEventForm(event) {
    event.preventDefault();
    const eveDet = this.state.eventDetails;
    // create a string for an HTTP body message
    const name = encodeURIComponent(eveDet.name);
    const eventTime = encodeURIComponent(eveDet.eventTime);
    const eventDate = encodeURIComponent(eveDet.eventDate);
    const tags = encodeURIComponent(eveDet.tags);
    const businessName = encodeURIComponent(eveDet.businessName);
    const picLink = encodeURIComponent(eveDet.picLink);
    const busLink = encodeURIComponent(eveDet.busLink);
    const description = encodeURIComponent(eveDet.description);
    const formData = `name=${name}&eventTime=${eventTime}&eventDate=${eventDate}&tags=${tags}&businessName=${businessName}&picLink=${picLink}&busLink=${busLink}&description=${description}`;
    fetch('/api/makeevent', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/x-www-form-urlencoded',
        authorization: `bearer ${(Auth.getToken())}`
      }),
      body: formData,
    }).then(res => res.json())
    .then((res) => {
      this.setState({
        successMessage: res.message,
      });
    })
    .catch(err => `Whoops: ${err}`);
  }

  render() {
    return (
      <div>
        {this.state.successMessage &&
          <CardText className="success-message">{this.state.successMessage}</CardText>}
        <UserPage
          eventList={this.state.eventList}
          detBox={this.state.detailsBox}
          setDetBox={this.setDetailsBox}
          eventDetails={this.state.eventDetails}
          eveChange={this.changeEvent}
          processForm={this.processEventForm}
          handleTime={this.handleTime}
          handleDate={this.handleDate}
        />
      </div>
    );
  }

}

export default ProfilePage;
