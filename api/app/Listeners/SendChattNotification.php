<?php

namespace App\Listeners;

use App\Events\PeocessChat;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendChattNotification implements ShouldQueue
{

    public $connection = 'database';
    
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PeocessChat $event): void
    {
        
    }

}
