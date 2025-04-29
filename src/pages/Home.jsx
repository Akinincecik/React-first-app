import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Blog yazıları için sahte veri
  const [blogs] = useState([
    { id: 1, title: "React ile Blog Yapımı", content: "React ile nasıl blog yapılır?" },
    { id: 2, title: "Tailwind CSS Nedir?", content: "Tailwind CSS nasıl kullanılır?" },
  ]);

  return (
    <div>
      <h1>Blog Sayfası</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 50)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
