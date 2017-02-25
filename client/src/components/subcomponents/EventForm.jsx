import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
// import { Gmaps, Marker, geocoder, InfoWindow } from 'react-gmaps';

const style = {
  marginLeft: 20,
};

const EventForm = ({
  eventDetails,
  eveChange,
  processForm,
  handleTime,
  handleDate,
  location }) =>
    <form action="/" onSubmit={processForm}>
      <div>
        <TextField
          name="title"
          type="title"
          hintText="What's the party called?"
          style={style}
          value={eventDetails.title}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          id="locationslot"
          name="location"
          type="location"
          hintText="Where tha party at?!"
          style={style}
          value={`longitude: ${location.longitude} , latitude: ${location.latitude}`}
          onChange={eveChange}
        />
      </div>
      <div>
        <TimePicker
          name="eventTime"
          type="eventTime"
          hintText="12hr Format"
          style={style}
          onChange={handleTime}
          value={eventDetails.eventTime}
        />
      </div>
      <div>
        <DatePicker
          type="eventDate"
          hintText="Portrait Dialog"
          name="eventDate"
          style={style}
          onChange={handleDate}
          value={eventDetails.eventDate}
        />
      </div>
      <div>
        <TextField
          name="picLink"
          type="picLink"
          hintText="Got an image link to share?"
          style={style}
          value={eventDetails.picLink}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          name="busLink"
          type="busLink"
          hintText="Promote your business' website"
          style={style}
          value={eventDetails.busLink}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          name="businessName"
          type="businessName"
          hintText="Are you a business? What's your name?"
          style={style}
          value={eventDetails.businessName}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          name="tags"
          type="tags"
          hintText="tags"
          style={style}
          value={eventDetails.tags}
          onChange={eveChange}
        />
      </div>
      <div>
        <TextField
          name="description"
          type="description"
          hintText="Describe your sweet event"
          style={style}
          value={eventDetails.description}
          onChange={eveChange}
        />
      </div>
      <div>
        <RaisedButton type="submit" label="make an Event" />
      </div>
    </form>;
export default EventForm;
