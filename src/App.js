import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Greek} from './Greek.js';

export default function App() {
  
  let [count, setCount] = useState(1);

  let [colour, setColour] = useState(true);

  return (
    <div className={`box ${colour? 'box2' : ''}`}>
      
      <h1 morque="left">Assiament #4 by Asad</h1>
      <h2>Colour {colour? 'Yellow' : 'blue'}</h2>
      <Greek counter={count} />
      
      <br/>

      <button onClick={ ()=> setCount(count+1) } > Increment Counter</button>
      <button onClick={ ()=> setCount(count-1) } > Decrement Counter</button>
      <button onClick={ ()=> setColour(!colour) } > Update Colour</button>    
      
    </div>
  );
}
