import React from 'react';
import Search from './Components/Search'
import ResultList from './Components/ResultList'
import MovieDetail from './Components/MovieDetail'
import axios from "axios";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      selectedMovie: null
    }
  }

  onSearchCompleted = (results) => {
    this.setState({searchResults: results, selectedMovie: null});
  }

  onMovieSelected = async (id) => {

    if (!id)
      return;

    const detailUri = `https://depth-api.blackrain.io/movies/${id}`;
    const response = await axios.get(detailUri);

    this.setState({searchResults: [], selectedMovie: response.data});
  }

  render() {
    return (
      <div className="wrapper">
      <h1>Depth</h1>
      <div>
        <Search SearchCompleted={(results) => this.onSearchCompleted(results)} />
        <MovieDetail Movie={this.state.selectedMovie} />
        <ResultList Items={this.state.searchResults} SelectMovie={(id) => this.onMovieSelected(id)} />
      </div>
      </div>
    )
  }
}

export default App;
