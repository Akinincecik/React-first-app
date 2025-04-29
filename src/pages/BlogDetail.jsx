import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  
  // Sahte blog verisi
  const blog = {
    1: { title: "React ile Blog Yapımı", content: "React ile nasıl blog yapılır?" },
    2: { title: "Tailwind CSS Nedir?", content: "Tailwind CSS nasıl kullanılır?" },
  }[id];

  if (!blog) return <h2>Blog bulunamadı!</h2>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
