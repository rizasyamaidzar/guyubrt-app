import React from 'react'
import Table from '../../components/Table';
import { apiFetch } from '../../api';

const index = () => {
    const apiUrl = 'http://127.0.0.1:8000/api/expenses'; // Replace with your API URL
    const headers = ['Nama', 'Tanggal', "Jumlah"];
    const fields = ['name', 'date', 'amount'];
    const handleEdit = (id) => {
        // Logic to handle editing, e.g., navigate to edit form or open modal
        console.log('Edit item with ID:', id);
    };

    const handleDelete = async (id) => {
        // Logic to handle deletion, e.g., making a DELETE request to the API
        console.log('Delete Category with ID:', id);
        try {
            const result = await apiFetch(`/expenses/${id}`, 'DELETE'); // Use the helper
            console.log('Category Delete successfully:', result);
            window.location.reload();
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <>
            <div className="w-3/4 mx-auto">
                <div className="flex justify-between">
                    <h1 className='font-semibold text-xl my-4'>Pengeluaran</h1>
                    <a
                        href="expenses/create"
                        className="text-white rounded-lg h-1/2 p-2 bg-blue-600"
                    >
                        Tambah
                    </a>
                </div>
                <Table apiUrl={apiUrl} headers={headers} fields={fields} onEdit={handleEdit}
                    onDelete={handleDelete} detailUrl="/expenses/:id" />
            </div>
        </>
    )
}

export default index
