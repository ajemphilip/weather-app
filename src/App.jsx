import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ResultOutput from './components/ResultOutput';
import Form from './components/Form';

function App() {

  const API_KEY = "d79c15f3756b9d637cf5af5961d609c7"
  const [location, setLocation] = useState("Toronto,Ca")
  const [formOutput, setFormOutput] = useState("")
  const [weatherData, setWeatherData] = useState()
  const [showUI, setShowUI] = useState(false);


  const fetchAPI = () => {
    // setTimeout to reduce the error rate since API calls might not get through because of latency
    setTimeout(() => {
      // make an api call
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`)
        // collect the response
        .then((response) => {
          setWeatherData(response)
          setShowUI(true)
          console.log(response);
        })
        // catch errors
        .catch((error) => {
          console.log(error);
        })

    }, 100)
  }
// see when the application mounts
  useEffect(() => {
    fetchAPI()
    //render DOM everytime location changes eg button in clicked
  }, [location])
// handle change from the form
  const handleChange = (e) => {
    setFormOutput(e.target.value)
  }
//handle click in the form
  const handleClick = () => {
    setLocation(formOutput)
    fetchAPI()
  }
// return the unterface in form of JSX
  return (
    <>
    {/*  */}
      {showUI ? <> <Form onClick={handleClick} onChange={handleChange}></Form>
        <ResultOutput location={weatherData.data.name}
          temperature={weatherData.data.main.temp}
          clouds={weatherData.data.clouds.all}
          wind={weatherData.data.wind.speed}
          humidity={weatherData.data.main.humidity}
          description={weatherData.data.weather[0].description} >
        </ResultOutput></>
        : <h1>Loading...</h1>}
    </>
  )
}

export default App
