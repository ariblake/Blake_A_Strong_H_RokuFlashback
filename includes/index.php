<?php
    require('functions.php');

    if(isset($_GET["getMovies"])) {
        $movies = getMovies($pdo);
    
        echo json_encode($movies);
    }