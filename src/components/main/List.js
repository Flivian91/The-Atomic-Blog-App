import React from "react";
import { usePost } from "../../contexts/context";

function List() {
  const { posts } = usePost();
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default List;
