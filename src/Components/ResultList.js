import React from "react";

class ResultList extends React.Component {
  render() {
    return (
      <>
        {this.props.Items.map(movie => (
          <ul>
            <li><button onClick={() => this.props.SelectMovie(movie.id)} style={{background:'none',color:'inherit',border:'none',padding:0,font:'inherit','text-decoration':'underline',cursor:'pointer'}}>{movie.original_title}</button></li>
          </ul>
        ))}
      </>
    );
  }
}

export default ResultList;
