import React from "react";

class MovieDetail extends React.Component {
  render() {
    const movie = this.props.Movie;
    const trailer = this.props.Trailer;

    if (movie == null) return <div />;

    const posterUri = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
    const embedUri = `https://www.youtube.com/embed/${trailer.id}`;

    return (
      <>
        <h1>{movie.original_title}</h1>
        <img alt="Movie Poster" src={posterUri} style={{width:300}} />
        <p>{movie.overview}</p>

        <iframe title="Trailer" width="560" height="315" src={embedUri} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </>
    );
  }
}

export default MovieDetail;
