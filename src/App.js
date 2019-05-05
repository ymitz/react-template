import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}
let fakeServerData = {
  user: {
    name: "YMITSUGI"
  }
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{ width: '40%', display: 'inline-block' }}>
        <h2 style={{ defaultStyle }}>Number and Text</h2>
      </div>
    )
  }
}
class Filter extends Component {
  render (){
   return (
    <div style={{ defaultStyle }}>
      <img />
      <input type='text' />
    </div>
  )   
  }
}

class PlayList extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <img />
        <h3>
          PlayListName </h3>
        <ul><li>Song 1</li><li>Song 2 </li><li> Song3</li></ul>
      </div>
    )
  }

}

class App extends Component {
  render() {
    let name = 'MTGME'
    let color = 'red'
    let headerStyle = { color: color, 'font-size': '50px' }
    return (
      <div className="App">
        <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>
          {fakeServerData.user.name}
        </h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <PlayList />
        <PlayList />
        <PlayList />
        <PlayList />
      </div>
    );
  }
}

export default App;
