import React from 'react';
import Hello from './hello';
import './App.css';
import Wrapper from './Wrapper';


function App() {
  const name = 'react';
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello />
    </Wrapper>
  )
}

export default App;
