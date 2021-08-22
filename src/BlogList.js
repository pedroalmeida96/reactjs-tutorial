const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <br />
          <h2>{blog.title}</h2>
          <p>The author is {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
