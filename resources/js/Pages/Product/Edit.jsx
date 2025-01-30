import React, { useState, useEffect, useRef } from "react";
import { useForm, usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import FlashMessage from '@/Components/FlashMessage';

const EditProductStore = ({ product }) => {
    // ประกาศฟังก์ชันคอมโพเนนต์ชื่อ EditProductStore ที่รับ props ชื่อ product
    const { data, setData, put, errors } = useForm({
        // ใช้ useForm hook เพื่อจัดการฟอร์ม โดยกำหนดค่าเริ่มต้นให้กับฟอร์มจาก props ของ product
        name: product.name,   // กำหนดค่าเริ่มต้นของฟิลด์ name จาก product.name
        amount: product.amount, // กำหนดค่าเริ่มต้นของฟิลด์ amount จาก product.amount
        stock: product.stock,  // กำหนดค่าเริ่มต้นของฟิลด์ stock จาก product.stock
    });

    // สร้าง reference สำหรับ input ชื่อสินค้า
    const nameInputRef = useRef(null);

    useEffect(() => {
        // useEffect นี้จะทำงานเมื่อ update
        // ตรวจสอบว่ามี reference ของ input ชื่อสินค้าอยู่หรือไม่
        if (nameInputRef.current) {
            // ถ้ามี ให้ทำการ focus ที่ input ชื่อสินค้า
            nameInputRef.current.focus();
        }
    }, []); //นี้จะทำงานเพียงครั้งเดียวเมื่อ component ถูก

    const handleSubmit = (e) => {
        // ป้องกันการ reload หน้าเว็บเมื่อฟอร์มถูก submit
        e.preventDefault();
        // ส่งข้อมูลไปยัง endpoint ที่กำหนดโดยใช้ method PUT
        put(`/productstores/${product.id}`, data);
    };

    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Product Store
                </h2>
            }>
            <Head title="Edit Product Store" />
            <FlashMessage flash={flash} />
            <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Edit</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                ref={nameInputRef}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            {errors.name && <div className='text-red-500 text-sm'>{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
                            <input
                                type="text"
                                value={data.amount}
                                onChange={(e) => setData('amount', e.target.value)}
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            />
                            {errors.amount && <div className='text-red-500 text-sm'>{errors.amount}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
                            <input
                                type="text"
                                value={data.stock}
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

export default EditProductStore;
