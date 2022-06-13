import React from 'react';
import './style.scss';
import BasicInfoComponent from '../../components/transaction-detail/basic-info/basic-info.component'
import InfoProductComponent from '../../components/transaction-detail/info-product/info-product.component';

const index = () => {
    return (
        <div className="transaction-detail-wrapper">
            <br />
            <h1>Thông tin chung</h1>
            <BasicInfoComponent></BasicInfoComponent>
            <div className="list-products">
                <h1>Danh sách lô hàng</h1>
                <br />
                <InfoProductComponent></InfoProductComponent>
            </div>
        </div>
    );
};

export default index;