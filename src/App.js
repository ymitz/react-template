import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}
let fakeServerData = {
  user: {
    name: "YMITSUGI",
    playlists: [
      {
        name: 'My favarite',
        songs: [{
          name: 'A team',
          duration: 10000,
        },
        {
          name: 'kimi to iu hana',
          duration: 20000,
        }]
      },
      {
        name: 'Weekly Discover',
        songs: [{
          name: 'Thinking it loud',
          duration: 30000,
        },
        {
          name: 'tentaikansoku',
          duration: 40000,
        }]
      },
      {
        name: 'My Best Songs',
        songs: [{
          name: 'umi sono ai',
          duration: 50000
        },
        {
          name: 'ten',
          duration: 60000
        }]
      },
      {
        name: 'Rock!',
        songs: [{
          name: 'kanzenkankaku dreamer!',
          duration: 70000,
        },
        {
          name: 'rokkinpo',
          duration: 80000
        }]
      },
    ]
  }
}

class PlayListCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>{
          this.props.playlists &&
          this.props.playlists.length
        } Text</h2>
      </div>
    )
  }
}
class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((allSong, EachSongs) => {
      return allSong.concat(EachSongs.songs)
    }, [])
    let totalDuration = allSongs.reduce((sumTime, eachTime) => {
      return sumTime + eachTime.duration
    }, 0)
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>{
          totalDuration
        } Hour</h2>
      </div>
    )
  }
}
class Filter extends Component {
  render() {
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
    let playlist = this.props.playlist
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <img />
        <h3>
          {playlist.name} </h3>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    )
  }

}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>
              {this.state.serverData.user.name} 's PlayList
        </h1>
            <PlayListCounter playlists=
              {this.state.serverData.user.playlists} />
            <HoursCounter playlists=
              {this.state.serverData.user.playlists} />
            <Filter />
            {
              this.state.serverData.user.playlists.map(playlist => {
                return <PlayList playlist={playlist} />
              })
            }
          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
