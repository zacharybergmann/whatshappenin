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

    <form>
      <div>
        <TextField
          name="name"
          type="name"
          value={Form.name}
          hintText="what goes in here"
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
          type="time" value={Form.time}
          hintText="When I gotta be there?" style={style}
        />
      </div>
      <div>
        <TextField
          name="friends"
          type="friends"
          value={Form.friends}
          hintText="Can I bring somebody?" style={style}
        />
      </div>
      <div>
        <RaisedButton type="submit" label="make an Event" />
      </div>
    </form>
  );
};

export default EventForm;
