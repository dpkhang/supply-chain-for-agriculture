import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import NotFault from './pages/not-fault'
import Main from './pages/main'
import Product from './pages/product'
import ProductDetail from './pages/product-detail'
import Transaction from './pages/transaction'
import TransactionDetail from './pages/transaction-detail'
import SaleDetail from './pages/sale-detail'
import ProcedureDetail from './pages/procedure-detail'
import QR from './pages/qr'
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3'

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
    rpc: {
      5777: 'http://127.0.0.1:8545'
      // ...
    },
  });
  
  //  Enable session (triggers QR Code modal)


function App() {

  useEffect(()=> {
    (async()=> {
      // provider.enable();
      if((window as any).ethereum) {
        const account = await (window as any).ethereum.request({ method: 'eth_requestAccounts' }) 
      } 

      const web3 = new Web3(provider as any)
    })()
  }, [])



  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product-detail/:id' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/transaction' element={<Transaction></Transaction>}></Route>
        <Route path='/transaction-detail' element={<TransactionDetail></TransactionDetail>}></Route>
        <Route path='/sale-detail/:id' element={<SaleDetail></SaleDetail>}></Route>
        <Route path='/procedure-detail/:id' element={<ProcedureDetail></ProcedureDetail>}></Route>
        <Route path='/resource' element={<QR></QR>}></Route>
        <Route path='/'></Route>
        <Route path='*' element={<NotFault></NotFault>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App