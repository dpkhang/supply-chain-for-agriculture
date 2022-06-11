import React from 'react'
import './style.scss'

function Index() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="column column-logo">
          <img src="/images/logos/logo.svg" alt="" />
          <p className='text-logo'>E-Agruculture</p>
        </div>
        <div className="column">
          <p>Sản phẩm</p>
          <p>Hợp tác xã</p>
          <p>Chế biến</p>
        </div>
        <div className="column">
          <p>Giao dịch</p>
          <p>Mua bán lúa</p>
          <p>Mua bán gạo</p>
        </div>
        <div className="column">
          <p>Nguồn gốc</p>
          <p>Quét QR</p>
          <p>Quét mã vạch</p>
        </div>
        <div className="column">
          <p>Thông tin</p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="copy-right">
        <p>© 2022 Abeeway All rights reserved</p>
      </div>
    </div>
  )
}

export default Index