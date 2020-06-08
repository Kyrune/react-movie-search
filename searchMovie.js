import React from 'react';

export default function SearchMovie() {

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "Jurassic Park";

    const url = "api key here";

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
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
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};
