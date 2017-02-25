import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';


const NotFound = () => (
  <Card className="container">
    <CardTitle title="Whoops!" subtitle="The location you requested doesn't exist!" />
    <img
      src="http://mediacdn.snorgcontent.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/s/h/shruglife_fullpic_1.jpg"
      alt="Shrugsville"
    />
  </Card>
);

export default NotFound;
