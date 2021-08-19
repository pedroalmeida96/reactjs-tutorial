const Home = () => {
  const firstTry = "This is my first try with react.";

  const clickMeHandler = () => {
    console.log("Button clicked");
  };

  const clickMeTooHandler = (name, evt) => {
    console.log("Hello " + name, evt.target);
  };

  return (
    <div className="home">
      <h2>HOMEPAGE</h2>
      <p>{firstTry}</p>
      <button onClick={clickMeHandler}>Click Me</button>
      <button
        onClick={(evt) => {
          clickMeTooHandler("Pedro", evt);
        }}
      >
        Click Me Too
      </button>
    </div>
  );
};

export default Home;
