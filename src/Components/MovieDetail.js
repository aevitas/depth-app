import React from "react";

class MovieDetail extends React.Component {
  render() {
    const movie = this.props.Movie;

    if (movie == null) return <div />;

    const url = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;

    return (
      <>
        <h1>{movie.original_title}</h1>
        <img src={url} />
      </>
    );
  }
}

export default MovieDetail;
