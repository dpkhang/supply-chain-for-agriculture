import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

const Dashboard = () => {

    //------state-------//
    const [isActive, setIsActive] = useState(false)

    //------handle------//
    const HandleClickHeader = () => {
        setIsActive(!isActive);

        //animation show child menu
        $('#dashboard').animate({
            height: 'toggle'
        });
    }

    return (
        <div className="menu-item">
        {/* ----------- row 1 -------------- */}
        <div 
            className={`header-menu-item ${isActive ? 'active' : ''}`}
            onClick={HandleClickHeader}    
        >
            <div className="text-header-menu-item">
                <i className="fa-solid fa-chart-line"></i>
                Thống kê
            </div>
            <div className="icon-header-menu-item">
                <i className="fa-solid fa-caret-right"></i>
            </div>
        </div>
        <div className={`child-menu-item ${isActive ? 'show' : 'hide'}`} id="dashboard">
            <Link className='format-link' to='/main/dashboard'>
                <div className="child-item-menu-item">
                    Thống kê lô hàng
                </div>
            </Link>
            <Link className='format-link' to='/main/dashboard'>
                <div className="child-item-menu-item">
                    Thống kê giao dịch
                </div>
            </Link>
        </div>
    </div>
    );
};

export default Dashboard;