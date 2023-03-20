import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      city: '',
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

    try {
      // try this 
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });
    }

    } catch(error) {
    console.log(error)
    //TODO: set state with the error boolean and the error message
    this.setState({
      error: true,
      errorMessage: error.message
    })
    // the try couldnt happen so this happens
  }

  // // TODO: USE AXIOS TO GET DATA FROM LOCATIONIQ - USING CITY IN STATE
  // let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

  // let cityDataFromAxios = await axios.get(url);

  // // TODO: SET STATE WITH THE DAT THAT COMES BACK FROM 
  // this.setState({
  //   cityData: cityDataFromAxios.data[0]
  // })
}
// ** async/await - handle our asynchronous code
// ** try/catch - handle our errors - TRY resolve our successful promises & CATCh handle rejected promises
// !! MAP PORTION OF YOUR LAB IMG SRC POINTS TO THIS URL:
// !! https://maps.locationiq.com/v3/staticmap?key=pk.c99fe602101eebe5bbeb4261bd09aa7d&center=47.6038321,-122.330062&zoom=13


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
          ? <p>{this.sate.errorMessage}</p>
          : <p>{this.state.cityData.display_name}</p>
      }
      <p>{this.state.cityData.display_name}</p>

    </>
  )
}
}



export default App;
