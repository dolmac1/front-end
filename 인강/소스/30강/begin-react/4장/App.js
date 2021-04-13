import React from 'react';
import Hello from './hello';
import './App.css';


function App() {
  const name = 'react';
  return (
    <>
      <Hello name="react" color="red"/>
      <Hello />
    </>
  )
}

export default App;
