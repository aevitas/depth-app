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
        <div className="row">
        <div className="col-md-12">
          <h1>{movie.original_title}</h1>
        </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img alt="Movie Poster" src={posterUri} style={{ width: 350 }} />
          </div>
          <div className="col-md-6">
          <h2>Description</h2>
          <p>{movie.overview}</p>

          <h2>Details</h2>
          <p><b>Release Date</b>: {movie.release_date}</p>
            <p><b>Rating: </b> {movie.vote_average}</p>
            <p><b>Language: </b> {movie.original_language}</p>
          </div>
        </div>

<h1>Trailer</h1>

        <iframe
          title="Trailer"
          width="800"
          height="500"
          src={embedUri}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </>
    );
  }
}

export default MovieDetail;
