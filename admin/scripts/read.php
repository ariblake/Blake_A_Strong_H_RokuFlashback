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

    function getMoviesByDecade($tbl, $adult, $decade) {
        $pdo = Database::getInstance()->getConnection();
        $decadeQuery = 'SELECT * FROM ' . $tbl . ' WHERE rating <= '.$adult. ' AND year BETWEEN 19'.$decade.'0 AND 19'.$decade.'9';
        $results = $pdo->query($decadeQuery);

        if ($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing this info';
        }
    }

    function getMoviesByGenre($tbl, $adult, $args) {
        $pdo = Database::getInstance()->getConnection();
    
        $filterQuery = 'SELECT * FROM ' . $tbl . ' AS t, ' . $args['tbl2'] . ' AS t2, ' . $args['tbl3'] . ' AS t3';
        $filterQuery .= ' WHERE t.' . $args['col'] . ' = t3.' . $args['col2'];
        $filterQuery .= ' AND t2.' . $args['col3'] . ' = t3.' . $args['col3'];
        $filterQuery .= ' AND t2.' . $args['col4'] . ' = "' . $args['genre'] . '"';
        $filterQuery .= ' AND rating <= '.$adult;
    
        $results = $pdo->query($filterQuery);

        if ($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing this info';
        }
    }
