import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="flex justify-center items-center">

                <h2 className="text-start text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl dark:text-white">Selamat Datang Di Guyub RT APP'S</h2>
                <div className="mx-auto px-4 sm:px-6 ">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5 mt-4">
                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Uang Kas</dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-blue-600 dark:text-blue-400">1.6M</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Pemasukan</dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-blue-600 dark:text-blue-400">19.2K
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Pengeluaran</dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-blue-600 dark:text-blue-400">4.9K</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Rumah
                                    </dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-blue-600 dark:text-blue-400">166.7K
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
                            <div className="px-4 py-5 sm:p-6">
                                <dl>
                                    <dt className="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">Total Warga
                                    </dt>
                                    <dd className="mt-1 text-3xl leading-9 font-semibold text-blue-600 dark:text-blue-400">166.7K
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
