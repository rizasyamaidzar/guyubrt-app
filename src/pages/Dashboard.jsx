import React from 'react'
import Card from '../components/Card';
import Chart from '../components/Chart';

const Dashboard = () => {
    const apiUrl = 'http://127.0.0.1:8000/api/expenses'; // Replace with your API URL
    const headers = ['Name', 'Amount'];
    const fields = ['status', 'amount'];

    return (
        <>
            <div className="w-3/4 mx-auto">
                <Card />
                <div className='my-20'>

                    <Chart />
                </div>
            </div>
        </>
    );
}

export default Dashboard
