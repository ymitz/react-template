import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';

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
        <input type='text' onKeyUp={e => this.props.onTextChange(e.target.value)} />
      </div>
    )
  }
}

class PlayList extends Component {
  render() {
    let playlist = this.props.playlist
    console.log(playlist)
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <img src={playlist.imageUrl} style={{width : '60px'}}/>
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
    this.state = {
      serverData: {},
      filterString: ''
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search)
    let accessToken = parsed.access_token

    if(!accessToken) return

    fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => this.setState({
          user: {
            name: data.display_name
          }
      }))


    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: { 'Authorization': 'Bearer ' + accessToken }
    }).then(response => response.json())
      .then(data => 
        this.setState({
          playlists: data.items.map(item => ({
            name: item.name,
            imageUrl:item.images[0].url,
            songs: []
          }))
      })
    )

    //    setTimeout(() => {
    //      this.setState({ serverData: fakeServerData })
    //    }, 1000)
    //    setTimeout(() => {
    //      this.setState({ filterString:'' })
    //    }, 2000)
  }
  render() {

    let playlistToRender =
      this.state.user &&
        this.state.playlists
        ? this.state.playlists.filter(playlist =>
          playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase())
        )
        : []

    return (
      <div className="App">
        {this.state.user ?
          <div>
            <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>
              {this.state.user.name} 's PlayList
            </h1>
            {this.state.playlists &&
              <div>
                <PlayListCounter playlists=
                  {playlistToRender} />
                <HoursCounter playlists= 
                {playlistToRender} />
                <Filter onTextChange={text => {
                  //console.log(text)
                  return this.setState({ filterString: text })
                }} />
                {
                  playlistToRender
                    .map(playlist => {
                      return <PlayList playlist={playlist} />
                    })
                }
              </div>
            }
          </div> : <button onClick={() => {
            window.location = window.location.href.includes('localhost') ?
            'http://localhost:8888/login'
            :'https://tfb-backend.herokuapp.com/login'
          }}
            style={{ padding: '20px', 'font-size': '50px', 'margin-top': '20px' }}>
            Sign in with Spotify
          </button>
        }
      </div>
    );
  }
}

export default App;
