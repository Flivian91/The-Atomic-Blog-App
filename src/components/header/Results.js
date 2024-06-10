import React from "react";
import { usePost } from "../../contexts/context";

function Results() {
  const {searchedPosts} = usePost()
  return <p>🚀 {searchedPosts.length} atomic posts found</p>;
}
export default Results;
