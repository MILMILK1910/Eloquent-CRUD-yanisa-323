import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Index({ products }) {


    const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'ascending' });

    // ฟังก์ชันสำหรับการจัดเรียงข้อมูล
    const sortedProducts = [...products.data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    // ฟังก์ชันสำหรับการขอจัดเรียงข้อมูล
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    // ฟังก์ชันสำหรับการสร้างปุ่มการแบ่งหน้า
    const renderPagination = () => {
        const currentPage = products.current_page;
        const lastPage = products.last_page;
        const paginationLinks = [];

        if (currentPage > 1) {
            paginationLinks.push(
                <button
                    key="prev"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => window.location.assign(products.prev_page_url)}>
                    Previous
                </button>
            );
        }

        if (currentPage > 3) {
            paginationLinks.push(
                <button key="1"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    onClick={() => window.location.assign(products.links[1].url)}>
                    1
                </button>
            );
            paginationLinks.push(
                <span key="ellipsis1"
                    className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>...</span>);
        }

        for (let i = Math.max(1, currentPage - 1); i <= Math.min(lastPage, currentPage + 1); i++) {
            paginationLinks.push(
                <button
                    key={i}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0 ${i === currentPage ? 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-500 focus:outline-offset-0' : ''}`}
                    onClick={() => window.location.assign(`http://127.0.0.1:8000/productstores?page=${i}`)}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < lastPage - 1) {
            paginationLinks.push(<span key="ellipsis2"
                className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>...</span>);
            paginationLinks.push(
                <button key={lastPage} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                onClick={() => window.location.assign(products.last_page_url)}>
                    {lastPage}
                </button>
            );
        }

        if (currentPage < lastPage) {
            paginationLinks.push(
                <button key="next" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                onClick={() => window.location.assign(products.next_page_url)}>
                    Next
                </button>
            );
        }

        return paginationLinks;
    };

    //สำหรับลบข้อมูล
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            router.delete(`/productstores/${id}`, {
                onSuccess: () => alert('Product deleted successfully!'),
                onError: (error) => console.error('Failed to delete product:', error),
            });
        }
    };


    return (
        <div>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Product
                    </h2>
                }
            >
                <Head title="Product" />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <table className="min-w-full divide-y divide-gray-200 mt-4">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider"
                                        onClick={() => requestSort('id')}>
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {products && products.data.length > 0 ? (
                                    sortedProducts.map((product) => (
                                        <tr key={product.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {product.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {product.amount}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {product.stock}
                                            </td>
                                            <td>
                                                <div>
                                                    <Link href={`/productstores/${product.id}/edit`} className='text-sm text-gray-700'>
                                                        Edit
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => handleDelete(product.id)}
                                                    className="text-red-600 px-4 py-2 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                        >
                                            ไม่มีข้อมูลสินค้า
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {sortedProducts.length > 0 && (
                            <div className="flex justify-center mt-10">
                                {renderPagination()}
                            </div>
                        )}
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    )
}
