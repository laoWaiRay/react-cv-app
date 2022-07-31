import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__heading'>CV Builder <i className="fa-solid fa-hammer"/> </h1>
      <h2 className='header__sub'>
        Made in 
        <a href='https://reactjs.org'> React <i className="fa-brands fa-react"/> </a> 
        by
        <a href='https://github.com/laoWaiRay'> laoWaiRay <i className="fa-brands fa-github"/> </a>
      </h2>
    </div>
  )
}

export default Header
