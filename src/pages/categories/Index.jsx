import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import Card from '../../components/Card';
import Chart from '../../components/Chart';
import Form from '../../components/Form';
import { apiFetch } from '../../api';

const index = () => {
    const [categories, setCategories] = useState([]);
    const apiUrl = 'http://127.0.0.1:8000/api/categories'; // Replace with your API URL
    const headers = ['Name', 'Amount', "No HP"];
    const Value = ['name', 'amount', "number_phone"];

    const fields = [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'amount', label: 'amount', type: 'number', required: false },
        {
            name: 'category',
            label: 'Category',
            type: 'select',
            required: true,
            options: categories, // Use the fetched categories
        },
        // Add more fields as needed
    ];
    const fetchHome = async () => {
        try {
            const result = await apiFetch('/categories', 'GET');
            console.log('Categories fetched successfully:', result);

            const categoryOptions = result.data.data.map(category => ({
                value: category.id,
                label: category.name,
            }));
            setCategories(categoryOptions); // Store the options in state
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        fetchHome(); // Call the fetch function on component mount
    }, []);
    const handleSubmit = async (data) => {
        console.log('Creating item:', data.Object);
        const dataToSend = {
            name: data.values.name,
            amount: data.values.amount
        }
        console.log('Data to send item:', dataToSend);
        try {
            const result = await apiFetch('/categories', 'POST', dataToSend); // Use the helper
            console.log('Item created successfully:', result);
            window.location.reload();
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };
    return (
        <>
            <div className="w-3/4 mx-auto">
                {/* <Card /> */}
                <h1>Hallo Ini halaman HOME</h1>
                <Form fields={fields} onSubmit={handleSubmit} />
                <Table apiUrl={apiUrl} headers={headers} fields={Value} />
            </div>
        </>
    )
}

export default index
