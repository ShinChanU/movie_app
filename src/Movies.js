import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';

function Movies({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => (
            <li key={idx} className="genre">{genre}</li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movies.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movies;