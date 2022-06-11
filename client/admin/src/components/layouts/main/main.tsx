import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import Menu from '../../partials/menu/menu';
import Footer from '../../partials/footer/footer';
import Dashboard from '../../partials/dashboard/dashboard';
import Products from '../../partials/products/products';
import AddProduct from '../../partials/add-product/add-product';
import ProductDetails from '../../partials/product-details/product-details';
import TransactionDetails from '../../partials/transaction-details/transaction-details';
import Transactions from '../../partials/transactions/transactions';
import AddTransaction from '../../partials/add-transaction/add-transaction';
import Profile from '../../partials/profile/profile';
import Background from '../../partials/background/background';
import Header from '../../partials/header/header';
import './main.scss';
import ConfirmProduct from '../../partials/confirm-product/confirm-product';
import ConfirmTransaction from '../../partials/comfirm-transaction/confim-transaction';
import QrBar from '../../partials/QR-Bar/qr-bar';
import ActivityDetails from '../../partials/activity-details/activity-details';
import NotFault from '../not-fault';

const Main = () => {
    return (
        <>
            <Menu />
            <div className="main-wrapper">
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/confirm-product' element={<ConfirmProduct />}></Route>
                        <Route path='/add-product' element={<AddProduct />}></Route>
                        <Route path='/product-details' element={<ProductDetails />}></Route>
                        <Route path='/activity-details' element={<ActivityDetails />}></Route>
                        <Route path='/transactions' element={<Transactions />}></Route>
                        <Route path='/confirm-transaction' element={<ConfirmTransaction />}></Route>
                        <Route path='/add-transaction' element={<AddTransaction />}></Route>
                        <Route path='/transaction-details' element={<TransactionDetails />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/qr-bar' element={<QrBar />}></Route>
                        <Route path='/' element={<Navigate to='/main/dashboard' />}></Route>
                        <Route path='/*' element={<NotFault />}></Route>
                    </Routes>
                    <Footer />
                </div>
            </div>
            <Background />
        </>
    );
};

export default Main;