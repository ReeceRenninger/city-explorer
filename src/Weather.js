import React from 'react';

class Weather extends React.Component {
  render() {

    return (
      <>
        {this.props.cityWeather.map(day => {
          return (
            <>
              <h1>{day.date}</h1>
              <p>{day.description}</p>
            </>
          )
        })}

      </>
    )




  }
}

export default Weather;