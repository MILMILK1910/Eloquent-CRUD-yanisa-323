<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'room_number',
        'Status',
        'roomtype_id'
    ];
    public function roomtype()
    {
        return $this->belongsTo(RoomType::class);
    }
}
