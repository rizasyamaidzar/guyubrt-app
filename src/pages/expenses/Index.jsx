import React from 'react'
import Table from '../../components/Table';

const index = () => {
    const apiUrl = 'http://127.0.0.1:8000/api/users'; // Replace with your API URL
    const headers = ['Name', 'Status', "No HP"];
    const fields = ['name', 'status', "number_phone"];

    return (
        <>
            <div className="w-3/4 mx-auto">

                <h1>Hallo Ini halaman HOME</h1>
                <Table apiUrl={apiUrl} headers={headers} fields={fields} />
            </div>
        </>
    )
}

export default index
