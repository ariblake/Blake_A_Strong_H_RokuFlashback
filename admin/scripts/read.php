<?php

    function getMovies() {
        $pdo = Database::getInstance()->getConnection();
        $queryMovies = 'SELECT * FROM tbl_movies';
        $movies = $pdo->query($queryMovies);

        if ($movies) {
            return $movies->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing the movies';
        }
    }

    function getTv() {
        $pdo = Database::getInstance()->getConnection();
        $queryTv = 'SELECT * FROM tbl_tv';
        $tv = $pdo->query($queryTv);
    
        if ($tv) {
            return $tv->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing the tv shows';
        }
    }

    function getMusic() {
        $pdo = Database::getInstance()->getConnection();
        $queryMusic = 'SELECT * FROM tbl_music';
        $music = $pdo->query($queryMusic);
    
        if ($music) {
            return $music->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing the music';
        }
    }