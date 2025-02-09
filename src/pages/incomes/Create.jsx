import React, { useEffect, useState } from 'react'
import Form from '../../components/Form';
import { apiFetch } from '../../api';
import { Navigate, useNavigate } from 'react-router-dom';
import { number } from 'prop-types';

const Create = () => {
    const [users, setUser] = useState([]);
    const fetchHome = async () => {
        try {
            const result = await apiFetch('/users', 'GET');
            console.log('Users fetched successfully:', result);

            const userOptions = result.data.data.map(user => ({
                value: user.id,
                label: user.name,
            }));
            console.log(userOptions)
            setUser(userOptions); // Store the options in state
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    const [categories, setCategory] = useState([]);
    const fetcCategory = async () => {
        try {
            const result = await apiFetch('/categories', 'GET');
            console.log('Users fetched successfully:', result);

            const categoryOptions = result.data.data.map(category => ({
                value: category.id,
                label: category.name,
            }));
            console.log(categoryOptions)
            setCategory(categoryOptions);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        fetchHome();
        fetcCategory();
    }, []);
    const fields = [
        { name: 'date', label: 'Tanggal', type: 'date', required: true },
        {
            name: 'user_id',
            label: 'Nama Warga',
            type: 'select',
            required: true,
            options: users, // Use the fetched categories
        },
        {
            name: 'category_id',
            label: 'Jenis Pembayaran',
            type: 'select',
            required: true,
            options: categories, // Use the fetched categories
        },
    ];


    const handleSubmit = async (data) => {
        console.log('Creating item:', data.Object);
        const dataToSend = {
            date: data.values.date,
            user_id: Number(data.values.user_id),
            category_id: Number(data.values.category_id)
        }
        console.log('Data to send item:', dataToSend);
        try {
            const result = await apiFetch('/incomes', 'POST', dataToSend); // Use the helper
            console.log('Item created successfully:', result);
            // // window.location.reload();
            // Navigate('/incomes');
            window.location.href = `/incomes`;
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <>
            <div className="w-3/4 mx-auto">
                {/* <Card /> */}
                <h1 className='font-semibold text-xl my-4'>Form Tambah Pemasukan</h1>
                <Form fields={fields} onSubmit={handleSubmit} />
            </div>
        </>
    )
}

export default Create
