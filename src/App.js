import { useEffect, useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const [person, setPerson] = useState({
    fullNane: "ines Lassoued",
    bio: "test",
    imgSrc:
      "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    profession: "testPro",
  });
  const [shows, setShows] = useState(true);
  const [timeSinceMounted, setTimeSinceMounted] = useState(0)

  const handelShows = () => {
    setShows(!shows);
  };

 useEffect(() => {
   const intervalId = setInterval(()=>{
    setTimeSinceMounted(prevTime => prevTime +1)
   },1000)

return()=>clearInterval(intervalId)

 }, [])
 
  return (
    <div className="App">
      <h1>Temps depuis le mounting : {timeSinceMounted}</h1>
      <button onClick={handelShows}>
        {shows ? "Masquer les information" : "Affichier les information"}
      </button>
      {shows && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person.imgSrc} height={150} />
          <Card.Body>
            <Card.Title>{person.fullNane}</Card.Title>
            <Card.Text>{person.bio}</Card.Text>
            <Card.Text>{person.profession}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default App;
