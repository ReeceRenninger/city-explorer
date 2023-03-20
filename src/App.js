import React from 'react';
import axios from 'axios';
// import image from 'react-bootstrap/Image'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      city: '',
      cityLongitude: '',
      cityLatitude: '',
      cityData: {}, // data coming from axios is in the form of an object so set container to object
      error: false,
      errorMessage: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,

    })
  }

  getCityData = async (event) => {
    event.preventDefault();

    // try this 
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);
      console.log(cityDataFromAxios.data);
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });
      // the try couldnt happen so this happens
    } catch (error) {
      console.log(error)
      //TODO: set state with the error boolean and the error message
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }

  }
  render() {
    return (
      <>
        <h1>API Calls Baby!</h1>

        <form onSubmit={this.getCityData}>
          <label>
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {/* TERNARY - WTF  */}
        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>
            : Object.keys(this.state.cityData).length > 0 && 
            <ul>
              <p>{this.state.cityData.display_name}</p>
              <p>{this.state.cityData.lon}</p>
              <p>{this.state.cityData.lat}</p>
              <img src= {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt='Map of selected location'/>
            </ul>

        }


      </>
    )
  }
}
// ** async/await - handle our asynchronous code
// ** try/catch - handle our errors - TRY resolve our successful promises & CATCh handle rejected promises







export default App;
