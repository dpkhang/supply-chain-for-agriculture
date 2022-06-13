import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Index() {
  return (
    <div className='slider-wrapper'>
      <div className="slider">
        <div className="img-slider">
          <img src="/images/extension/slider1.jpg" alt="" />
        </div>
        <div className="text-slider">
          <div className="logan">
            <p>Chính xác</p>
            <p>&</p>
            <p>Minh bạch</p>
          </div>
          <p className='sub-logan'>Hệ thống quản lý và truy xuất ngồng gốc các sản phẩm lúa</p>
          <button className='qr-btn'><Link to='/product/qr-code'>Quét QR</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Index