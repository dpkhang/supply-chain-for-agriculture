import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './products.scss';

const Products = () => {
    const navigate = useNavigate()

    //--------handle--------//
    const clickShowProductDetails = () => {
        navigate('/main/product-details')
    }

    return (
        <div className='product-wrapper'>
            <br />
            <h1>Lô hàng nhập</h1>
            <MDBBtn color='success'>Thêm lô hàng</MDBBtn>
            <br />
            <div className="product-table-wrapper">
                <MDBTable className='product-table'>
                    <MDBTableHead light>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Mã số lô hàng</th>
                            <th scope='col'>Tên lô hàng</th>
                            <th scope='col'>Ngày sản xuất</th>
                            <th scope='col'>Số lượng</th>
                            <th scope='col'>Trạng thái</th>
                            <th scope='col'>Xem thêm</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>1</td>
                            <td>123443123565234</td>
                            <td>Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt một - 2021/2022</td>
                            <td>21-3-2022</td>
                            <td>5.000KG</td>
                            <td>Hợp lệ</td>
                            <td>
                                <button className='btn btn-outline-success btn-floating' onClick={clickShowProductDetails}>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>123443123565234</td>
                            <td>Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt hai - 2021/2022</td>
                            <td>25-3-2022</td>
                            <td>5.000KG</td>
                            <td>Hợp lệ</td>
                            <td>
                                <button className='btn btn-outline-success btn-floating' onClick={clickShowProductDetails}>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>123443123565234</td>
                            <td>Lúa đông xuân - Nguyễn Văn An - thu hoạch đợt ba - 2021/2022</td>
                            <td>30-3-2022</td>
                            <td>5.000KG</td>
                            <td>Hợp lệ</td>
                            <td>
                                <button className='btn btn-outline-success btn-floating' onClick={clickShowProductDetails}>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    );
};

export default Products;