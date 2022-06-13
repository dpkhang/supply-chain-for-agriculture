import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className='header-wrapper'>
      <div className="header">
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
      </div>
    </div>
  )
}

export default Index