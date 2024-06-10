import { createContext, useContext, useReducer } from "react";
const PostDispatchContext = createContext();
const PostContext = createContext();

export default function PostProvider({ children }) {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostContext.Provider>
  );
}
function postReducer(state, action) {
  switch (action.type) {
    case "upload-post": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "add-post": {
      const newPost = [action.payload, ...state.posts]; // Fixed state.posts typo
      return {
        ...state,
        posts: newPost,
      };
    }
    case "clear-post": {
      return {
        ...state,
        posts: [],
      };
    }
    case "dark-mode": {
      return {
        ...state,
        isFakeDark: !state.isFakeDark,
      };
    }
    case "update-search-post": {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case "search-post": {
      const userSearchPost =
        state.searchQuery.length > 0
          ? state.posts.filter((post) =>
              `${post.title} ${post.body}`
                .toLowerCase()
                .includes(state.searchQuery.toLowerCase())
            )
          : state.posts;
      return {
        ...state,
        searchedPosts: userSearchPost,
      };
    }
    default:
      return state; // Return current state if action type is not matched
  }
}

const initialState = {
  posts: [],
  searchQuery: "",
  isFakeDark: false,
  searchedPosts: [],
};

export function usePost() {
  return useContext(PostContext);
}

export function usePostDispatch() {
  return useContext(PostDispatchContext);
}
