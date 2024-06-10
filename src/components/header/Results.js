import React from "react";
import { usePost } from "../../contexts/context";

function Results() {
  const {posts} = usePost()
  return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;
