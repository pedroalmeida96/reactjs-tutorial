import { useState, useEffect } from "react";
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
      author: "Pedro",
    },
    {
      id: 2,
      title: "Vinho",
      body: "Vinho é sempre bom, mesmo que seja de pacote",
      author: "Zezé",
    },
  ]);

  useEffect(() => {
    /**
     * useEffect is used when there is the need to do something everytime the DOM is rendered or re-rendered.
     * If we make useState re-render the dome  useEffect is going to do something to. 
     * Maybe check auth or something.
     */
    console.log("Use effect called");
  });

  const handleDelete = (id) => {
    /**
     * Creating a new array of blogs/publishes. What is doing is basically filtering the blog and looking for
     * blogs with the id != from the selected and putting in the new array. In the end renders the new array.
     * In the end, all its doing is looping the first array and putting in the new array the blogs with id that
     * doesnt match de selected.
     */
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlog);
  };

  const clickMeHandler = () => {
    if (name === "Pedro") {
      setName("Luis");
      setAge(23);
    } else {
      setName("Pedro");
      setAge(25);
    }
  };

  const clickMeTooHandler = (name, evt) => {
    console.log("Hello " + name, evt.target);
  };

  return (
    <div className="home">
      <h2>HOMEPAGE</h2>

      <div className="blog">
        <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />

        {/**
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Zezé")}
          title="Posts do Pedro"
        />
       */}
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
