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
      //setWeather(response.data.data);
      console.log(response)
      //console.log(response.data.data);
      //console.log(response.data.data.city_id)
      if(response.request.statusText === 'OK'){
        setWeather(response.data.data);
      } else {
        throw new Error(response.request.statusText)
      }
  
      
      //update "weather" state with response from API
      //console.log(setWeather)

    //}).catch((error) => {
      //console.log(error)
    
    }).catch((error) => { 
      if (error.message !== 'OK')
      alert('We are sorry your city was not found')
    }) 
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
        <label htmlFor="search">Hey all you Juno Alum! Is it Sweater Weather Today? </label>
        <input className="cityInput" type="text" id="search" placeholder="Search For Your Canadian City" onChange={ handleInput } value={userInput} required />
        <button className="submitButton" onClick = {handleClick} >Is It Sweater Weather?</button>
      </form>


{/* {
weather.value === todaysWeather.city_name ?
(<p>Sorry no results</p>
) : (<p>Here's the weather!</p>
)
} */}




    {
      //render the weather info dynamically to the screen
      weather.map((todaysWeather) => {
        return (
          
        <div key={todaysWeather.city_name}>

          
          

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
          <p> Weather Details Last Gathered at: { todaysWeather.ob_time }</p>
          
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


