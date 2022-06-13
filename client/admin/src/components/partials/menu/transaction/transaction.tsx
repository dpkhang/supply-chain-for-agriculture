import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Transaction = () => {
     //------state-------//
     const [isActive, setIsActive] = useState(false)

     //------handle------//
     const HandleClickHeader = () => {
         setIsActive(!isActive);
 
         //animation show child menu
         $('#transaction').animate({
             height: 'toggle'
         });
     }
    return (
        <div className="menu-item">
            {/* ----------- row 4 -------------- */}
            <div
                className={`header-menu-item ${isActive ? 'active' : ''}`}
                onClick={HandleClickHeader}  
            >
                <div className="text-header-menu-item">
                    <i className="fa-solid fa-money-bill-transfer"></i>
                    Giao dịch
                </div>
                <div className="icon-header-menu-item">
                    <i className="fa-solid fa-caret-right"></i>
                </div>
            </div>
            <div className={`child-menu-item ${isActive ? 'show' : 'hide'}`} id="transaction">
                <Link className='format-link' to='/main/transactions'>
                    <div className="child-item-menu-item">
                        Giao dịch cá nhân
                    </div>
                </Link>
                <Link className='format-link' to='/main/confirm-transaction'>
                    <div className="child-item-menu-item">
                        Chờ xác nhận
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Transaction;