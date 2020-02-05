import React, { Component } from "react";
import Welcome from "./Components/welcome";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "ab507d9638a0c1fd33bed1b6163553d7";

class App extends Component {
    
  initial_state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    conditions: undefined,
    error: undefined
  };
  state = this.initial_state;

  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
   
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const data = await api_call.json();
      console.log(data);
      this.setState(this.initial_state);
      if (city && country && data.main) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        conditions: data.weather[0].description,
        error: undefined
      });
     
    }
    else{
        
        this.setState({
            
            error:data.message
        })
    }
    
  };
  render() {
    return (
      <div>
        <Welcome />
        <br />
        <Form getWeather={this.getWeather} />
        <br></br>
        <Weather weatherProps={this.state} />
      </div>
    );
  }
  
}

export default App;
