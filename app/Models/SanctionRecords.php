<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class SanctionRecords extends Model
{
    use HasFactory;
    
    protected $appends = ['sanction_desc'];
    protected $hidden = ['created_at', 'updated_at'];

    public function getSanctionDescAttribute(){
        return Sanctions::where('id', $this->sancat_id)->select('description')->first()->description;
    }
}
