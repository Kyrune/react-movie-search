import React, { useState } from 'react';

export default function SearchMovie() {

  // states - input query, movies
  const [query, setQuery] = useState('');

  const [ movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = "api key here";

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
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
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};
