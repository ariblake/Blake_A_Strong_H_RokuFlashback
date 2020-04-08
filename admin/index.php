<?php
    require_once '../load.php';

    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
        $results = getAll($tbl);
        echo json_encode($results);
    }

    if(isset($_GET["getChildMovies"])) {
        $movies = getChildMovies();
        echo json_encode($movies);
    }

    if(isset($_GET["getChildTv"])) {
        $tv = getChildTv();
        echo json_encode($tv);
    }

    if(isset($_GET["getChildMusic"])) {
        $music = getChildMusic();
        echo json_encode($music);
    }