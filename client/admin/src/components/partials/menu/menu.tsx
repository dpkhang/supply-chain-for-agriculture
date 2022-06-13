import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import $ from 'jquery'
import ReceiveProduct from './receive-product/receive-product';
import SendProduct from './send-product/send-product';
import Transaction from './transaction/transaction';
import QRAndBar from './QR&Bar/QR&Bar';
import Dashboard from './dashboard/dashboard';
import Logout from './logout/logout';
import { useDispatch, useSelector } from 'react-redux';
import { MenuControlSlice } from '../../../redux/slice/menu-control.slice';
import { menuControlSelector } from '../../../redux/selectors/menu-control.selector';

const Menu = () => {
    const dispatch = useDispatch()
    const isShow = useSelector(menuControlSelector)

    //------lifecycle-------//
    useEffect(() => {
        //update status is show in redux
        const widthScreen = $(window).width() as number
        dispatch(
            MenuControlSlice.actions.updateShowMenu(widthScreen > 1400)
        )
    }, [])

    //--------handle--------//
    $(window).resize(() => {
        const widthScreen = $(window).width() as number
        dispatch(
            MenuControlSlice.actions.updateShowMenu(widthScreen > 1400)
        )
    })

    return (
        <div className={`menu-wrapper ${isShow ? '' : 'hide-menu'}`}>
            {/* ----------- header -------------- */}
            <div className="header-menu">
                <Link className='format-link' to='/'>
                    <img className="logo-header-menu" src='/images/LogoApp.png' alt='logo' />
                </Link>
                <Link className='format-link' to='/'>
                    <h3 className='text-header-menu'>
                        E-Agriculture
                    </h3>
                </Link>
            </div>
            {/* ----------- main -------------- */}
            <div className="main-menu">
                <Dashboard />
                <ReceiveProduct />
                <SendProduct />
                <Transaction />
                <QRAndBar />
                <Logout />
            </div>
        </div>
    );
};

export default Menu;