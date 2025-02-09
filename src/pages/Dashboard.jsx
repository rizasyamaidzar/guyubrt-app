import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Chart from '../components/Chart';
import { apiFetch } from '../api';

const Dashboard = () => {
    // const apiUrl = 'http://127.0.0.1:8000/api/expenses'; // Replace with your API URL
    // const headers = ['Name', 'Amount'];
    // const fields = ['status', 'amount'];
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await apiFetch(`/charts`);
                setItem(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchItemDetails();
    }, []); // Add an empty dependency array to run only once on mount

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!item) return null; // Ensure item is available before processing

    const incomeData = [];
    const expenseData = [];

    for (let month = 1; month <= 12; month++) {
        const monthStr = month.toString().padStart(2, '0'); // Formats month as "01", "02", ..., "12"
        incomeData.push(item.income[monthStr] || 0); // Push income or 0 if not present
        expenseData.push(item.expense[monthStr] || 0); // Push expense or 0 if not present
    }

    console.log('Income Data:', incomeData);
    console.log('Expense Data:', expenseData);
    return (
        <>
            <div className="w-3/4 mx-auto">
                <Card />
                <div className='my-20'>

                    <Chart Income={incomeData} Expense={expenseData} />
                </div>
            </div>
        </>
    );
}

export default Dashboard
