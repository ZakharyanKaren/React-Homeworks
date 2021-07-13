import "./App.css";
import svg1 from "./Images/01.svg";
import svg2 from "./Images/05.svg";
import svg3 from "./Images/09.svg";
import svg4 from "./Images/17.svg";

function App() {
  const weatherInfo = [
    {
      weekDay: "Monday",
      imgURL: svg1,
      temp: "36C",
    },
    {
      weekDay: "Tuesday",
      imgURL: svg2,
      temp: "32C",
    },
    {
      weekDay: "Wednesday",
      imgURL: svg3,
      temp: "35C",
    },
    {
      weekDay: "Thursday",
      imgURL: svg4,
      temp: "45C",
    },
    {
      weekDay: "Friday",
      imgURL: svg1,
      temp: "36C",
    },
    {
      weekDay: "Saturday",
      imgURL: svg2,
      temp: "37C",
    },
    {
      weekDay: "Sunday",
      imgURL: svg3,
      temp: "39C",
    },
  ];

  function WeekDays(props) {
    return (
      <div className="wrapper">
        <p>{props.name}</p>
        <img className="images" src={props.url} alt="weather pic" />
        <p>{props.temp}</p>
      </div>
    );
  }

  return (
    <div className="App">
      {weatherInfo.map((el) => {
        return <WeekDays name={el.weekDay} url={el.imgURL} temp={el.temp} />;
      })}
    </div>
  );
}

export default App;
