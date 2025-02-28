<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoomType extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'RoomTypeName',
        'TypeDescription',
        'Price'
    ];
    public function room()
    {
        return $this->hasMany(Room::class);
    }
}
