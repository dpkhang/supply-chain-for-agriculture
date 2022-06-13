import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './transactions.scss';

const Transactions = () => {
    const navigate = useNavigate()

    //-------handle-------//
    const clickShowTransactionDetails = () => {
        navigate('/main/transaction-details');
    }
    return (
        <div className='transaction-wrapper'>
            <br />
            <h1>Giao dịch</h1>
            <MDBBtn color='success'>Thêm giao dịch</MDBBtn>
            <br />
            <div className="transaction-table-wrapper">
            <MDBTable className='transaction-table'>
                    <MDBTableHead light>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Mã số giao dịch</th>
                            <th scope='col'>Tên giao dịch</th>
                            <th scope='col'>Ngày giao dịch</th>
                            <th scope='col'>Số lượng</th>
                            <th scope='col'>Thành tiền</th>
                            <th scope='col'>Trạng thái</th>
                            <th scope='col'>Xem thêm</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>1</td>
                            <td>123443123565234</td>
                            <td>Giao dịch mua bán lúa đông xuân - Nguyễn Văn An - thu hoạch đợt một - 2021/2022</td>
                            <td>21-3-2022</td>
                            <td>5.000KG</td>
                            <td>25.000.000VNĐ</td>
                            <td className='text-success'>Hợp lệ</td>
                            <td>
                                <button className='btn btn-outline-success btn-floating' onClick={clickShowTransactionDetails}>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>123443123565234</td>
                            <td>Giao dịch mua bán lúa đông xuân - Nguyễn Văn An - thu hoạch đợt hai - 2021/2022</td>
                            <td>25-3-2022</td>
                            <td>5.000KG</td>
                            <td>25.000.000VNĐ</td>
                            <td className='text-success'>Hợp lệ</td>
                            <td>
                                <button className='btn btn-outline-success btn-floating' onClick={clickShowTransactionDetails}>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>123443123565234</td>
                            <td>Giao dịch mua bán lúa đông xuân - Nguyễn Văn An - thu hoạch đợt ba - 2021/2022</td>
                            <td>30-3-2022</td>
                            <td>5.000KG</td>
                            <td>25.000.000VNĐ</td>
                            <td className='text-success'>Hợp lệ</td>
                            <td>
                                <button className='btn btn-outline-success btn-floating' onClick={clickShowTransactionDetails}>
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

export default Transactions;