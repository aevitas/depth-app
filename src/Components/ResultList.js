import React from "react";

class ResultList extends React.Component {
  render() {
    return (
      <>
        {this.props.Items.map(movie => (
          <ul>
            <li><a href="#" onClick={() => this.props.SelectMovie(movie.id)}>{movie.original_title}</a></li>
          </ul>
        ))}
      </>
    );
  }
}

export default ResultList;
