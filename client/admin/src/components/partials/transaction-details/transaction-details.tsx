import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import './transaction-details.scss';

const TransactionDetails = () => {
    return (
        <div className='transaction-details-wrapper'>
            <br />
            <h1>Chi tiết giao dịch</h1>
            <br />
            <p>
                <h3>Trạng thái giao dịch: <span className='text-danger'>không hợp lệ</span></h3>
            </p>
            <div className="general-info-product">
                <div className="col-img-info">
                    <img className='main-img-product' src="/images/background.jpg" alt="main-photo" />
                    <br />
                    <div className="sub-img-product-wrapper">
                        <img className='sub-img-product' src="/images/background.jpg" alt="sub-photo" />
                        <img className='sub-img-product' src="/images/bg-rice-1.jpeg" alt="sub-photo" />
                        <img className='sub-img-product' src="/images/bg-rice-2.webp" alt="sub-photo" />
                        <img className='sub-img-product' src="/images/bg-rice-3.jpg" alt="sub-photo" />
                    </div>
                    <br />
                </div>
                <div className="col-text-info">
                    <p><b>Tên giao dịch: </b>Giao dịch mua bán lúa đông xuân - Nguyễn Văn An - thu hoạch đợt một - 2021/2022</p>
                    <p><b>Bên bán: </b>Nguyễn Văn An</p>
                    <p><b>Bên mua: </b>Nguyễn Công Ánh</p>
                    <p><b>Ngày giao dịch: </b>21 - 03 - 2022</p>
                    <p><b>Nơi giao dịch: </b>Một nơi nào đó ở Vĩnh Long</p>
                    <p><b>Sô lượng: </b>15.000KG</p>
                    <p><b>Giá bán: </b>5.000VNĐ/KG</p>
                    <p><b>Thành tiền: </b>75.000.000KG</p>
                    <p><b>Bên mua xác nhận: </b><span className='text-success'>Đã xác nhận</span></p>
                    <p><b>Bên bán xác nhận: </b><span className='text-success'>Đã xác nhận</span></p>
                    <p><b>Hợp tác xã xác nhận: </b><span className='text-danger'>Từ chối giao dịch</span></p>
                </div>
            </div>
            <div className="description-transaction">
                <h3>Mô tả:</h3>
                - Lúa sau khi thu hoạch ở trạng thái tốt. <br />
                - Nông dân chăm sóc lúa kỹ lưỡng - ít lạm dụng thuốc, hoá chất. <br />
                - Hợp tả xã quản lý chặc chẽ các quy trình sản xuất. <br />
                - Có được sự hỗ trợ của người dân nơi đây nên, thời gian thu hoạch rút ngắn đi rất nhiều <br />
            </div>
            <br />
            <div className="products-transaction">
                <h3>Các lô hàng được giao dịch</h3>
                <div className="products-transaction-table-wrapper">
                    <MDBTable className='products-transaction-table'>
                        <MDBTableHead light>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Mã lô hàng</th>
                                <th scope='col'>Tên lô hàng</th>
                                <th scope='col'>Chủ lô</th>
                                <th scope='col'>Chi tiết</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>1</td>
                                <td>123213523123</td>
                                <td>
                                    Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt một - 2021/2022
                                </td>
                                <td>
                                    Nguyễn Văn An
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating'>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>123213123123</td>
                                <td>
                                    Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt hai - 2021/2022
                                </td>
                                <td>
                                    Nguyễn Văn An
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating'>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>5234523491212</td>
                                <td>
                                    Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt ba - 2021/2022
                                </td>
                                <td>
                                    Nguyễn Văn An
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating'>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
            <br />
        </div>
    );
};

export default TransactionDetails;