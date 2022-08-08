import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import './player.css'

const Player = ({spotify}) => {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar />

            <Body spotify={spotify}/>
            
        </div>
        <Footer spotify={spotify}/>
    </div>
  )
}

export default Player