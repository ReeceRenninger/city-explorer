import React from 'react';

class LocationCords extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.cityData.lon}</p>
        <p>{this.props.cityData.lat}</p>
      </>
    )
  }
}

export default LocationCords;