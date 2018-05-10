import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


//Components
import Posts from './components/posts';
import PostForm from './components/postform';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <PostForm />
            <hr />
            <Posts />
          </div>
        </Provider>
    );
  }
}

export default App;
