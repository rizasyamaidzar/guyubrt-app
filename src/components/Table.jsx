import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Table = ({ apiUrl, headers, fields, onEdit, onDelete, detailUrl }) => {
    const navigate = useNavigate()
    const [data, setData] = useState([]); // Initial state as empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                console.log(result); // Log the entire response for debugging

                // Access the correct array from the nested data object
                if (result.success && result.data && Array.isArray(result.data.data)) {
                    setData(result.data.data); // Set the categories array
                } else {
                    console.error('Unexpected data format:', result);
                    setData([]); // Handle unexpected format
                }
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!Array.isArray(data)) return <div>Unexpected data format</div>; // Check data format

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">Actions</th> {/* Actions header */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            {fields.map((field, idx) => (
                                <td key={idx} className="px-6 py-4">
                                    {item[field]} {/* Access item by field */}
                                </td>
                            ))}
                            <td className="px-6 py-4">
                                <a
                                    href={detailUrl.replace(':id', item.id)}
                                    className="text-white rounded-lg p-2 bg-green-600"
                                >
                                    View
                                </a>
                                <button
                                    onClick={() => onEdit(item.id)} // Pass the item ID to the edit function
                                    className="text-white rounded-lg p-2 bg-blue-600 mx-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(item.id)} // Pass the item ID to the delete function
                                    className="text-white rounded-lg p-2 bg-red-600"
                                >
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

// PropTypes validation
Table.propTypes = {
    apiUrl: PropTypes.string.isRequired,
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    fields: PropTypes.arrayOf(PropTypes.string).isRequired, // New prop for fields
    onEdit: PropTypes.func.isRequired, // Function to handle edit
    onDelete: PropTypes.func.isRequired,
    detailUrl: PropTypes.string.isRequired, // Function to handle delete
};

export default Table;