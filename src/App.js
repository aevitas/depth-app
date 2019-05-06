import React from "react";
import Search from "./Components/Search";
import ResultList from "./Components/ResultList";
import MovieDetail from "./Components/MovieDetail";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      selectedMovie: null
    };
  }

  onSearchCompleted = results => {
    this.setState({ searchResults: results, selectedMovie: null });
  };

  onMovieSelected = async id => {
    if (!id) return;

    const detailUri = `https://depth-api.blackrain.io/movies/${id}`;
    const response = await axios.get(detailUri);

    this.setState({
      searchResults: [],
      selectedMovie: response.data.movie,
      currentTrailer: response.data.trailer
    });
  };

  render() {
    return (
      <div className="wrapper">
      <div className="container">
          <h1>Depth</h1>
          <Search
            SearchCompleted={results => this.onSearchCompleted(results)}
          />
          <MovieDetail
            Movie={this.state.selectedMovie}
            Trailer={this.state.currentTrailer}
          />
          <ResultList
            Items={this.state.searchResults}
            SelectMovie={id => this.onMovieSelected(id)}
          />
        </div>
      </div>
    );
  }
}

export default App;
