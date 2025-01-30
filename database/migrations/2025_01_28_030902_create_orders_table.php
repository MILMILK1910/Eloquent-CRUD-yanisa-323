<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('quantity');
            $table->timestamps();

            $table->unsignedBigInteger('customer_id'); // ใช้ unsignedBigInteger สำหรับ foreign key
            $table->foreign('customer_id')
                  ->references('id')   // ใช้ 'id' ของ customers เป็นการอ้างอิง
                  ->on('customers')    // ตารางที่ต้องการอ้างอิงคือ 'customers'
                  ->onDelete('cascade'); // กำหนด action เมื่อข้อมูลใน customers ถูกลบ
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
