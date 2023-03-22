import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {

    return (
      <>
        {this.props.cityWeather.map((day, idx) => {
          return (

              <Card key={idx} className="cards" style={{ width: '18rem' }}>
                <Card.Body>

                  <Card.Title>{day.date}</Card.Title>
                  <Card.Text>{day.description}</Card.Text>

                </Card.Body>
              </Card>


          )
        })}

      </>
    )




  }
}

export default Weather;