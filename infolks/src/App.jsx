import React from "react"
// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";

function App({ someProps = "" }) {
  console.log(someProps); // TODO: import.meta.env.SSR [check mode]

  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

const Home = () => {
  return <h1>I am Home</h1>;
};

const About = () => {
  return <h1>I am About</h1>;
};
