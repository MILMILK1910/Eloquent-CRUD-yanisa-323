<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProductStore extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'name',
        'amount',
        'stock'
    ];
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
