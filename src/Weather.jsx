
import React from "react";
import { useState } from "react";
import axios from "axios";


function Weather() {
  
  const [location, setLocation]= useState('');
  const [isloading, setIsloading]= useState(false);
  const [error, setError]= useState(null);
  const [city, setCity]= useState('');
  const [temperature, setTemperature]= useState('');
  const [humidity, setHumidity]= useState('');
  const [weather, setWeather]= useState('');

  //const api_key ='c7736a0b6ed81b6061d42428ee431621'
  
  
      const SearchWeather = ()=>{
        setIsloading(true);
        getWeather()
        setError(null);
      }
    
      const getWeather =()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c7736a0b6ed81b6061d42428ee431621&units=metric`

        axios.get(url)
        .then((response)=> {
          
          console.log(response.data)
          setCity(response.data.name)
          setTemperature(response.data.main.temp)
          setHumidity(response.data.main.humidity)
          setWeather(response.data.weather[0].description)
          
          setIsloading(false);

        })
        .catch((error)=>{
          setError('An error occured. Please try again.');
          setIsloading(false);
          console.error(error);
        })
      }

  


  return (
    <div className="app">
      <div className="search">
         <input
         onChange={(e) => setLocation(e.target.value)}
         value={location}
         placeholder="Enter a city"
          type="text"  />

          <button onClick={SearchWeather} className="btn">Search</button>
      </div>
      
           
       {isloading ? (
        <div>Loading...</div>
       ): error ? (
        <div>{error}</div>
       ) : (


      <div className="container">
         <div className="top">
         <div className="location">
           <p>{city}</p>
         </div>
         <div className="temp">
            <h1>{temperature} °C</h1>
            
         </div>
         <div className="description">
          <p>{humidity} %</p>
          <p>humidity</p>
         </div>
         <div className="wth">
          <p>{weather}</p>
        
         </div>
         </div>
        
      </div>
     )} 
     
    </div>
  );
}

export default Weather;