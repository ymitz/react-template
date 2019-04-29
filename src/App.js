import React from 'react';
import './App.css';

let defaultStyle ={
  color : '#fff'
}

function Aggregate() {
  return (
    <div style={{width:'40%',display:'inline-block'}}> 
      <h2 style={{defaultStyle}}>Number and Text</h2>
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
    <div style = {{...defaultStyle,width:'40%',display:'inline-block'}}>
    <img/>
    <h3>
      PlayListName
    </h3>
    <ul><li>Song 1</li><li>Song 2 </li><li> Song3</li></ul>
    </div>
  )
}

function App() {
  let name = 'MTGME'
  let color = 'red'
  let headerStyle ={color : color,'font-size' : '50px'}

  return (
    <div className="App">
      <h1 style={{...defaultStyle,'font-size' : '54px'}}> Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <PlayList/>
      <PlayList/>
      <PlayList/>
      <PlayList/>
    </div>
  );
}

export default App;
