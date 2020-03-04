<?php
    require('functions.php');

    if(isset($_GET["getMovies"])) {
        $movies = getMovies($pdo);
    
        echo json_encode($movies);
    }

    if(isset($_GET["getTv"])) {
        $tv = getTv($pdo);
    
        echo json_encode($tv);
    }

    if(isset($_GET["getMusic"])) {
        $music = getMusic($pdo);
    
        echo json_encode($music);
    }

    if(isset($_GET["getUsers"])) {
        $users = getUsers($pdo);
    
        echo json_encode($users);
    }

    if (isset($_GET['user'])) {
        $user = getUser($pdo);

        echo json_encode($user);
    }

    