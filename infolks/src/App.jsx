import React from "react"
// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

function App({ someProps = "" }) {
  console.log(someProps); // TODO: import.meta.env.SSR [check mode]

  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;


const About = () => {
  return <h1>I am About</h1>;
};
