import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchCompleted = props.SearchCompleted;

    this.state = {
      query: "Under Siege"
    };
  }

  onQueryChanged = e => {
    this.setState({ query: e.target.value });
  };

  onSubmit = async e => {
    if (!this.state.query) return;

    const q = this.state.query;

    const searchUri = "https://depth-api.blackrain.io/movies/search?query=";
    const response = await axios.get(`${searchUri}${q}`);

    this.onSearchCompleted(response.data);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.onQueryChanged(e)}
          onKeyPress= {e => {
            if(e.key == 'Enter'){
              this.onSubmit(e);
            }
          }}
          placeholder="Under Siege"
        />
        <button onClick={e => this.onSubmit(e)}>Search</button>
      </div>
    );
  }
}

export default Search;
