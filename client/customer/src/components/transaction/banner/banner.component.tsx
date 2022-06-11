import React from 'react'
import './banner.component.scss'

function BannerComponent() {
  return (
    <div className='product-banner-wrapper'>
      <div className="product-banner">
        <div className="background">
          <img src="/images/extension/slider1.jpg" alt="" />
        </div>
        <div className="search-box">
          <input type="text" name="" id="" placeholder='Nhập tên sản phẩm cần tìm.'/>
          <button>Tìm kiếm</button>
        </div>
      </div>
    </div>
  )
}

export default BannerComponent