import { MDBBtn, MDBInputGroup, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import './confirm-product.scss';

const ConfirmProduct = () => {
    return (
        <div className='confirm-wrapper'>
            <br />
            <h1>Xác nhận lô hàng</h1>
            <form className='search-confirm'>
                <MDBInputGroup>
                    <input className='form-control' placeholder="Tìm kiếm thông tin giao dịch" type='text' />
                    <MDBBtn outline color='success'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </MDBBtn>
                </MDBInputGroup>
            </form>
            <br />
            <div className="table-wrapper">
                <div className="table-list-confirm-product">
                    <MDBTable>
                        <MDBTableHead light>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Tên lô hàng</th>
                                <th scope='col'>Mã số lô hàng</th>
                                <th scope='col'>Người sản xuất</th>
                                <th scope='col'>Hình ảnh</th>
                                <th scope='col'>Ngày sản xuất</th>
                                <th scope='col'>Quy trình</th>
                                <th scope='col'>Quản lý</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr className='body-table-confirm'>
                                <td>1</td>
                                <td className='col-name'>Lúa đông xuân - Nguyễn Văn An (Thu hoạch đợt một) - 2022</td>
                                <td>123456789</td>
                                <td>Nguyễn Văn An</td>
                                <td>
                                    <img className="img-table-confirm" src="/images/background.jpg" alt="photo" />
                                </td>
                                <td>12-02-2022</td>
                                <td>
                                    <button className='btn btn-outline-primary btn-floating'>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                                <td className='col-control'>
                                    <button className='btn btn-outline-success btn-floating'>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <button className='btn btn-outline-danger btn-floating'>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td className='col-name'>Lúa đông xuân - Nguyễn Văn An (Thu hoạch đợt một) - 2022</td>
                                <td>123456789</td>
                                <td>Nguyễn Văn An</td>
                                <td>
                                    <img className="img-table-confirm" src="/images/background.jpg" alt="photo" />
                                </td>
                                <td>12-02-2022</td>
                                <td>
                                    <button className='btn btn-outline-primary btn-floating'>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                                <td className='col-control'>
                                    <button className='btn btn-outline-success btn-floating'>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <button className='btn btn-outline-danger btn-floating'>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td className='col-name'>Lúa đông xuân - Nguyễn Văn An (Thu hoạch đợt một) - 2022</td>
                                <td>123456789</td>
                                <td>Nguyễn Văn An</td>
                                <td>
                                    <img className="img-table-confirm" src="/images/background.jpg" alt="photo" />
                                </td>
                                <td>12-02-2022</td>
                                <td>
                                    <button className='btn btn-outline-primary btn-floating'>
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                                <td className='col-control'>
                                    <button className='btn btn-outline-success btn-floating'>
                                        <i className="fa-solid fa-check"></i>
                                    </button>
                                    <button className='btn btn-outline-danger btn-floating'>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div >
    );
};

export default ConfirmProduct;