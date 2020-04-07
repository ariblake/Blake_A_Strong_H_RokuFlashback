<?php

    function getMovies($conn) {
        $getData = 'SELECT * FROM tbl_movies';
        $runQuery = $conn->query($getData);
    
        $result = array();
        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row of data into our array to make it easy to iterate over
            $result[] = $row;
        }
    
        return $result;
    }

    function getTv($conn) {
        $getData = 'SELECT * FROM tbl_tv';
        $runQuery = $conn->query($getData);
    
        $result = array();
        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row of data into our array to make it easy to iterate over
            $result[] = $row;
        }
    
        return $result;
    }

    function getMusic($conn) {
        $getData = 'SELECT * FROM tbl_music';
        $runQuery = $conn->query($getData);
    
        $result = array();
        while ($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row of data into our array to make it easy to iterate over
            $result[] = $row;
        }
    
        return $result;
    }