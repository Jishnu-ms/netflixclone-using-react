import React from 'react'
import './Banner.css';
function Banner() {
  return (
    <div className="banner">
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='button'>PLAY</button>
                <button className='button'>MY_LIST</button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
