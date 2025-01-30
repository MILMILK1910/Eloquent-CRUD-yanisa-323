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
        Schema::create('customer_hotels', function (Blueprint $table) {
            $table->id();
            $table->string('CustomerName', 100);
            $table->string('CustomerEmail', 100);
            $table->string('CustomerPhone', 10);
            $table->string('address');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_hotels');
    }
};
