import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/player/Player';
import { useDataLayerValue } from './components/DataLayer';

const spotify= new SpotifyWebApi()

function App() {
  
  // const [token,setToken]=useState(null)
  const [{user,token},dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenFromUrl();
    window.location.hash=""
    const _token=hash.access_token
    console.log(_token)
    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      // setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log("personGETME",user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: 'SET_PLAYLIST',
          playLists: playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcGQjFISNbUoH').then((response)=> (
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      ))

    }

  },[])

  console.log('GET FROM DATA ',user)
  console.log('GET TOKEN FRM DATA',token)

  return (
    <div className="app">
      {token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )}
      

    </div>
  );
}

export default App;
