import React from 'react';
import './style.scss';
import FilterComponent from '../../components/common/filter/filter.component'
import PaginationComponent from '../../components/common/pagination/pagination.component'
import BannerComponent from '../../components/transaction/banner/banner.component'
import CardGroupComponent from '../../components/transaction/card/card-group.component'

const index = () => {
    return (
        <div className='transaction'>
            <BannerComponent></BannerComponent>
            <div className="main">
                <h1>Giao dịch</h1>
                <br />
                <FilterComponent></FilterComponent>
                <CardGroupComponent></CardGroupComponent>
                <PaginationComponent></PaginationComponent>
            </div>
        </div>
    );
};

export default index;