import React, { useEffect, useState } from 'react'
import Form from '../../components/Form';
import { apiFetch } from '../../api';
import { Navigate, useNavigate } from 'react-router-dom';
import { number } from 'prop-types';

const Create = () => {
    const [homes, setHomes] = useState([]);
    const fetchHome = async () => {
        try {
            const result = await apiFetch('/homes', 'GET');
            console.log('Homes fetched successfully:', result);

            const homeOptions = result.data.data.map(category => ({
                value: category.id,
                label: category.number,
            }));
            console.log(homeOptions)
            setHomes(homeOptions); // Store the options in state
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        fetchHome(); // Call the fetch function on component mount
    }, []);
    const status = [{
        value: "Tetap",
        label: "Tetap",
    }, {
        value: "Kontrak",
        label: "Kontrak",
    },
    ]
    const pernikahan = [{
        value: 1,
        label: "Menikah",
    }, {
        value: 0,
        label: "Belum Menikah",
    },
    ]
    const fields = [
        { name: 'foto', label: 'Foto KTP', type: 'file', required: true },
        { name: 'name', label: 'Nama', type: 'text', required: true },
        { name: 'number_phone', label: 'No HP', type: 'text', required: true },
        {
            name: 'status',
            label: 'Status',
            type: 'select',
            required: true,
            options: status, // Use the fetched categories
        },
        {
            name: 'pernikahan',
            label: 'Pernikahan',
            type: 'select',
            required: true,
            options: pernikahan, // Use the fetched categories
        },
        {
            name: 'home_id',
            label: 'Rumah',
            type: 'select',
            required: true,
            options: homes, // Use the fetched homes
        },
    ];

    const handleSubmit = async (data) => {
        console.log('Creating item:', data.values);

        // Create a new FormData object\
        const formData = data.values;
        const dataToSend = new FormData();
        dataToSend.append('name', formData.name);
        dataToSend.append('status', formData.status);
        dataToSend.append('number_phone', formData.number_phone);
        dataToSend.append('pernikahan', Number(formData.pernikahan));
        dataToSend.append('home_id', Number(formData.home_id));
        // Append the file (if exists)
        const file = formData.foto;
        if (file) {
            dataToSend.append('foto', file);
        }
        console.log('Data to send item:', formData);

        try {
            const result = await apiFetch('/users', 'POST', formData); // Use the helper
            console.log('Item created successfully:', result);
            Navigate('/users');
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <>
            <div className="w-3/4 mx-auto">
                {/* <Card /> */}
                <h1 className='font-semibold text-xl my-4'>Form Create Warga</h1>
                <Form fields={fields} onSubmit={handleSubmit} />
            </div>
        </>
    )
}

export default Create
