import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  //consts and keys

const apiKey = 'b708779c14f64973950cdad688a8ee24';
const [userInput, setUserInput] = useState('');
const [searchTerm, setSearchTerm] = useState('');
const [weather, setWeather] = useState('');

// call API to BitWeather

 useEffect(() => {
    axios({
      url: 'http://api.weatherbit.io/v2.0/current',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: apiKey,
        country: 'Canada',
        city: searchTerm
      }
    }).then((response) => {
      console.log(response.data.data[0].temp);
      setWeather(response.data.data[0].temp); //update "weather" state with response from API
      console.log(setWeather)
    });
  }, [searchTerm]) // add empty array to prevent callback func from running during every component re-render



  return (
    <div className="App">
      <h1>Hey All You Juno Alumni! Is it Sweater Weather Today?</h1>

    </div>
  );
}

export default App;


