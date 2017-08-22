import React, { Component } from 'react';
import Header from './components/Header';
import ContentCuaca from './components/ContentCuaca';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ContentCuaca />
      </div>
    );
  }
}

export default App;
