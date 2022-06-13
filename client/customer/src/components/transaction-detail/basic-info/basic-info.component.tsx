import React from 'react'
import './basic-info.component.scss'

function BasicInfoComponent() {
  return (
    <div className="pd-basic-info-wrapper">
      <div className="col col-1">
        <img src="/images/extension/main.jpg" alt="" />
      </div>
      <div className="col col-2">
        <p className="name"> 
          TÊN GIAO DỊCH
        </p>
        <p className="production">
          Doanh nghiệp sản xuất: <span>công ty sản xuất</span>
        </p>
        <p className="price">
          Số lượng: <span> 20.000 kg </span>
        </p>
        <p className="price">
          Bên bán: <span>Nguyễn Văn An</span>
        </p>
        <p className="price">
          Bên mua: <span>Nguyễn Công Ánh</span>
        </p>
        <p className="price">
          Ngày giao dịch: <span>21 - 03 - 2022</span>
        </p>
        <p className="price">
          Nơi giao dịch: <span>Vĩnh Long</span>
        </p>
        <p className="description">
          Mô tả giao dịch: <span>thường được sử dụng để làm
            nguyên liệu cho món nếp cái hoa vàng-
            một đặc sản nổi tiếng, mang nhiều giá trị dinh
            dưỡng cho sức khỏe. Các loại gạo lứt nếp bao
            gồm gạo nếp ngỗng, gạo nếp than, nếp
            hương,…</span>
        </p>
      </div>
    </div>
  )
}

export default BasicInfoComponent