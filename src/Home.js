import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const firstTry = "This is my first try with react.";
  const [name, setName] = useState("Pedro");
  const [age, setAge] = useState(25);
  const [blogs, setBlog] = useState([
    {
      id: 0,
      title: "React",
      body: "React é uma tecnologia inovadora e até é engraçada",
      author: "Pedro",
    },
    {
      id: 1,
      title: "nodeJS",
      body: "NodeJS tambem é fixe mas nao é JAVA.",
      author: "Luis",
    },
    {
      id: 2,
      title: "Vinho",
      body: "Vinho é sempre bom, mesmo que seja de pacote",
      author: "Zezé",
    },
  ]);

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

      <div className="blog">
        <BlogList blogs={blogs} title="All blogs" />
      </div>
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
