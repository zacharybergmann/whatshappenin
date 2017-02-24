import React from 'react';
// import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginLeft: 20,
};

const EventForm = () => {
  let Form = {
    name: '',
    location: '',
    time: '',
    friends: '',
  };

  const logForm = function (event) {
    console(event, user);
  };
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
          value={Form.name}
          hintText="Who are you?"
          style={style}
        />
      </div>
      <div>
        <TextField
          name="location"
          type="location"
          value={Form.location}
          hintText="Where tha party at?!"
          style={style}
        />
      </div>
      <div>
        <TextField
          name="time"
          type="time" value={Form.eventTime}
          hintText="When I gotta be there?" style={style}
        />
      </div>
      <div>
        <TextField
          name="description"
          type="description"
          value={Form.description}
          hintText="Describe your sweet event" style={style}
        />
      </div>
      <div>
        <TextField
          name="tags"
          type="tags"
          value={Form.tags}
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
