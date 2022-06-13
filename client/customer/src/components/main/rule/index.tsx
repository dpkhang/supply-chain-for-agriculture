import React from 'react'
import './style.scss'

function Index() {
  return (
    <div className="rule-wrapper">
      <div className="rule">
        <div className="rule-option">
          <div className="text-rule">
            <p className="first-text">Quy trình sản xuất lúa đạt chuẩn an toàn,
              tất cả các sản phẩm hỗ trợ phải được chấp nhận bởi các bên liên quan
            </p>
            <p className="second-text">
              Tất cá hoạt động và các sản phẩm hổ trợ đều được ghi lại, và có thể
              truy xuất một cách dễ dàng thông qua mủa QR hoặc tìm kiếm
            </p>
          </div>
          <div className="img-rule">
            <img src="/images/extension/main.jpg" alt="" />
          </div>
        </div>
        <div className="rule-option left">
          <div className="img-rule">
            <img src="/images/extension/main2.jpg" alt="" />
          </div>
          <div className="text-rule left">
            <p className="first-text">
              Tất cả các bước trong quá trình chế biến
              cũng phải đạt chuẩn an toàn, và phải được chấp nhận bởi các bên liên quan
            </p>
            <p className="second-text">
              Tất cả các hoạt động và sản phẩm hỗ trợ trong quá trình chế biến đều
              đều được ghi nhận lại, và có thể truy xuất một cách dễ dàng thông qua
              mã QR hoặc tìm kiếm
            </p>
          </div>
        </div>
        <div className="rule-option">
          <div className="text-rule">
            <p className="first-text">
              Tất cả các giao dịch xảy ra trong chuỗi
              cung ứng đều được ghi lại và truy xuất
              dể dang
            </p>
            <p className="second-text">
              Tất cả giao dịch đều phải đạt được 100% đồng thuận từ các bên liên
              quan do hệ thống quy định.
            </p>
          </div>
          <div className="img-rule">
            <img src="/images/extension/main3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index