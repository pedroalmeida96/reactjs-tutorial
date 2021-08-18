import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  //Aqui pode-se colocar o que quisermos de js.
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
