import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Header from './Header.js';
import Footer from './Footer.js'
import Input from './Input.js'

function App() {

  //useStates

const apiKey = '11835b08a653433e998a492061031a38';
const baseUrl= 'https://api.weatherbit.io/v2.0/current';

const [weather, setWeather] = useState([]);
const [userInput, setUserInput] = useState('');

// call API to BitWeather
const fetchWeatherData = async(city) => {
//useEffect(() => {
    axios({
      method: 'GET',
      url: baseUrl,
      dataResponse: 'json',
      params: {
        key: apiKey,
        // country_code: 'CA',
        country: 'Canada',
        city: city
      }
    }).then( (response) => {
      console.log(response)
      if(response.request.statusText === 'OK'){
        setWeather(response.data.data);
      } else {
        throw new Error(response.request.statusText)
      }
    }).catch((error) => { 
      if (error.message !== 'OK')
      alert('We are sorry your city was not found')
    })
  //}, [searchTerm]);
  //}, [searchTerm]) // }, [searchTerm]) add empty array to prevent callback func from running during every component re-render
}

const handleInput = (event) => {
console.log('is this working?', event.target.value);
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

        {
      //render the weather info dynamically to the screen
      weather.map((todaysWeather) => {
        return (
            <div className ='weatherResults' key={todaysWeather.city_name}>

              { //Check if message failed
              (todaysWeather.temp > '0')
              ? <p className="sweaterWeather"> 👍 { todaysWeather.city_name}, It's Sweater Weather!! 👍</p> 
              : <p className="notSweaterWeather"> 😭 { todaysWeather.city_name}, Get a Jacket 😭</p> 
              }

              <p> { todaysWeather.weather.description } </p>
          
            <div className="tempIcon">
            <img src= {`https://www.weatherbit.io/static/img/icons/${todaysWeather.weather.icon}.png`} alt='Icon of the weather description' /> 
            <p className="temp"> { todaysWeather.temp }°C </p>
          </div>
          <p>Feels Like: { todaysWeather.app_temp }</p>
          <p> Updated at: { todaysWeather.ob_time }</p>
          
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
