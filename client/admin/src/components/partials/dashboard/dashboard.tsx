import React from 'react';
import './dashboard.scss';
import Select from 'react-select';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'iểu đồ thống kê sản lượng xuất nhập theo thời gian',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Lô hàng nhận',
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Lô hàng xuất',
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const Dashboard = () => {

    const selectedValueT = [
        {value: 1, label: '2018'},
        {value: 2, label: '2019'}
    ]

    const selectedValueSR = [
        {value: 1, label: 'Lô hàng xuất - nhận'},
        {value: 2, label: 'Lô hàng bị từ chối'}
    ]

    const ctx = document.getElementById('myChart12')

    return (
        <div className='dashboard'>
            <br />
            <div className="general-dashboard">
                <h2>Thống kê tổng quan</h2>
                <div className="main-general-dashboard">
                    <div className="dashboard-total">
                        <h3>Lô hàng nhận</h3>
                        <p>124 lô</p>
                        <p>1.240.000 Kg</p>
                    </div>
                    <div className="dashboard-total">
                        <h3>Lô hàng giao</h3>
                        <p>120 lô</p>
                        <p>1.120.000 Kg</p>
                    </div>
                    <div className="dashboard-total">
                        <h3>Lô hàng chờ</h3>
                        <p>4 lô</p>
                        <p>40.000 Kg</p>
                    </div>
                    <div className="dashboard-total">
                        <h3>Lô bị từ chối</h3>
                        <p>0 lô</p>
                        <p>0 Kg</p>
                    </div>
                </div>

            </div>
            <br />
            <div className="chart-dashboard">
                <h3>Biểu đồ thống kê</h3>
                <div className="chart-control">
                    <Select
                        id='year'
                        className='dashboard-select'
                        options={selectedValueT}
                        placeholder='Chọn thời gian'
                    ></Select>
                    <Select
                        id='product'
                        options={selectedValueSR}
                        className='dashboard-select'
                        placeholder='Chọn loại lô hàng'
                    ></Select>
                </div>
                <br />
                <div className="chart-wrapper">
                    <div className="chart-content">
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default Dashboard;