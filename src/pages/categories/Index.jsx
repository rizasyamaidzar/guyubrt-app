import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import Form from '../../components/Form';
import { apiFetch } from '../../api';

const index = () => {
    const apiUrl = 'http://127.0.0.1:8000/api/categories'; // Replace with your API URL
    const headers = ['Name', 'Amount'];
    const Value = ['name', 'amount'];

    const fields = [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'amount', label: 'amount', type: 'number', required: false },

        // Add more fields as needed
    ];

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
    const handleEdit = (id) => {
        // Logic to handle editing, e.g., navigate to edit form or open modal
        console.log('Edit item with ID:', id);
    };

    const handleDelete = async (id) => {
        // Logic to handle deletion, e.g., making a DELETE request to the API
        console.log('Delete Category with ID:', id);
        try {
            const result = await apiFetch(`/categories/${id}`, 'DELETE'); // Use the helper
            console.log('Category Delete successfully:', result);
            window.location.reload();
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };
    return (
        <>
            <div className="w-3/4 mx-auto">
                {/* <Card /> */}
                <h1 className='font-semibold text-xl my-4'>Form Create Category</h1>
                <Form fields={fields} onSubmit={handleSubmit} />
                <div className="my-10">
                    <h1 className='font-semibold text-xl my-4'>Category</h1>
                    <Table apiUrl={apiUrl} headers={headers} fields={Value} onEdit={handleEdit}
                        onDelete={handleDelete} detailUrl="/categories/:id" />
                </div>
            </div>
        </>
    )
}

export default index
