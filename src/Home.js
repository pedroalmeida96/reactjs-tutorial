import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const firstTry = "This is my first try with react.";
  const [name, setName] = useState("Pedro");
  const [age, setAge] = useState(25);
  const [blogs, setBlog] = useState(null);

  useEffect(
    () => {
      /**
       * useEffect is used when there is the need to do something everytime the DOM is rendered or re-rendered.
       * If we make useState re-render the dome  useEffect is going to do something to.
       * Maybe check auth or something.
       */
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setBlog(data);
        });
      console.log("Use effect called");
    },
    [
      /**
       * Aqui adicionamos o name/age/blogs etc que queremos que seja re-renderizado sempre que ha uma alteraçao. Se quisermos correr a funcao useEffect apenas quando o nome é alterado
       * mas nao quando os blogs sao alterados metemos [name]
       */
    ]
  );

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
        {blogs && (
          <BlogList
            blogs={blogs}
            title="All blogs"
            handleDelete={handleDelete}
          />
        )}

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
