import React from 'react'
import './login.scss'
import {
    Input,
    TextField
} from '@mui/material'

const Login = () => {
    return (
        <div className='login-wrapper'>
            <div className="login-container">
                <div className="login-component">
                    <img className='logo-app-login center' src="/images/LogoApp.png" alt="logo" />
                    <br />
                    <h1 className='text-center'>Đăng nhập</h1>
                    <br />
                    <form action="" className='login-form center'>
                        <TextField
                            type='text'
                            id="outlined-basic"
                            label="Tên đăng nhập"
                            variant="outlined"
                            size='small'
                            className='format-input'
                        />
                        <br /><br />
                        <TextField
                            type='password'
                            id="outlined-basic"
                            label="Mật khẩu"
                            variant="outlined"
                            size='small'
                            className='format-input'
                        />
                        <br /><br />
                        <button className='btn btn-success center'>
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login