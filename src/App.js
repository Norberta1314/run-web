import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store'
import './reset.css'
import './index.css';
import Begin from './pages/begin'
import Start from './pages/start'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <div>
            <Route path='/begin' exact component={Begin}/>
            <Route path='/start' exact component={Start}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
