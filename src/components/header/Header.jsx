import React from 'react'
import './header.css'
// import {Animation} from '../../components'

const Header = () => {
  return (
    <div className='header section___padding' id='header'>
      {/* <div className='obs__header-animation'> */}
        {/* <Animation /> */}
      {/* </div> */}
      <div className='obs__header-background section__padding'>
        Game/Screen-saver here
      </div>
      <div className='obs__header-foreground'>
        <h1 className='obs__header-heading'>Where collaboration happens</h1>
        <a href='https://github.com/ObieSource' target="_blank" className='obs__header-browse-button'>
        Browse Projects
        </a>
      </div>
      </div>
  )
}

export default Header