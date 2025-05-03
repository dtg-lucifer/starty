import React from "react";
import SearchForm from "./search-form";

const HeroSection = ({ query }: { query?: string }) => {
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch your startup, <br /> Connect With Entrepreneurs
      </h1>
      <p className="!max-w-3xl sub-heading">
        Submit ideas, Vote on pitches, and get Noticed in virtual competetions
      </p>
      <SearchForm query={query} />
    </section>
  );
};

export default HeroSection;
