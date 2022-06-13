import { Button } from '@mui/material';
import React from 'react';
import './style.scss';

const index = () => {
    return (
        <div className='qr-wrapper'>
            <div className="col-text">
                <h2>Truy xuất</h2>
                <h1>Nguồn gốc</h1>
                <h3>Bằng QR</h3>
                <h3>hoặc Bar code</h3>
                <br />
                <p>
                    Hệ thống quản lý và truy xuất nguồn gốc sản phẩm nông nghiệp,
                    đảm bảo đem lại cho quý khách hàng sản phẩm chất lượng và an
                    toàn, cũng như cung cấp đầy đủ các thông tin chính xác và cần thiết
                </p>
                <br />
                <Button variant="contained" color="success">
                    Chọn ảnh
                </Button>
            </div>
            <div className="col-qr">
                <div className='qr-component'></div>
            </div>
        </div>
    );
};

export default index;