<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'student_name',
        'major',
        'email',
        'phone'
    ];
    public function registers()
    {
        return $this->belongsToMany(Register::class);
    }
}
