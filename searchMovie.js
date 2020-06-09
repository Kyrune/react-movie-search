import React, { useState } from 'react';

export default function SearchMovie() {

  // states - input query, movies
  const [query, setQuery] = useState('');

  const searchMovies = async (e) => {
    e.preventDefault();

    const query = "Jurassic Park";

    const url = "api key here";

    try {
      const res = await fetch(url);
      const data = await res.json();
  
      console.log(data);
    } catch (err) {
      console.error(err);
    }

  };


  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Title
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={query}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};
