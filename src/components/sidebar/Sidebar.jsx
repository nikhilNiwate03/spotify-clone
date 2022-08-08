import React from 'react'
import './sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';


const Sidebar = () => {
    const [{playLists},dispatch]=useDataLayerValue();
    console.log(playLists)
  return (
    <div className='sidebar'>
        <img
         className='sidebar_logo'
         src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  
         alt="logo"
         />
        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/> 
        <br />
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr />
        {playLists?.items?.map(playlist => (
            <SidebarOption key={playlist.id} title={playlist.name} />
        ))}
    </div>
  )
}

export default Sidebar