import { useState } from "react";


function Weather(){
  
  const URL = "http:/api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q=Rennes"
  const [temperature, setTemperature] = useState(0);


  // function loadData(){
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(data => setTemperature(data));
  // }

  fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    setTemperature(data);
  });

  if(temperature) {
    return (
      <div> 
        Il fait {temperature.current.temp_c}°c à Rennes
      </div>
    )
  } else {
    <div> 
      Chargement...
    </div>
  }
}

export default Weather;