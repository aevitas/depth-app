import React from "react";

class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.Items.length > 0 ? (
          <table>
            <tr>
              <th>Name</th>
              <th>Released</th>
              <th>Rating</th>
            </tr>
            {this.props.Items.map(movie => (
              <tr>
                <td>{movie.original_title}</td>
                <td>{movie.release_date}</td>
                <td>{movie.vote_average}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ResultList;
