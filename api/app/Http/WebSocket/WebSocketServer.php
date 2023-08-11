<?php

namespace App\Http;

use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;

class WebSocketServer implements MessageComponentInterface {
    protected $connections;

    public function __construct() {
        $this->connections = new \SplObjectStorage();
    }

    public function onOpen(ConnectionInterface $conn) {
        $this->connections->attach($conn);
        echo "Nova conexão: {$conn->resourceId}\n";
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        foreach ($this->connections as $connection) {
            $connection->send("Usuário {$from->resourceId} disse: $msg");
        }
    }

    public function onClose(ConnectionInterface $conn) {
        $this->connections->detach($conn);
        echo "Conexão {$conn->resourceId} foi fechada\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "Erro na conexão: {$e->getMessage()}\n";
        $conn->close();
    }
}
