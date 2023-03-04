<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseParties extends Model
{
    use HasFactory;
    protected $guard = [];
    protected $hidden = ['created_at', 'updated_at'];
}
