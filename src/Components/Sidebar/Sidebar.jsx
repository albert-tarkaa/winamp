import React from 'react'
import logo from '../../assets/Winamp-logo.svg'
import { FiFolder } from "react-icons/fi";
import { RiPlayListLine } from "react-icons/ri";
import { MdOutlineMonitor, MdDevices } from "react-icons/md";
import { TfiMicrophone } from "react-icons/tfi";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="section-left">
        <section className='logo'>
          <img src={logo} alt="winamp logo"/>
        </section>
        <section className="search">
          <input type="search" name="search" id="search" placeholder='search' />
        </section>
        <section className='sidebar-menu'>
          <ul>
            <li><FiFolder/><span>Library</span></li>
            <li><RiPlayListLine/><span>Playlists</span></li>
            <li><MdOutlineMonitor/><span>Online Services</span></li>
            <li><MdDevices/><span>Devices</span></li>
            <li><TfiMicrophone/><span>Podcasts Directory</span></li>
          </ul>
        </section>
      </div>
  )
}

export default Sidebar