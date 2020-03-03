<?php
    require('connect.php');

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