import { useState } from "react";

const Home = () => {
  const firstTry = "This is my first try with react.";
  const [name, setName] = useState("Pedro");
  const [age, setAge] = useState(25);

  const clickMeHandler = () => {
    setName("Luis");
    setAge(23);
  };

  const clickMeTooHandler = (name, evt) => {
    console.log("Hello " + name, evt.target);
  };

  return (
    <div className="home">
      <h2>HOMEPAGE</h2>
      <p>{firstTry}</p>
      <br />
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={clickMeHandler}>Click Me</button>
      <br />
      <br />
      <button
        onClick={(evt) => {
          clickMeTooHandler("Pedro", evt);
        }}
      >
        Click Me Too
      </button>
      <br />
    </div>
  );
};

export default Home;
