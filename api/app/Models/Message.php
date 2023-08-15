<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'status',
        'char_id',
        'user_id'
    ];

    public function user() {
        return $this->hasOne(User::class, 'user_id');
    }

    public function chat() {
        return $this->hasOne(Chat::class, 'chat_id');
    }
}
