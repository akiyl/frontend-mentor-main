// import axios from axios;
import { useState, useEffect } from "react";
import dice from "../images/icon-dice.svg";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((Response) => Response.json())
      .then((adv) => setData(adv.slip))
      .catch(console.error());
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <>
      <div className="main-container">
        <section className="main-section.bg-hsl(218, 23%, 16%)"></section>
        <div className="title-container">
          <h1 className="advice-title"> Advice # {data.id} </h1>
        </div>
        <div className="advice-container">
          <p className="main-advice">“{data.advice}”</p>
          <div className="advice-button" onClick={() => fetchAdvice()}>
            <img src={dice} alt="dice" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
