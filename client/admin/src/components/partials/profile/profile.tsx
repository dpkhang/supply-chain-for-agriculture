import { MDBFile, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import './profile.scss';

const Profile = () => {
    return (
        <div className='profile-wrapper'>
            <br />
            <h1>Thông tin tài khoản</h1>
            <div className="general-info">
                <div className="info-col-1">
                    <img className='avatar' src="/images/background.jpg" alt="avatar" />
                    <br />
                    <div className='file-container'>
                        <MDBFile id='formFileDisabled' />
                    </div>
                    <br />
                </div>
                <div className="info-col-2">
                    <form className='form-update-profile'>
                        <div className="input-profile">
                            <MDBInput label='Họ và Tên' id='form1' type='text' />
                        </div>
                        <br />
                        <div className="input-profile">
                            <MDBInput label='Địa chỉ' id='form1' type='text' />
                        </div>
                        <br />
                        <div className="input-profile">
                            <MDBInput label='Email' id='form1' type='text' />
                        </div>
                        <br />
                        <div className="input-profile">
                            <MDBInput label='Số điện thoại' id='form1' type='text' />
                        </div>
                        <br />
                        <div className="input-profile">
                            <MDBInput label='Giờ tính' id='form1' type='text' />
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <h3>Thông tin chi tiết</h3>
            <h4>Chưa biết viết gì</h4>
            <div className="details-info"></div>
            <br />
            <div className="buttons-profile">
                <button className='btn btn-dark'>Trở về</button>
                <button className='btn btn-success'>Lưu thay đổi</button>
            </div>
            <br />
        </div>
    );
};

export default Profile;