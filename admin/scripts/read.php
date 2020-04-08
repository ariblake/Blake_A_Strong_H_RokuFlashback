<?php

    function getAll($tbl)
    {
        $pdo = Database::getInstance()->getConnection();
        $queryAll = 'SELECT * FROM ' . $tbl;
        $results = $pdo->query($queryAll);

        if ($results) {
            return $results->fetchAll(PDO::FETCH_ASSOC);
        } else {
            return 'There was a problem accessing this info';
        }
    }

    function getChildMovies(){
        $pdo = Database::getInstance()->getConnection();
        $filterQuery = 'SELECT * FROM tbl_movies AS t, tbl_arating AS t2, tbl_mov_arating AS t3 WHERE t.id = t3.movies_id AND t2.arating_id = t3.arating_id AND t2.arating_name = "everyone"';
        $movies = $pdo->query($filterQuery);
    
        if($movies){
            return $movies->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return 'There was a problem accessing this info';
        }
    }

    function getChildTv(){
        $pdo = Database::getInstance()->getConnection();
        $filterQuery = 'SELECT * FROM tbl_tv AS t, tbl_arating AS t2, tbl_tv_arating AS t3 WHERE t.id = t3.tv_id AND t2.arating_id = t3.arating_id AND t2.arating_name = "everyone"';
        $tv = $pdo->query($filterQuery);
    
        if($tv){
            return $tv->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return 'There was a problem accessing this info';
        }
    }

    function getChildMusic(){
        $pdo = Database::getInstance()->getConnection();
        $filterQuery = 'SELECT * FROM tbl_music AS t, tbl_arating AS t2, tbl_mus_arating AS t3 WHERE t.music_id = t3.music_id AND t2.arating_id = t3.arating_id AND t2.arating_name = "everyone"';
        $music = $pdo->query($filterQuery);
    
        if($music){
            return $music->fetchAll(PDO::FETCH_ASSOC);
        }else{
            return 'There was a problem accessing this info';
        }
    }
