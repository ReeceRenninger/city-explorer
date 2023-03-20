import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locationData: [],
      city: []
    }
  }

handleCityInput = (event) => {
  this.setState({
    city: event.target.value
  })
}
// ** async/await - handle our asynchronous code
getCityData = (event) => {
  event.preventDefault();

  // TODO: USE AXIOS TO GET DATA FROM LOCATIONIQ - USING CITY IN STATE

  // TODO: SET STATE WITH THE DAT THAT COMES BACK FROM 
}
// ** GET LOCATION DATA

handleGetLocationData = async (event) => {
  event.preventDefault();

  // TODO: USE AXIOS TO MAKE A CALL OUT TO LOCATION API
  let locationData = await axios.get()
  console.log(locationData.data);
  // TODO: SET THAT DATA INTO STATE
  //** .data - where axios stores the info */
  //** .results - where the api stores the actual location info */
  this.setState({
    locationData: locationData.data.results // need to test what axios sends this back to me
  })
}

  render() {
    return (
      <>
        <h1>API Calls Baby!</h1>

        <form onSubmit={this.getCityData}>
          <label>
            <input type="text" onChange={this.handleCityInput}/>
          </label>
          <button type="submit" onClick={this.handleGetLocationData}>Submit Your City</button>
        </form>

        <ul>
          {/* location.data will need to get updated based off axios result  */}
          {this.state.locationData.map((location, index) => <li key ={index}> {location.data}</li>)} 
        </ul>
      </>
    )
  }
}

export default App;
