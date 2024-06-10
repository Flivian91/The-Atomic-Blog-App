import React from "react";
import { usePost } from "../../contexts/context";

function List() {
  const { searchedPosts } = usePost();
  return (
    <>
      {searchedPosts.length === 0 ? (
        <p>No item found</p>
      ) : (
        <ul>
          {searchedPosts.map((post, i) => (
            <li key={i}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
