import React from 'react';
import './App.css';
import Listshow from './components/Listshow';
import Addtask from './components/Addtask';

function App() {
  return (
    <div>
      <Addtask />
      <Listshow />
    </div>
  );
}

export default App;
