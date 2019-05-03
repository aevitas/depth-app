import React from 'react';
import Search from './Components/Search'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Search Lmao="true" />
      </div>
    )
  }
}

export default App;
