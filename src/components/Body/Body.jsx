import { Favorite, MoreHoriz, PlayCircleFilled } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import Header from '../Header/Header'
import './body.css'
import SongRow from './SongRow'

const Body = ({spotify}) => {
    const [{discover_weekly},dispatch] = useDataLayerValue()

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };



  return (
    <div className='body_main'>
        <Header spotify={spotify}/>
        <div className="body_info">
            <img 
            src={discover_weekly?.images[0].url}
            alt="Weekly Image"
            />
            <div className="body_infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
        <div className="body_songs">
            <div className="body_icons">
                <PlayCircleFilled 
                className='body_shuffle'
                onClick={playPlaylist}
                />
                <Favorite fontSize='large'/>
                <MoreHoriz />
            </div>

            {discover_weekly?.tracks.items.map(item=>(
                <SongRow 
                track={item.track}
                playSong={playSong}
                />
            ))}    
        </div>
    </div>
  )
}

export default Body