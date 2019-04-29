import React from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff'
let defaultStyle ={
  color : defaultTextColor
}

function Aggregate() {
  return (
    <div style={{width:'40%',display:'inline-block'}}> 
      <h2 style={{defaultTextColor}}>Number and Text</h2>
    </div>
  )
}
function Filter(){
  return(
    <div style={{defaultStyle}}>
      <img/>
      <input type = 'text'/>
    </div>
  )
}

function PlayList (){
  return (
    <div style = {{...defaultStyle,width:'25%'}}>
    <img/>
    <h3>
      PlayListName
    </h3>
    <ul><li>Song 1 </li> <li>Song 2 </li><li> Song3</li></ul>
    </div>
  )
}

function App() {
  let name = 'MTGME'
  let color = 'red'
  let headerStyle ={color : color,'font-size' : '50px'}

  return (
    <div className="App">
      <h1> Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <PlayList/>
    </div>
  );
}

export default App;
