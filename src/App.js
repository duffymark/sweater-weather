import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'


function App() {

  //useStates

const apiKey = 'b708779c14f64973950cdad688a8ee24';
const baseUrl= 'https://api.weatherbit.io/v2.0/current';

const [weather, setWeather] = useState([]);
const [userInput, setUserInput] = useState('');
const [searchTerm, setSearchTerm] = useState('');


// call API to BitWeather


const handleClick = async() => {
//useEffect(() => {
    axios({
      method: 'GET',
      url: baseUrl,
      dataResponse: 'json',
      params: {
        key: apiKey,
        // country_code: 'CA',
        country: 'Canada',
        city: userInput
      }
    }).then( (response) => {
      console.log(response.data.data);
      //console.log(response.data.data.city_id)
      setWeather(response.data.data); //update "weather" state with response from API
      //console.log(setWeather)
    });
  //}, [searchTerm]) // }, [searchTerm]) add empty array to prevent callback func from running during every component re-render
}

const handleInput = (event) => {
console.log('is this working?', event.target.value);
setUserInput(event.target.value);
}

const handleSubmit = (event) => {
event.preventDefault();
setSearchTerm(userInput);
setUserInput('');
}

  return (
    <div className="App">

      <Header />

      <form onSubmit={ handleSubmit }>
        <label htmlFor="search">What City Would You Like to Search For:</label>
        <input type="text" id="search" onChange={ handleInput } value={userInput} />
        <button onClick = {handleClick} >Is It Sweater Weather?</button>
      </form>

      {weather.map((todaysWeather) => {
        return (
        <div key={todaysWeather.city_name}>
          <p> { todaysWeather.city_name}  </p>
          <p> { todaysWeather.temp } </p>
          <p> { todaysWeather.weather.description } </p>
          
      
      <img src= {`https://www.weatherbit.io/static/img/icons/${todaysWeather.weather.icon}.png`} alt='Icon of the weather description' />
        </div> 
          // add a ternary operator if weather is sweater weather or not
          // (https://github.com/HackerYou/bootcamp-notes/blob/main/react-and-firebase/intro-to-react.md)
        );
      })}

      <Footer />
    </div>
  )
}


export default App;

// key: city_id


