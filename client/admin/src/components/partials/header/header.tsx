import { MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { MenuControlSlice } from '../../../redux/slice/menu-control.slice';
import { menuControlSelector } from '../../../redux/selectors/menu-control.selector';

const Header = () => {
    const menuStatus = useSelector(menuControlSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //---------handle----------//
    const handleClickMenu = () => {
        dispatch(
            MenuControlSlice.actions.updateShowMenu(!menuStatus)
        )
    }

    const handleClickQR = () => {
        navigate('/main/qr-bar')
    }

    const handleClickProfile = () => {
        navigate('/main/profile')
    }

    return (
        <div className='header-wrapper'>
            <div className="header-col-1">
                <div className="menu-icon" onClick={handleClickMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="logo">
                    <Link className='format-link' to='/'>
                        <img className="logo-app" src='/images/LogoApp.png' alt='logo' />
                    </Link>
                    <Link className='format-link' to='/'>
                        <h3 className='text-logo-app'>
                            E-Agriculture
                        </h3>
                    </Link>
                </div>
                <div className="search">
                    <MDBInputGroup>
                        <input className='form-control' placeholder="Recipient's username" type='text' />
                        <MDBBtn outline color='success'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </MDBBtn>
                    </MDBInputGroup>
                </div>
            </div>
            <div className="header-col-2">
                <div className="QR" onClick={handleClickQR}>
                    <i className="fa-solid fa-qrcode"></i>
                </div>
                <div className="profile" onClick={handleClickProfile}>
                    <img className='avatar' src="/images/background.jpg" alt="avatar" />
                </div>
            </div>
        </div>
    );
};

export default Header;