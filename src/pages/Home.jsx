import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Reasons from "../components/Reasons";
import Meet from "../components/Meet";
import Challenges from "../components/Challenges";
import Platforms from "../components/Platforms";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <div>
      <section className="hero">
        <Hero />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="reasons">
        <Reasons />
      </section>
      <section id="meet">
        <Meet />
      </section>
      <section id="challenges">
        <Challenges />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="platforms">
        <Platforms />
      </section>
    </div>
  );
}

export default Home;
