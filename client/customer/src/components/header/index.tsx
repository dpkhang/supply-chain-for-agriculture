import React, { useLayoutEffect, useRef } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

function Index() {

  const mobileRef = useRef<HTMLDivElement>(null)
  const hiddenWrapperRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {

  }, [])

  const handleToHideMenu = () => {
    if (mobileRef.current) {
      mobileRef.current.style.right = '-300px'

    }
    if (hiddenWrapperRef.current) {
      hiddenWrapperRef.current.style.display = 'none'
    }
  }

  const handleClickToShowMenu = () => {
    if (mobileRef.current) {
      mobileRef.current.style.right = '0px'

    }
    if (hiddenWrapperRef.current) {
      hiddenWrapperRef.current.style.display = 'block'
    }
  }

  return (
    <>
      <div className='header-wrapper'>
        <div className="header is-desktop">
          <div className="logo">
            <img className='image-logo' src="/images/logos/logo.svg" alt="" />
            <p className='text-logo'>E-Agruculture</p>
          </div>
          <div className="menu">
            <ul>
              <li><Link to='/'>TRANG CHỦ</Link></li>
              <li><Link to='/product'>SẢN PHẨM</Link></li>
              <li><Link to='/transaction'>GIAO DỊCH</Link></li>
              <li><Link to='/resource'>NGUỒN GỐC</Link></li>
            </ul>
          </div>
          <div className="menu-bar">
            <i className="fa-solid fa-bars" onClick={handleClickToShowMenu}></i>
          </div>
        </div>
        <div ref={hiddenWrapperRef} className="hidden-wrapper" onClick={handleToHideMenu}></div>
        <div ref={mobileRef} className="header is-mobile">
          <div className="hiden-menu">
            <i className="fa-solid fa-xmark" onClick={handleToHideMenu}></i>
          </div>
          <div className="menu">
            <ul>
              <li onClick={handleToHideMenu}><Link to='/'>TRANG CHỦ</Link></li>
              <li onClick={handleToHideMenu}><Link to='/product'>SẢN PHẨM</Link></li>
              <li onClick={handleToHideMenu}><Link to='/transaction'>GIAO DỊCH</Link></li>
              <li onClick={handleToHideMenu}><Link to='/resource'>NGUỒN GỐC</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index