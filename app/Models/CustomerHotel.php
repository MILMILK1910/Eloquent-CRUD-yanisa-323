<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CustomerHotel extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'CustomerName',
        'CustomerEmail',
        'CustomerPhone',
        'address'
    ];
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

}
