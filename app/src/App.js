import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { createStore, applyMiddleWare } from 'redux'
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

// import { soccerReducers as reducer } from './reducers/soccerReducers';


import SoccerForm from './components/SoccerForm'
import SoccerList from './components/SoccerList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         FUTBOL
        </p>
        <SoccerForm />
        <SoccerList />
        
      </header>
    </div>
  );
}

export default App;
