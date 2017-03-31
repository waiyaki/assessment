import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Issues from './components/Issues';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Issues />
      </Provider>
    );
  }
}

export default App;
