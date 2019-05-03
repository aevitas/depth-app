import React from "react";

class MovieDetail extends React.Component {
  render() {
    const movie = this.props.Movie;

    if (movie == null) return <div />;

    return (
      <>
        <h1>{movie.original_title}</h1>
      </>
    );
  }
}

export default MovieDetail;
