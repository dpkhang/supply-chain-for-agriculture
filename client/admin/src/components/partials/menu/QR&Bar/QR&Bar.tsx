import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'

const QRAndBar = () => {
    //------state-------//
    const [isActive, setIsActive] = useState(false)

    //------handle------//
    const HandleClickHeader = () => {
        setIsActive(!isActive);

        //animation show child menu
        $('#profile').animate({
            height: 'toggle'
        });
    }
    return (
        <div className="menu-item">
            {/* ----------- row 5 -------------- */}
            <div 
                className={`header-menu-item ${isActive ? 'active' : ''}`}
                onClick={HandleClickHeader}    
            >
                <div className="text-header-menu-item">
                    <i className="fa-solid fa-qrcode"></i>
                    Quét QR & Bar
                </div>
                <div className="icon-header-menu-item">
                    <i className="fa-solid fa-caret-right"></i>
                </div>
            </div>
            <div className={`child-menu-item ${isActive ? 'show' : 'hide'}`} id="profile">
                <Link className='format-link' to='/main/qr-bar'>
                    <div className="child-item-menu-item">
                        Quét QR code
                    </div>
                </Link>
                <Link className='format-link' to='/main/qr-bar'>
                    <div className="child-item-menu-item">
                        Quét Bar code
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default QRAndBar;