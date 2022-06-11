import React from 'react';
import './info-product.component.scss';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const InfoProductComponent = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center"><b>#</b></TableCell>
                        <TableCell align="center"><b>Hình ảnh</b></TableCell>
                        <TableCell align="center"><b>Mã lô hàng</b></TableCell>
                        <TableCell align="center"><b>Tên lô hàng</b></TableCell>
                        <TableCell align="center"><b>Chủ lô hàng</b></TableCell>
                        <TableCell align="center"><b>Ngày sản xuất</b></TableCell>
                        <TableCell align="center"><b>Số lượng</b></TableCell>
                        <TableCell align="center"><b>Xem chi tiết</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">
                            <img src="/images/extension/main.jpg" className='product-in-transaction-table' alt="" />
                        </TableCell>
                        <TableCell align="center">12349872341243145560</TableCell>
                        <TableCell align="center">Lúa động xuân - Nguyễn Văn An - Thu hoạch đợt một - 2021/2022</TableCell>
                        <TableCell align="center">Nguyễn Văn An</TableCell>
                        <TableCell align="center">21-03-2022</TableCell>
                        <TableCell align="center">5.000KG</TableCell>
                        <TableCell align="center">
                            <IconButton color="success" aria-label="Xem chi tiết đơn hàng" size="large">
                                <i className="fa-solid fa-eye"></i>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">
                            <img src="/images/extension/main.jpg" className='product-in-transaction-table' alt="" />
                        </TableCell>
                        <TableCell align="center">12349872341243145560</TableCell>
                        <TableCell align="center">Lúa động xuân - Nguyễn Văn An - Thu hoạch đợt một - 2021/2022</TableCell>
                        <TableCell align="center">Nguyễn Văn An</TableCell>
                        <TableCell align="center">21-03-2022</TableCell>
                        <TableCell align="center">5.000KG</TableCell>
                        <TableCell align="center">
                            <IconButton color="success" aria-label="Xem chi tiết đơn hàng" size="large">
                                <i className="fa-solid fa-eye"></i>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">
                            <img src="/images/extension/main.jpg" className='product-in-transaction-table' alt="" />
                        </TableCell>
                        <TableCell align="center">12349872341243145560</TableCell>
                        <TableCell align="center">Lúa động xuân - Nguyễn Văn An - Thu hoạch đợt một - 2021/2022</TableCell>
                        <TableCell align="center">Nguyễn Văn An</TableCell>
                        <TableCell align="center">21-03-2022</TableCell>
                        <TableCell align="center">5.000KG</TableCell>
                        <TableCell align="center">
                            <IconButton color="success" aria-label="Xem chi tiết đơn hàng" size="large">
                                <i className="fa-solid fa-eye"></i>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">
                            <img src="/images/extension/main.jpg" className='product-in-transaction-table' alt="" />
                        </TableCell>
                        <TableCell align="center">12349872341243145560</TableCell>
                        <TableCell align="center">Lúa động xuân - Nguyễn Văn An - Thu hoạch đợt một - 2021/2022</TableCell>
                        <TableCell align="center">Nguyễn Văn An</TableCell>
                        <TableCell align="center">21-03-2022</TableCell>
                        <TableCell align="center">5.000KG</TableCell>
                        <TableCell align="center">
                            <IconButton color="success" aria-label="Xem chi tiết đơn hàng" size="large">
                                <i className="fa-solid fa-eye"></i>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default InfoProductComponent;