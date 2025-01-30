import { useForm } from '@inertiajs/react';
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FlashMessage from '@/Components/FlashMessage';
import { usePage } from '@inertiajs/react';

const CreateProductStore = () => {
    const { data, setData, post, errors } = useForm({
        name: '',
        amount: '',
        stock: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/productstores');
    };

    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Product Store
                </h2>
            }>
            <Head title="Create Product Store" />
            <FlashMessage flash={flash} />
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Create</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                defaultValue={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            {errors.name && <div className='text-red-500 text-sm'>{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
                            <input
                                type="text"
                                defaultValue={data.amount}
                                onChange={(e) => setData('amount', e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            {errors.amount && <div className='text-red-500 text-sm'>{errors.amount}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
                            <input
                                type="text"
                                defaultValue={data.stock}
                                onChange={(e) => setData('stock', e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            {errors.stock && <div className='text-red-500 text-sm'>{errors.stock}</div>}
                        </div>
                        <div className="flex justify-end mt-7">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Finish</button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateProductStore;
