import React, { useState } from "react";
import { usePostDispatch } from "../../contexts/context";

function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = usePostDispatch();
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    const newPost = { title, body };
    dispatch({ type: "add-post", payload: newPost });

    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

export default FormAddPost;
