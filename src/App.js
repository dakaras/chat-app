import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from './DashBoard'
import Store from './Store'

function App() {
  return (
    <div className="App">
      <Store>
        <DashBoard />
      </Store>
    </div>
  );
}

export default App;
