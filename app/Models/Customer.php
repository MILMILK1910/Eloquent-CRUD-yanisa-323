<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'phone',
        'address'
    ];
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
