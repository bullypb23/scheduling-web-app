<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'start', 'end', 'title', 'user_id'
    ];
}
