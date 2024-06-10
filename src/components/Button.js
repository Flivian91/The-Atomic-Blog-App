import React from "react";
import { usePost, usePostDispatch } from "../contexts/context";

function Button() {
  const dispatch = usePostDispatch();
  const { isFakeDark } = usePost();
  return (
    <button
      onClick={() => dispatch({ type: "dark-mode" })}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
}

export default Button;
