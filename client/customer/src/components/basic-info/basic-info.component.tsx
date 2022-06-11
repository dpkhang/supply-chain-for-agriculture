import React from 'react'
import './basic-info.component.scss'
import Image from '../common/image/image.component'

function BasicInfoComponent() {
  return (
    <div className="basic-info-wrapper">
      <div className="col col-1">
        <Image src="/images/extension/main.jpg"></Image>
      </div>
      <div className="col col-2">
        <p className="name"> 
          Tên giao dịch: Thu mua gạo nàng thơm 1
        </p>
        <p className="buyer">
          Người mua: <span>Nguyễn Văn A</span>
        </p>
        <p className="saler">
          Người bán: <span> Nguyễn Văn B</span>
        </p>
        <p className="quantity">
          Số lượng: <span>1000kg</span>
        </p>
        <p className="import-price">
          Giá nhập hàng: <span>10000đ/kg</span>
        </p>
        <p className="delivery-date">
          Ngày giao hàng: <span>15-05-2015</span>
        </p>
      </div>
    </div>
  )
}

export default BasicInfoComponent