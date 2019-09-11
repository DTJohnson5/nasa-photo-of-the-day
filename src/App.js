import React, {useState, useEffect} from "react";
import Menu from './elements/Main/Main Menu';
import Photo from './elements/img/Photo';
import Current from './elements/Date/Currently';
import axios from 'axios';
import "./App.css";

function App() {
  const [photo, setPhoto] = useState();
  const [now, setNow] = useState();
  const [headline, setHeadline] = useState();
  const [report, setReport] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
    .then((response) => {
      setPhoto(response.data.hdurl);
      setHeadline(response.data.title);
      setReport(response.data.explanation);
      return response;
    })
    .then((response) => {
      setNow(response.data.date);
      console.log(response.data)
    })
  }, [])

  return (
    <div>
      <Menu />
    <div className="App">
      <Current date={now} />
      <Photo src={photo} headline={headline} explanation={report}/>
    </div>
    </div>
  );
}

export default App;
