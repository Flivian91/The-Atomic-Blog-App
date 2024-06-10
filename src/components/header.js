import { usePostDispatch } from "../contexts/context";
import Results from "./header/Results";
import SearchPosts from "./header/SearchPosts";

function Header() {
  const dispatch = usePostDispatch();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={() => dispatch({ type: "clear-post" })}>
          Clear posts
        </button>
      </div>
    </header>
  );
}
export default Header;
