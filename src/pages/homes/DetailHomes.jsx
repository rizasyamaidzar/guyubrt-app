import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { apiFetch } from '../../api';

const DetailHomes = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await apiFetch(`/homes/${id}`);
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
                            Detail Rumah
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Informasi Rumah
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nomor Rumah
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item.number}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Type
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {item.type}
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
                        </dl>
                    </div>
                </div>

                {/* detail user  */}
                <h2 className='my-4 font-semibold text-xl'>Data Penghuni</h2>
                {item.user.length === 0 ? (
                    <p>Belum Ada Data Penghuni.</p>
                ) : (
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Nama</th>
                                <th className="border border-gray-300 px-4 py-2">No HP</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Pernikahan</th>
                                <th className="border border-gray-300 px-4 py-2">Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.user.map((user) => (
                                <tr key={user.id}>
                                    <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.number_phone}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.status}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.pernikahan ? 'Sudah Menikah' : 'Belum Menikah'}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img src={user.foto} alt={user.name} style={{ width: 50, height: 50 }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default DetailHomes
