import React from 'react'
import Form from '../../components/Form';
import { apiFetch } from '../../api';
import { Navigate, useNavigate } from 'react-router-dom';
import { number } from 'prop-types';

const Create = () => {
    const type = [{
        value: "Tetap",
        label: "Tetap",
    }, {
        value: "Kontrak",
        label: "Kontrak",
    },
    ]
    const status = [{
        value: "Dihuni",
        label: "Dihuni",
    }, {
        value: "Tidak Dihuni",
        label: "Tidak Dihuni",
    },
    ]
    const fields = [
        { name: 'number', label: 'Nomor Rumah', type: 'text', required: true },
        {
            name: 'type',
            label: 'Tipe Rumah',
            type: 'select',
            required: true,
            options: type, // Use the fetched categories
        },
        {
            name: 'status',
            label: 'Status Rumah',
            type: 'select',
            required: true,
            options: status, // Use the fetched categories
        },
    ];


    const handleSubmit = async (data) => {
        console.log('Creating item:', data.Object);
        const dataToSend = {
            number: data.values.number,
            type: data.values.type,
            status: data.values.status
        }
        console.log('Data to send item:', dataToSend);
        try {
            const result = await apiFetch('/homes', 'POST', dataToSend); // Use the helper
            console.log('Item created successfully:', result);
            // window.location.reload();
            Navigate('/homes');
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
            </div>
        </>
    )
}

export default Create
