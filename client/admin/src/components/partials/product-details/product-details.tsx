import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product-details.scss';

const ProductDetails = () => {
    const navigate = useNavigate()

    //--------handle-------//
    const clickShowActivityDetails = () => {
        navigate('/main/activity-details')
    }
    return (
        <div className='product-details-wrapper'>
            <br />
            <h1>Chi tiết lô hàng</h1>
            <br />
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
                    <p><b>Tên lô hàng: </b>Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt một - 2021/2022</p>
                    <p><b>Chủ lô hàng: </b>Nguyễn Văn An</p>
                    <p><b>Ngày sản xuất: </b>21 - 03 - 2022</p>
                    <p><b>Nơi sản xuất: </b>Một nơi nào đó ở Vĩnh Long</p>
                    <p><b>Sô lô hàng: </b>23124565234123435</p>
                    <p><b>Ngày sản xuất: </b>21 - 03 - 2022</p>
                    <p><b>Nơi sản xuất: </b>Một nơi nào đó ở Vĩnh Long</p>
                    <p><b>Sô lô hàng: </b>23124565234123435</p>
                </div>
            </div>
            <div className="time-line">
                <h3>Quy trình sản xuất</h3>
                <div className="process-table-wrapper">
                    <MDBTable className='process-table'>
                        <MDBTableHead light>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Thời gian</th>
                                <th scope='col'>Hoạt động</th>
                                <th scope='col'>Chi tiết</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>1</td>
                                <td>21-03-2022</td>
                                <td>
                                    <h5>Thu hoạch</h5>
                                    <p><b>Tổng sản lương:</b> 15.000 KG</p>
                                    <p><b>Đơn vị thu hoạch:</b> Anh Bảy</p>
                                    <p><b>Giá bán:</b> 5.000 VNĐ/KG</p>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating' onClick={clickShowActivityDetails}>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>21-02-2022</td>
                                <td>
                                    <h5>Bón phân đợt hai</h5>
                                    <p><b>Loại phân bón - Số lượng:</b> NPK - 10KG</p>
                                    <p><b>Loại phân bón - Số lượng:</b> Urê - 1KG</p>
                                    <p><b>Loại phân bón - Số lượng:</b> KCL - 1KG</p>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating' onClick={clickShowActivityDetails}>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>21-01-2022</td>
                                <td>
                                    <h5>Bón phân đợt một</h5>
                                    <p><b>Loại phân bón - Số lượng:</b> NPK - 10KG</p>
                                    <p><b>Loại phân bón - Số lượng:</b> Urê - 1KG</p>
                                    <p><b>Loại phân bón - Số lượng:</b> KCL - 1KG</p>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating' onClick={clickShowActivityDetails}>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>21-12-2021</td>
                                <td>
                                    <h5>Gieo xạ</h5>
                                    <p><b>Giống lúa:</b> G12343 </p>
                                    <p><b>Số lượng:</b> 100KG</p>
                                    <p><b>Thành tiền:</b> 1.000.000VNĐ</p>
                                </td>
                                <td>
                                    <button className='btn btn-outline-success btn-floating' onClick={clickShowActivityDetails}>
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

export default ProductDetails;