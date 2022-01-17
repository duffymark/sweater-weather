import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js'
import './App.css';

function App() {

  //useStates

const [userInput, setUserInput] = useState('');
const [searchTerm, setSearchTerm] = useState('');
const [weather, setWeather] = useState([]);

// call API to BitWeather

 useEffect(() => {
    const apiKey = 'b708779c14f64973950cdad688a8ee24';
    axios({
      url: 'http://api.weatherbit.io/v2.0/current',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: apiKey,
        country: 'Canada',
        city: searchTerm
      }
    }).then( (response) => {
      console.log(response.data.data);
      setWeather(response.data.data); //update "weather" state with response from API
      console.log(setWeather)
    });
  }, [searchTerm]) // }, [searchTerm]) add empty array to prevent callback func from running during every component re-render

const handleInput = (event) => {
console.log('is this working?', event.target.value);
setUserInput(event.target.value);
}

const handleSubmit = (event) => {
event.preventDefault();
setSearchTerm(userInput);
}

  return (
    <div className="App">
      <Header />

      <form onSubmit={ handleSubmit }>
        <label htmlFor="search">What City Would You Like to Search For:</label>
        <input type="text" id="search" onChange={ handleInput } value={userInput} />
        <button>Is It Sweater Weather?</button>
      </form>

      {weather.map((todaysWeather) => {
        return (
          
          <p> { todaysWeather.city_name} { todaysWeather.temp } </p>
        );
      })}
      <Footer />
    </div>
  )
}


export default App;


