<?php
    require_once '../load.php';

    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
    }

    if (isset($_GET['adult'])) {
        $adult = intval(trim($_GET["adult"]));
    }

    if(isset($_GET['decade'])) {
        $decade = intval(trim($_GET['decade']));

        $results = getMoviesByDecade($tbl, $adult, $decade);
        echo json_encode($results);

    } else if(isset($_GET['genre'])) {
        $args = array(
            'tbl2' => 'tbl_genre',
            'tbl3' => 'tbl_mov_genre',
            'col' => 'id',
            'col2' => 'movies_id',
            'col3' => 'genre_id',
            'col4' => 'genre_name',
            'genre' => $_GET['genre'],
        );

        $results = getMoviesByGenre($tbl, $adult, $args);
        echo json_encode($results);

    } else {
        $results = getAll($tbl, $adult);
        echo json_encode($results);
    }
