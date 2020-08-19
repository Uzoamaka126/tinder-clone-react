import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { Header } from './Header';
import { TinderCards } from './TinderCards';
import { SwipeButtons } from './SwipeButtons';
import { Chats } from './Chats';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            {/* Header */}
            <Header backButton="/" />
            {/* Chats screen */}
            <Chats />
            {/* Individual chat screens */}
          </Route>
          <Route path="/">
            <Header backButton="/" />
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
