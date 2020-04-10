<?php
    function getAll($tbl, $adult) {
        $pdo = Database::getInstance()->getConnection();
        $queryAll = 'SELECT * FROM ' . $tbl . ' WHERE rating <= '.$adult;
        $results = $pdo->query($queryAll);

        if ($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing this info';
        }
    }
