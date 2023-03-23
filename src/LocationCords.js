import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class LocationCords extends React.Component {
  render() {
    return (
      <>
        <ListGroup id='cords'>
          <ListGroup.Item>Latitude: {this.props.cityData.lat}</ListGroup.Item>
          <ListGroup.Item>Longitude: {this.props.cityData.lon}</ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}

export default LocationCords;