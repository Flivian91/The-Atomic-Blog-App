import { useEffect } from "react";
import { faker } from "@faker-js/faker";
import Header from "./components/header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Button from "./components/Button";
import  { usePost, usePostDispatch } from "./contexts/context";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  const dispatch = usePostDispatch();
  const { isFakeDark } = usePost();
  useEffect(
    function () {
      const loadedPost = Array.from({ length: 30 }, () => createRandomPost());
      dispatch({ type: "upload-post", payload: loadedPost });
    },
    [dispatch]
  );

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );
  return (
    <section>
      <Button />
      <Header />
      <Main />
      <Archive createRandomPost={createRandomPost} />
      <Footer />
    </section>
  );
}

export default App;
