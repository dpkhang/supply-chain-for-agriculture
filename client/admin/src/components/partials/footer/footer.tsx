import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Kết nối với chúng tôi thông qua các mạng xã hội</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <Link className='format-link' to='/'>
                                    <img className="logo-app" src='/images/LogoApp.png' alt='logo' />
                                </Link><span className='text-color-app'>E-Agriculture</span>
                            </h6>
                            <p className='text-justify'>
                                Tại đây bạn có thế sự dụng các dịch vụ quản lý sản phẩm, giao dịch, theo giỏi lô hàng,
                                để nâng cáo hiệu quả sản xuất, cũng như uy tính cá nhân, doanh nghiệp của các 
                                bạn. Chúng tôi rất vui khi được phục vụ quý khách!
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Quản lý</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Thống kê
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Lô hàng nhận
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Lô hàng giao
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Giao dịch
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Quét QR & Bar
                                </a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Khách hàng</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Trang chủ
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Sản phẩm
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Giao dịch
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Quét QR & Bar
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Liên hệ</h6>
                            <p>
                                <i className='fas fa-home me-3'></i> ĐH Cần Thơ, Cần Thơ, Việt Nam
                            </p>
                            <p>
                                <i className='fas fa-envelope me-3'></i>
                                maitrongnhan.001@gmail.com
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'></i> + 84 943 363 414
                            </p>
                            <p>
                                <i className='fas fa-print me-3'></i> + 01 234 567 89
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    E-Agriculture
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;