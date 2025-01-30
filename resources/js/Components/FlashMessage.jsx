import { useEffect, useState } from 'react';

const FlashMessage = ({ flash }) => {
    // สร้าง state สำหรับ visible โดยเริ่มต้นเป็น false
    // ถ้ามีข้อความ success หรือ error ให้ตั้งค่า visible เป็น true
    const [visible, setVisible] = useState(!!flash.success || !!flash.error);

    useEffect(() => {
        if (flash.success || flash.error) {
            // ถ้ามีข้อความ success หรือ error ให้ตั้งค่า visible เป็น true
            setVisible(true);

            const timer = setTimeout(() => { // ตั้งเวลา 3 วินาทีเพื่อซ่อนข้อความ
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer); // คืนค่าฟังก์ชันที่ใช้ในการลบ timer
        }
    }, [flash]);

    if (!visible) return null; // ถ้า visible เป็น false ไม่ต้องแสดงผลอะไร
    return ( // แสดงข้อความ flash
        <div
            className={`${flash.success
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'} md-4 rounded border p-4`}
                    >
            <p>{flash.success || flash.error}</p>
        </div>
    );
};
export default FlashMessage;
