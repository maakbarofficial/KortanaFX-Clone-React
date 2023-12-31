import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Reasons from "./components/Reasons";
import Meet from "./components/Meet";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Reasons />
      <Meet />
    </>
  );
}

export default App;
