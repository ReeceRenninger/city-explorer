import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Weather from './Weather';
import Movies from './Movies';
import LocationCords from './LocationCords';
import './App.css'
// import image from 'react-bootstrap/Image'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: [],
      city: '',
      cityData: {}, // data coming from axios is in the form of an object so set container to object
      cityWeather: [],
      movieInfo: [], // data to be filled via server built with static file
      error: false,
      errorMessage: ''
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value

    })
  }
  //!! main grabber of API location IQ grabs information and passes it to other APIs 
  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);

      this.setState({
        cityData: cityDataFromAxios.data[0], // grabs the first instance of Seattle in data 
        error: false
      });

      //TODO: handleWeather
      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;
      this.handleWeather(lat, lon);

      //TODO: getMovies
      this.getMovies();

    } catch (error) {
      console.log('GetCityData' + error.message)

      this.setState({
        error: true,
        errorMessage: error.message
      });
    }

  }

  handleWeather = async (lat, lon) => {

    try {

      let url = `${process.env.REACT_APP_SERVER}/weather?&searchQuery=${this.state.city}&lat=${lat}&lon=${lon}`
      let weatherDataFromAxios = await axios.get(url);
      console.log(weatherDataFromAxios.data);

      this.setState({
        cityWeather: weatherDataFromAxios.data
        
      });

    } catch (error) {
      console.log('HandleSubmit' + error.message);
      this.setState({
        error: true,
        errorMessage: error.message
      });
    }
  }

  getMovies = async () => {
    try {
      let url =`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`
      let movieDataFromAxios = await axios.get(url);
      console.log(movieDataFromAxios.data);

      this.setState({
        movieInfo: movieDataFromAxios.data
      });

    } catch (error) {
      console.log('getMovies' + error.message);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
  }


  render() {
    return (
      <>
        <h1>API Calls!</h1>

        <Form onSubmit={this.getCityData}>
          <Form.Label>City Explorer</Form.Label>
          <Form.Control type="text" placeholder="Enter a city name here" onChange={this.handleCityInput} />
          <Button variant="info" type="submit">Explore!</Button>
        </Form>

        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>
            : Object.keys(this.state.cityData).length > 0 &&
            <ul>
              <h2>{this.state.cityData.display_name}</h2>
              <LocationCords
                cityData={this.state.cityData}
              />
              <Image id='cityMap' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`} alt='Map of selected location' />
              <Weather cityWeather={this.state.cityWeather} />
              <Movies movieInfo={this.state.movieInfo}/>


            </ul>

        }


      </>
    )
  }
}


export default App;
