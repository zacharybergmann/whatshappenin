import React from 'react';
// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker'
import DatePicker from 'material-ui/DatePicker';

const style = {
  marginLeft: 20,
};

const EventForm = () => {
  return (
    // username: String,
    // name: String,
    // eventTime: String,
    // location: String,
    // createdAt: String, // In the format of "2/16/2017, 8:28:03 PM"
    // tags: String,
    // businessName: String,
    // picLink: String, // Link to hosted picture
    // busLink: String, // url to business' homepage
    // description: String,
    <form action="/makeevent" method="post">
      <div>
        <TextField
          name="name"
          type="name"
          hintText="Who are you?"
          style={style}
        />
      </div>
      <div>
        <TextField
          name="location"
          type="location"
          hintText="Where tha party at?!"
          style={style}
        />
      </div>
      <div>
        <TimePicker
          name="time"
          hintText="12hr Format"
          style={style}
        />
      </div>
      <div>
        <DatePicker
          hintText="Portrait Dialog"
          name="date"
          style={style}
        />
      </div>
      <div>
        <TextField
          name="description"
          type="description"
          hintText="Describe your sweet event" style={style}
        />
      </div>
      <div>
        <TextField
          name="tags"
          type="tags"
          hintText="tags" style={style}
        />
      </div>
      <div>
        <RaisedButton type="submit" label="make an Event" />
      </div>
    </form>
  );
};

export default EventForm;
