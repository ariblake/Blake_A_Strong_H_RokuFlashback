<?php
    require_once '../load.php';

    if(isset($_GET["getMovies"])) {
        $movies = getMovies();
    
        echo json_encode($movies);
    }

    if(isset($_GET["getTv"])) {
        $tv = getTv();
    
        echo json_encode($tv);
    }

    if(isset($_GET["getMusic"])) {
        $music = getMusic();
    
        echo json_encode($music);
    }

    // if (isset($_GET['user'])) {
    //     $user = getUser($pdo);

    //     echo json_encode($user);
    // }

    