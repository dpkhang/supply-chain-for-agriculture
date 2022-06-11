import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React from 'react';
import './activity-details.scss';

const ActivityDetails = () => {
    return (
        <div className='activity-details-wrapper'>
            <br />
            <h1>Chi tiết hoạt động</h1>
            <br />
            <div className="activity-info">
                <p><b>Tên hoạt động: </b>Bón phân đợt một</p>
                <p><b>Tình trạng: </b>Lúa phát triển tốt, phát hiên một số đốm vàng nhỏ trên lúa</p>
                <p><b>Thời gian: </b>21-01-2022</p>
                <p><b>Mô tả - Ghi chú:</b><br />
                    - Tăng cường các loại phân bón để thúc đẩy sinh trưởng lúa, đảm bảo đúng ngày thu hoạch. <br />
                    - Chuẩn bị các biện pháp đối phó sâu bệnh. <br />
                    - Khác phục tình trạng đốm vàng trên lúa. <br />
                </p>

            </div>
            <br />
            <div className="products-activity">
                <h3>Các sản phẩm hổ trợ</h3>
                <div className="products-activity-table-wrapper">
                    <MDBTable className='products-activity-table'>
                        <MDBTableHead light>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Tên sản phẩm</th>
                                <th scope='col'>Mô tả</th>
                                <th scope='col'>Đơn giá</th>
                                <th scope='col'>Số lượng</th>
                                <th scope='col'>Thành tiền</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td>1</td>
                                <td>Phân NPK</td>
                                <td>
                                    Phân bón đạm, tăng cường dinh dưỡng cho đất
                                </td>
                                <td>
                                    100.000VNĐ/Bao - 20KG
                                </td>
                                <td>
                                    1 Bao
                                </td>
                                <td>
                                    100.000VNĐ
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Phân NPK</td>
                                <td>
                                    Phân bón đạm, tăng cường dinh dưỡng cho đất
                                </td>
                                <td>
                                    100.000VNĐ/Bao - 20KG
                                </td>
                                <td>
                                    1 Bao
                                </td>
                                <td>
                                    100.000VNĐ
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Phân NPK</td>
                                <td>
                                    Phân bón đạm, tăng cường dinh dưỡng cho đất
                                </td>
                                <td>
                                    100.000VNĐ/Bao - 20KG
                                </td>
                                <td>
                                    1 Bao
                                </td>
                                <td>
                                    100.000VNĐ
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

export default ActivityDetails;