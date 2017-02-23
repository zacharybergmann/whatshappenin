import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import EventDetail from './subcomponents/EventDetail.jsx';
import Map from './subcomponents/Map.jsx';
import EventList from './subcomponents/eventList.jsx';

const Dashboard = ({ data, setEveList, setDetBox }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    <div>
      <section id="eventpagebody">
        <section id="map" className="col-lg-4">
          <section >
            <Map />
            <article id="EventDetail">
              <EventDetail event={data.detailsBox} />
            </article>
          </section>
        </section>
        <sidebar className="col-lg-4">
          <EventList
            eventlist={data.eventList}
            setDetailsBox={setDetBox}
          />
        </sidebar>
      </section>
    </div>)
    {data && <CardText style={{ fontSize: '16px', color: 'green' }}>{data.secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  data: PropTypes.object.isRequired,
  // setEveList: PropTypes.function.isRequired,
  // setDetBox: PropTypes.function.isRequired,
};

export default Dashboard;
