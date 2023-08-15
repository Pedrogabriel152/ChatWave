<?php

use App\Models\Chat;
use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('chat.{destiny_id}.{chart_id}', function (User $user, int $destiny_id, int $chart_id) {
    $destinyUser = User::find($destiny_id);
    $chat = Chat::find($chart_id);
    return $user->id === $chat->user_id && $destinyUser->id === $chat->user_id;
});
