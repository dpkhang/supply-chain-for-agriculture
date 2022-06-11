import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

const ReceiveProduct = () => {
    //------state-------//
    const [isActive, setIsActive] = useState(false)

    //------handle------//
    const HandleClickHeader = () => {
        setIsActive(!isActive);

        //animation show child menu
        $('#receive-product').animate({
            height: 'toggle'
        });
    }
    return (
        <div className="menu-item">
        {/* ----------- row 2 -------------- */}
        <div
            className={`header-menu-item ${isActive ? 'active' : ''}`}
            onClick={HandleClickHeader} 
        >
            <div className="text-header-menu-item">
                <i className="fa-solid fa-box"></i>
                Lô hàng nhận
            </div>
            <div className="icon-header-menu-item">
                <i className="fa-solid fa-caret-right"></i>
            </div>
        </div>
        <div className={`child-menu-item ${isActive ? 'show' : 'hide'}`} id="receive-product">
            <Link className='format-link' to='/main/products'>
                <div className="child-item-menu-item">
                    Lô hàng cá nhân
                </div>
            </Link>
            <Link className='format-link' to='/main/confirm-product'>
                <div className="child-item-menu-item">
                    Lô hàng chờ xác nhận
                </div>
            </Link>
        </div>
    </div>
    );
};

export default ReceiveProduct;