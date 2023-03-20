import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locationData: [],
    }
  }

// ** async/await - handle our asynchronous code

// ** GET LOCATION DATA

handleGetLocationData = async (event) => {
  event.preventDefault();

  // TODO: USE AXIOS TO MAKE A CALL OUT TO LOCATION API
  let locationData = await axios.get()
  console.log(locationData);
  // TODO: SET THAT DATA INTO STATE
}

  render() {
    return (
      <>
        <h1>API Calls Baby!</h1>

        <form>
          <button type="submit">Submit Your City</button>
        </form>
      </>
    )
  }
}

export default App;
