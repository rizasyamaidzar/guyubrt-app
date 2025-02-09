import React from 'react'
import Form from '../../components/Form';
import { apiFetch } from '../../api';
import { Navigate, useNavigate } from 'react-router-dom';
import { number } from 'prop-types';

const Create = () => {
    const fields = [
        { name: 'name', label: 'Nama Keperluan', type: 'text', required: true },
        { name: 'desc', label: 'Deskripsi Keperluan Keperluan', type: 'text', required: true },
        { name: 'date', label: 'Tanggal', type: 'date', required: true },
        { name: 'amount', label: 'Jumlah', type: 'number', required: true },

    ];


    const handleSubmit = async (data) => {
        console.log('Creating item:', data.Object);
        const dataToSend = {
            name: data.values.name,
            desc: data.values.desc,
            date: data.values.date,
            amount: data.values.amount
        }
        console.log('Data to send item:', dataToSend);
        try {
            const result = await apiFetch('/expenses', 'POST', dataToSend); // Use the helper
            console.log('Item created successfully:', result);
            window.location.href = `/expenses`;
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <>
            <div className="w-3/4 mx-auto">
                {/* <Card /> */}
                <h1 className='font-semibold text-xl my-4'>Form Tambah Pengeluaran</h1>
                <Form fields={fields} onSubmit={handleSubmit} />
            </div>
        </>
    )
}

export default Create
