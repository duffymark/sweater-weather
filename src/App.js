import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Input from './Input.js'

function App() {

// store API and URL info

const apiKey = '11835b08a653433e998a492061031a38';
const baseUrl= 'https://api.weatherbit.io/v2.0/current';

// useStates

const [weather, setWeather] = useState([]);
const [userInput, setUserInput] = useState('');

// call API to BitWeather & throw errors if needed
const fetchWeatherData = async(city) => {
    axios({
      method: 'GET',
      url: baseUrl,
      dataResponse: 'json',
      params: {
        key: apiKey,
        country: 'Canada',
        city: city
      }
    }).then( (response) => {
      if(response.request.statusText === 'OK'){
        setWeather(response.data.data);
      } else {
        throw new Error(response.request.statusText)
      }
    }).catch((error) => { 
      if (error.message !== 'OK')
      alert('We are sorry your city was not found')
    })
}

// Handle events 
const handleInput = (event) => {
setUserInput(event.target.value);
}

const handleSubmit = (event) => {
event.preventDefault();
fetchWeatherData(userInput);
setUserInput('');
}

return (
  <div className="App">
    <Header />
      
    <Input 
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      userInput={userInput}
    />

{ //render the weather info dynamically to the screen
      weather.map((todaysWeather) => {
      return (
        <div className ='weatherResults' key={todaysWeather.city_name}>
          <div className='wrapper'>
            { //Check if its sweater weather (compare it to 5 degrees - higher yes, lower no)
            (todaysWeather.temp >= '5')
            ? <h2 className="sweaterWeather">{ todaysWeather.city_name}, It's Sweater Weather!</h2> 
            : <h2 className="notSweaterWeather">{ todaysWeather.city_name}, Get a Jacket!</h2> 
            }
            <p className='weatherDescription'> { todaysWeather.weather.description } </p>
            {// grab icon code and plug it into url to get weather icons
            }  
            <div className="tempIcon">
              <img src= {`https://www.weatherbit.io/static/img/icons/${todaysWeather.weather.icon}.png`} alt='Icon of the weather description for today.' /> 
              <p className="temp"> { todaysWeather.temp }°C </p>
            </div>
          <p className='feelsLike'>Feels Like: { todaysWeather.app_temp }</p>
          <p className='updatedTime'>Updated at: { todaysWeather.ob_time }</p>
        </div>
      </div> 
    );
})}

      <Footer />
    </div>
  )
}

export default App;
