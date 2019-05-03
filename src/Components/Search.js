import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "Under Siege"
    };
  }

  onQueryChanged = e => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  };

  onSubmit = async e => {
    if (!this.state.query) return;

    const q = this.state.query;

    const searchUri = "https://depth-api.blackrain.io/movies/search?query=";
    const response = await axios.get(`${searchUri}${q}`);

    console.log(response.data);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.onQueryChanged(e)}
          placeholder="Under Siege"
        />
        <button onClick={e => this.onSubmit(e)}>Search</button>
      </div>
    );
  }
}

export default Search;
