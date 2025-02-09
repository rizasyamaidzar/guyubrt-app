import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiFetch } from '../../api';

const Detail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await apiFetch(`/users/${id}`);
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
        <>
            <div className="w-3/4 mx-auto my-10">

                <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Detail Warga
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Informasi Warga
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nama Warga
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item.name}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    No Rumah
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item?.home?.number}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    No HP
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item.number_phone}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Status
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item.status}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Pernikahan
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item.pernikahan ? 'Sudah Menikah' : 'Belum Menikah'}
                                    <img src={item.foto} alt={item.name} style={{ width: 50, height: 50 }} />
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* detail user  */}
                <h2 className='my-4 font-semibold text-xl'>Data Pembayaran</h2>
                {item.income.length === 0 ? (
                    <p>Belum Ada Data Penghuni.</p>
                ) : (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Tanggal</th>
                                <th className="border border-gray-300 px-4 py-2">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.income.map((income) => (
                                <tr key={income.id}>
                                    <td className="border border-gray-300 px-4 py-2">{income.date}</td>
                                    <td className="border border-gray-300 px-4 py-2">{income.category_id}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default Detail
