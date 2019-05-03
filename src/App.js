import React from 'react';
import Search from './Components/Search'
import ResultList from './Components/ResultList'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    }
  }

  onSearchCompleted = (results) => {
    this.setState({searchResults: results});
  }

  render() {
    return (
      <div className="wrapper">
      <h1>Depth</h1>
      <div>
        <Search SearchCompleted={(results) => this.onSearchCompleted(results)} />
        <ResultList Items={this.state.searchResults} />
      </div>
      </div>
    )
  }
}

export default App;
