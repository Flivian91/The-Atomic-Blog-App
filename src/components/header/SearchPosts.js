import React from "react";
import { usePost, usePostDispatch } from "../../contexts/context";

export default function SearchPosts() {
  const { searchQuery } = usePost();
  const dispatch = usePostDispatch();
  return (
    <input
      value={searchQuery}
      onChange={(e) =>
        dispatch({ type: "update-search-post", payload: e.target.value })
      }
      placeholder="Search posts..."
    />
  );
}
