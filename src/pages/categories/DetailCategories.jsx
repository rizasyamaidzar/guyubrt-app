import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { apiFetch } from '../../api';

const DetailCategories = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await apiFetch(`/categories/${id}`);
                setItem(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchItemDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!item) return <div>No item found</div>;

    return (
        <div>

            <h2>Item Detail</h2>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Amount: {item.amount}</p>
            {/* Add more fields as needed */}
        </div>
    );
};


export default DetailCategories
