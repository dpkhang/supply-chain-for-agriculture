import JoditEditor from 'jodit-react';
import { MDBFile, MDBInput } from 'mdb-react-ui-kit';
import React, { useRef, useState } from 'react';
import './add-transaction.scss';

const AddTraction = () => {

    const editor = useRef(null)
    const [content, setContent] = useState('1')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        placeholder: 'Mô tả giao dịch...',
        height: '500px'
    }

    return (
        <div className='add-product-wrapper'>
            <br />
            <h1>Thêm lô giao dịch</h1>
            <form action="" className='form-add-product'>
                <div className="input-product">
                    <MDBInput label='Tên giao dịch' id='form1' type='text' />
                </div>
                <br />
                <div className="input-product">
                    <MDBInput label='Người mua' id='form1' type='text' />
                </div>
                <br />
                <div className="quantity-price">
                    <div className="input-product">
                        <MDBInput label='Số lượng' id='form1' type='text' />
                    </div>
                    <div className="input-product">
                        <MDBInput label='Giá nhập hàng' id='form1' type='text' />
                    </div>
                </div>
                <br />
                <div className="input-product">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={config}
                        //tabIndex="1" // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => { }}
                    />
                </div>
                <br />
                <div className='file-container'>
                    <MDBFile label='Chọn hình ảnh giao dịch' id='customFile' />
                </div>
                <br />
                <div className="buttons-add-product">
                    <button type="button" className="btn btn-dark">Trở về</button>
                    <button type="button" className="btn btn-success">Thêm giao dịch</button>
                </div>
            </form>
        </div>
    );
};

export default AddTraction;