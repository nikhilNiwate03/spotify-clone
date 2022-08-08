import React from 'react'
import './sidebaroption.css'

const SidebarOption = ({title,Icon}) => {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className="sidebarOption_icons"/>}
       {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption